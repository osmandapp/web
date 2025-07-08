---
source-hash: f8b747ecc580eb49cc0ae0c770f9a896b1da4bf5a81a4b702f78315746e14757
sidebar_position: 1
---

# Adicionar um mapa {#add-a-map}
Abra a atividade à qual você gostaria de adicionar uma visualização de mapa e use o código abaixo.

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

Abra o arquivo de layout XML da atividade e adicione o seguinte:

```
	<net.osmand.plus.views.MapViewWithLayers
		android:id="@+id/map_view_with_layers"
		android:layout_width="match_parent"
		android:layout_height="match_parent"
		android:orientation="vertical" />		
```

O MapViewWithLayers contém seus próprios métodos de ciclo de vida. Para que seu aplicativo chame corretamente os métodos de ciclo de vida do MapView, você deve substituir os seguintes métodos de ciclo de vida na Atividade que contém o MapViewWithLayers e chamar esses métodos.

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