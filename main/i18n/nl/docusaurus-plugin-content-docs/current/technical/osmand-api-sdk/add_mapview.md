---
source-hash: f8b747ecc580eb49cc0ae0c770f9a896b1da4bf5a81a4b702f78315746e14757
sidebar_position: 1
---

# Een kaart toevoegen {#add-a-map}
Open de activiteit waaraan u een kaartweergave wilt toevoegen en gebruik de onderstaande code.

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

Open het XML-lay-outbestand van de activiteit en voeg het volgende toe:

```
	<net.osmand.plus.views.MapViewWithLayers
		android:id="@+id/map_view_with_layers"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" />		
```

De MapViewWithLayers bevat zijn eigen levenscyclusmethoden. Om uw app de levenscyclusmethoden van de MapView correct te laten aanroepen, moet u de volgende levenscyclusmethoden overschrijven in de activiteit die de MapViewWithLayers bevat en deze methoden aanroepen.

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