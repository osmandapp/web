---
source-hash: c04ca618d3358afda1016b282a182e90d180da8a4be9bb6b7bf6b059af6893e6
sidebar_position: 4
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Atividade de navegação no mapa {#navigate-map-activity}
Existe um mapa e um interruptor para renderização opengl, ele possui um longClickListener no mapView, após o primeiro toque o ponto inicial é selecionado, após o segundo toque ele seleciona o destino e inicia o cálculo da rota.

  ```
  public class NavigateMapActivity extends AppCompatActivity  {

	private OsmandApplication app;
	private OsmandMapTileView mapTileView;

	private MapViewWithLayers mapViewWithLayers;
	private AppInitializeListener initListener;
	private OnLongClickListener clickListener;

	private LatLon start;
	private LatLon finish;

	@Override
	public void onCreate(@Nullable Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.simple_map_activity);
		mapViewWithLayers = findViewById(R.id.map_view_with_layers);

		app = (OsmandApplication) getApplication();

		mapTileView = app.getOsmandMap().getMapView();
		mapTileView.setupOpenGLView();

		ActionBar actionBar = getSupportActionBar();
		if (actionBar != null) {
			actionBar.setTitle("Navegar no mapa");
			actionBar.setDisplayHomeAsUpEnabled(true);
			actionBar.setDisplayShowHomeEnabled(true);
		}

		CompoundButton openglSwitch = findViewById(R.id.opengl_switch);
		openglSwitch.setChecked(app.getSettings().USE_OPENGL_RENDER.get());
		openglSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
			app.getSettings().USE_OPENGL_RENDER.set(isChecked);
			RestartActivity.doRestart(this);
		});

		//definir localização inicial e zoom para o mapa
		mapTileView.setIntZoom(14);
		mapTileView.setLatLon(52.3704312, 4.8904288);
	}

	@Override
	public boolean onOptionsItemSelected(@NonNull MenuItem item) {
		if (item.getItemId() == android.R.id.home) {
			finish();
		}
		return super.onOptionsItemSelected(item);
	}

	@Override
	@SuppressLint("SyntheticAccessor")
	protected void onResume() {
		super.onResume();
		mapViewWithLayers.onResume();
		mapTileView.setOnLongClickListener(getClickListener());
	}

	private OnLongClickListener getClickListener() {
		if (clickListener == null) {
			clickListener = new OnLongClickListener() {
				@Override
				public boolean onLongPressEvent(PointF point) {
					LatLon latLon = mapTileView.getLatLonFromPixel(point.x, point.y);
					if (start == null) {
						start = latLon;
						app.showShortToastMessage("Ponto inicial " + latLon.getLatitude() + " " + latLon.getLongitude());
					} else if (finish == null) {
						finish = latLon;
						app.showShortToastMessage("Ponto final " + latLon.getLatitude() + " " + latLon.getLongitude());
						startNavigation();
					}
					return true;
				}
			};
		}
		return clickListener;
	}

	private void startNavigation() {
		OsmandSettings settings = app.getSettings();
		RoutingHelper routingHelper = app.getRoutingHelper();
		settings.setApplicationMode(ApplicationMode.CAR);

		TargetPointsHelper targetPointsHelper = app.getTargetPointsHelper();

		targetPointsHelper.setStartPoint(start, false, new PointDescription(start.getLatitude(), start.getLongitude()));
		targetPointsHelper.navigateToPoint(finish, true, -1, new PointDescription(finish.getLatitude(), finish.getLongitude()));

		app.getOsmandMap().getMapActions().enterRoutePlanningModeGivenGpx(null, start, null, true, false);

		settings.FOLLOW_THE_ROUTE.set(true);
		routingHelper.setFollowingMode(true);
		routingHelper.setRoutePlanningMode(false);
		routingHelper.notifyIfRouteIsCalculated();
		routingHelper.setCurrentLocation(app.getLocationProvider().getLastKnownLocation(), false);

		OsmAndLocationProvider.requestFineLocationPermissionIfNeeded(this);

		app.showShortToastMessage("Iniciar navegação de " + start.getLatitude() + " " + start.getLongitude()
				+ " para " + finish.getLatitude() + " " + finish.getLongitude());

		start = null;
		finish = null;
	}

	@Override
	protected void onPause() {
		super.onPause();
		mapViewWithLayers.onPause();
		mapTileView.setOnLongClickListener(null);
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		mapViewWithLayers.onDestroy();
	}
}
```