---
source-hash: f8b747ecc580eb49cc0ae0c770f9a896b1da4bf5a81a4b702f78315746e14757
sidebar_position: 1
---

# Harita ekle {#add-a-map}
Harita görünümü eklemek istediğiniz etkinliği açın ve aşağıdaki kodu kullanın.

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

Etkinliğin XML düzen dosyasını açın ve aşağıdakileri ekleyin:

```
	<net.osmand.plus.views.MapViewWithLayers
		android:id="@+id/map_view_with_layers"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" />		
```

MapViewWithLayers kendi yaşam döngüsü yöntemlerini içerir. Uygulamanızın MapView'ın yaşam döngüsü yöntemlerini doğru bir şekilde çağırabilmesi için, MapViewWithLayers'ı içeren Etkinlikteki aşağıdaki yaşam döngüsü yöntemlerini geçersiz kılmalı ve bu yöntemleri çağırmalısınız.

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