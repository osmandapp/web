---
source-hash: 405d07fea97ea92e332791638395503ecfcc4dddd239bdf0172961dbc56b45aa 
sidebar_position: 1
---

# Ajouter une carte
Ouvrez l'activité à laquelle vous souhaitez ajouter une vue cartographique et utilisez le code ci-dessous.

```
public class SimpleMapActivity extends AppCompatActivity {

	private OsmandApplication app;
	private OsmandMapTileView mapTileView;
	private MapViewWithLayers mapViewWithLayers;

	@Override
	public void onCreate(@Nullable Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.simple_map_activity);
		mapViewWithLayers = findViewById(R.id.map_view_with_layers);

		app = (OsmandApplication) getApplication();

		mapTileView = app.getOsmandMap().getMapView();
		mapTileView.setupOpenGLView();

		//set start location and zoom for map
		mapTileView.setIntZoom(14);
		mapTileView.setLatLon(52.3704312, 4.8904288);
	}
}
```

Ouvrez le fichier de mise en page XML de l'activité et ajoutez ce qui suit :

```
	<net.osmand.plus.views.MapViewWithLayers
		android:id="@+id/map_view_with_layers"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" />		
```

MapViewWithLayers contient ses propres méthodes de cycle de vie. Pour que votre application appelle correctement les méthodes de cycle de vie de MapView, vous devez remplacer les méthodes de cycle de vie suivantes dans l'activité qui contient MapViewWithLayers et appeler ces méthodes.

```

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
```

