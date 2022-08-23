---
sidebar_position: 2
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Navigate Map activity
There is map and switch for opengl rengering, it has longClickListener on mapView, after first tap start point is selected, after second tap it selects finish and starts route calculation.

  ```
  public class SimpleMapActivity extends AppCompatActivity implements OsmandMapListener {

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
		OsmandMap osmandMap = app.getOsmandMap();
		osmandMap.addListener(this);

		mapTileView = osmandMap.getMapView();

		ActionBar actionBar = getSupportActionBar();
		if (actionBar != null) {
			actionBar.setTitle("Simple map");
			actionBar.setDisplayHomeAsUpEnabled(true);
			actionBar.setDisplayShowHomeEnabled(true);
		}

		CompoundButton openglSwitch = findViewById(R.id.opengl_switch);
		openglSwitch.setChecked(app.getSettings().USE_OPENGL_RENDER.get());
		openglSwitch.setOnCheckedChangeListener((buttonView, isChecked) -> {
			app.getSettings().USE_OPENGL_RENDER.set(isChecked);
			RestartActivity.doRestart(this);
		});

		mapTileView.setupOpenGLView();

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
		app.getOsmandMap().removeListener(this);
		mapTileView.clearTouchDetectors();
	}

	@Override
	public void onChangeZoom(int i) {

	}

	@Override
	public void onSetMapElevation(float v) {
		mapViewWithLayers.onSetMapElevation(v);
	}

	@Override
	public void onSetupOpenGLView(boolean b) {
		mapViewWithLayers.setupOpenGLView(b);
		mapTileView.setupTouchDetectors(this);
	}
}
```
