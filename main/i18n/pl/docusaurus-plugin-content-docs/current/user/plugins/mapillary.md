---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
sidebar_position: 6
title:  Mapillary
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Aby szybciej się poruszać, w OsmAnd możesz korzystać z widoków ulicznych tras lub interesujących miejsc dostarczanych przez [Mapillary](https://www.mapillary.com/) (wymagane jest połączenie z internetem).  

Warstwa Mapillary przenosi obrazy na poziomie ulicy prosto do aplikacji OsmAnd, dzięki czemu można łatwo przeglądać otoczenie dowolnego interesującego miejsca lub wzdłuż zaplanowanej trasy. Jeśli brakuje zdjęć, możesz je dodać samodzielnie, a inni będą mogli z nich korzystać. Ta funkcja powstała w wyniku naszej współpracy z [zespołem Mapillary](https://www.mapillary.com/about), łącząc zalety obu aplikacji.


## Wymagane parametry konfiguracyjne {#required-setup-parameters}

Aby wyświetlić zdjęcia na poziomie ulicy na mapie OsmAnd, należy dokonać następujących ustawień:

1. Włącz [wtyczkę Mapillary](../plugins/#enable--disable) w sekcji *Wtyczki* w *Menu głównym*.
2. Wyświetl [Zdjęcia na poziomie ulicy](#enable-layer) na mapie dla wymaganego profilu w menu Konfiguruj mapę.


## Warstwa mapy {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punkty wtyczki Mapillary na mapie Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punkty wtyczki Mapillary na mapie iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Warstwa mapy ze zdjęciami ulic jest wyświetlana na mapie OsmAnd jako rzędy połączonych zielonych kropek.

- Zdjęcia użytkowników Mapillary są dołączone do tych zielonych kropek.
- Stuknij zieloną kropkę na mapie, aby otworzyć zdjęcie z widokiem ulicy. Zdjęcia można również wybrać z listy w [menu kontekstowym mapy](#map-context-menu), jeśli jest dostępna.
- Po wybraniu ekran aplikacji jest podzielony na mapę OsmAnd i zdjęcia uliczne Mapillary.
- Możesz zastosować [filtry](#data-filtering), aby wybrać zdjęcia, które chcesz wyświetlić na mapie.


### Włącz warstwę {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wtyczka Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Obrazy wtyczki Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wtyczka Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Obrazy wtyczki Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Aby wyświetlić zdjęcia na poziomie ulicy Mapillary na mapie, należy włączyć tę warstwę w menu [Konfiguruj mapę](../map/configure-map-menu.md) w sekcji *Pokaż*.  

*Dostęp: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

:::note Przeglądarka zdjęć Mapillary

- Stuknij przycisk *menu z trzema kropkami* (&#8285;), aby otworzyć wybrane zdjęcie w aplikacji [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Stuknij strzałkę, aby przechodzić od zdjęcia do zdjęcia.
:::


### Filtrowanie danych {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Filtr wtyczki Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtr wtyczki Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Możesz utworzyć filtr i wybrać, które zdjęcia mają być wyświetlane na mapie. Na przykład wybierz wyświetlanie tylko najnowszych zdjęć lub tylko zdjęć 360 stopni.  

*Dostęp: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Pamięć podręczna kafelków
Jeśli wybrane obrazy nie są wyświetlane, użyj opcji **Przeładuj** dla **Pamięci podręcznej kafelków**.
:::


## Menu kontekstowe mapy {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe mapy wtyczki Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu kontekstowe mapy wtyczki Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Jeśli wtyczka Mapillary jest włączona, można przeglądać zdjęcia ulic dostępne w promieniu 40 metrów od wybranego punktu na mapie. Zdjęcia są otwierane w [menu kontekstowym mapy](../map/map-context-menu.md#online-photos).


## Dodaj zdjęcia {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu kontekstowe mapy wtyczki Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu kontekstowe mapy wtyczki Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Aby dodać zdjęcia, należy zarejestrować się w [aplikacji Mapillary](https://www.mapillary.com/mobile-apps). Możesz również dodawać zdjęcia do menu kontekstowego mapy, dotykając przycisku *Dodaj zdjęcia* w sekcji [Zdjęcia online](../map/map-context-menu.md#online-photos) menu kontekstowego mapy. Następnie otworzy się aplikacja Mapillary.


## Widżet Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wybierz panel → <Translate android="true" ids="mapillary"/>*

![Wtyczka Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Menu kontekstowe mapy wtyczki Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wybierz panel → <Translate ios="true" ids="mapillary"/>*

![Menu kontekstowe mapy wtyczki Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

[Widżet Mapillary](../widgets/info-widgets.md#mapillary-widget) służy do szybkiego dostępu do aplikacji Mapillary. Widżet jest dodawany do ekranu głównego automatycznie po włączeniu wtyczki Mapillary. Możesz włączyć lub wyłączyć widżet Mapillary i inne widżety w menu [Konfiguracja ekranu](../widgets/configure-screen.md).


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style map)](../../user/map/vector-maps.md)