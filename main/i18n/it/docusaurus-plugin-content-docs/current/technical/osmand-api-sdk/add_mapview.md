---
source-hash: f8b747ecc580eb49cc0ae0c770f9a896b1da4bf5a81a4b702f78315746e14757
sidebar_position: 1
---

# Aggiungere una mappa {#add-a-map}
Apri l'attività a cui desideri aggiungere una visualizzazione mappa e usa il codice qui sotto.

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

Apri il file di layout XML dell'attività e aggiungi quanto segue:

```
	<net.osmand.plus.views.MapViewWithLayers
		android:id="@+id/map_view_with_layers"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" />		
```

MapViewWithLayers contiene i propri metodi del ciclo di vita. Affinché la tua app chiami correttamente i metodi del ciclo di vita di MapView, devi sovrascrivere i seguenti metodi del ciclo di vita nell'attività che contiene MapViewWithLayers e chiamare questi metodi.

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