---
sidebar_position: 3
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Points sur l'activité de la carte
Les points favoris sont affichés sur la carte

  ```
 public class PointsOnMapActivity extends AppCompatActivity {

	private OsmandApplication app;
	private OsmandMapTileView mapTileView;

	private MapViewWithLayers mapViewWithLayers;
	private AppInitializeListener initListener;

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
			actionBar.setTitle("Points on map");
			actionBar.setDisplayHomeAsUpEnabled(true);
			actionBar.setDisplayShowHomeEnabled(true);
		}

		CompoundButton openglSwitch = findViewById(R.id.opengl_switch);
		openglSwitch.setChecked(app.getSettings().USE_OPENGL_RENDER.get());
		openglSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
			app.getSettings().USE_OPENGL_RENDER.set(isChecked);
			RestartActivity.doRestart(this);
		});

		FavouritesHelper favouritesHelper = app.getFavoritesHelper();
		for (FavouritePoint point : getFavouritePoints()) {
			favouritesHelper.addFavourite(point);
		}

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
	protected void onResume() {
		super.onResume();
		mapViewWithLayers.onResume();
	}

	@Override
	protected void onPause() {
		super.onPause();
		mapViewWithLayers.onPause();
	}

	@Override
	protected void onDestroy() {
		super.onDestroy();
		mapViewWithLayers.onDestroy();
	}

	private List<FavouritePoint> getFavouritePoints() {
		List<FavouritePoint> points = new ArrayList<>();
		points.add(new FavouritePoint(50.8465565, 4.351697, "Brussel", "cities"));
		points.add(new FavouritePoint(51.5073219, -0.1276474, "London", "cities"));
		points.add(new FavouritePoint(48.8566101, 2.3514992, "Paris", "cities"));
		points.add(new FavouritePoint(47.4983815, 19.0404707, "Budapest", "cities"));
		points.add(new FavouritePoint(55.7506828, 37.6174976, "Moscow", "cities"));
		points.add(new FavouritePoint(39.9059631, 116.391248, "Beijing", "cities"));
		points.add(new FavouritePoint(35.6828378, 139.7589667, "Tokyo", "cities"));
		points.add(new FavouritePoint(38.8949549, -77.0366456, "Washington", "cities"));
		points.add(new FavouritePoint(45.4210328, -75.6900219, "Ottawa", "cities"));
		points.add(new FavouritePoint(8.9710438, -79.5340599, "Panama", "cities"));
		points.add(new FavouritePoint(53.9072394, 27.5863608, "Minsk", "cities"));
		points.add(new FavouritePoint(52.5162303, 13.3777309, "Berlin", "cities"));
		points.add(new FavouritePoint(52.3704312, 4.8904288, "Amsterdam", "cities"));

		return points;
	}
```

-- source-hash: blake2s: 7ec976854d72132ff3169c6cdfaabf8fc35f8e6f0d70ffa042f077dc9c62fbda --
