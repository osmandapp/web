---
sidebar_position: 4
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Navigate Map activity {#navigate-map-activity}
There is map and switch for opengl rengering, it has longClickListener on mapView, after first tap start point is selected, after second tap it selects finish and starts route calculation.

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
			actionBar.setTitle("Navigate map");
			actionBar.setDisplayHomeAsUpEnabled(true);
			actionBar.setDisplayShowHomeEnabled(true);
		}

		CompoundButton openglSwitch = findViewById(R.id.opengl_switch);
		openglSwitch.setChecked(app.getSettings().USE_OPENGL_RENDER.get());
		openglSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
			app.getSettings().USE_OPENGL_RENDER.set(isChecked);
			RestartActivity.doRestart(this);
		});

		//set start location and zoom for map
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
						app.showShortToastMessage("Start point " + latLon.getLatitude() + " " + latLon.getLongitude());
					} else if (finish == null) {
						finish = latLon;
						app.showShortToastMessage("Finish point " + latLon.getLatitude() + " " + latLon.getLongitude());
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

		app.showShortToastMessage("StartNavigation from " + start.getLatitude() + " " + start.getLongitude()
				+ " to " + finish.getLatitude() + " " + finish.getLongitude());

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
