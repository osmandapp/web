---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title:  Parametry pojazdu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

W celu optymalnego obliczania trasy w OsmAnd należy wziąć pod uwagę następujące parametry pojazdu:

1. Ustaw [*Domyślną prędkość* lub *Prędkości na drogach*](#road-speeds) jako [minimalną i maksymalną prędkość](#road-speeds) pojazdu. Pomoże to aplikacji określić czas potrzebny na pokonanie trasy i pozwoli wybrać najlepszą trasę, biorąc pod uwagę ograniczenia prędkości na różnych odcinkach dróg.
2. Określ [*rodzaj*](#fuel-used-by-motor) paliwa używanego przez silnik. Pozwoli to aplikacji oszacować emisję CO2.
3. Wprowadź [*pojemność zbiornika*](#fuel-tank-capacity), aby dokładnie śledzić poziom i zużycie paliwa.
4. Zdefiniuj [*parametry rozmiaru i wagi*](#size-parameters) swojego pojazdu, co pomoże aplikacji obliczyć optymalną trasę i uniknąć przeszkód na drodze wynikających z ograniczeń.

Prawidłowe ustawienie parametrów w aplikacji OsmAnd pomoże uniknąć problemów podczas nawigacji, wybrać najbardziej odpowiednią trasę w zależności od typu pojazdu i ograniczeń drogowych oraz obliczyć czas podróży.


## Parametry rozmiaru {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Parametry pojazdu wpływają na nawigację i budowanie trasy, ponieważ określają dostępność dróg, mostów, promów, zapór i innej infrastruktury. Jeśli wysokość, szerokość, długość lub waga pojazdu przekracza dopuszczalne wartości dla niektórych odcinków dróg, system nawigacyjny OsmAnd znajdzie alternatywną trasę, aby ominąć przeszkody na drodze.  

- Jednostki miary będą odpowiadać ustawieniom wybranym w *Ustawienia ogólne → [Jednostki i formaty](../../personal/profiles.md#units--formats)*.
- Parametry pojazdu można ustawić ręcznie.
- Jeśli ręcznie wybierzesz parametr pomiaru pojazdu, aplikacja zaproponuje najbliższą wartość z gotowej listy. Jest to konieczne, aby uniknąć błędów i poprawniej zbudować trasę.
- Możesz wybrać parametry pojazdu z gotowej listy rozmiarów.
- Nie ustawiaj rozmiaru *Brak*, co oznacza, że dla wybranego parametru nie będą stosowane żadne ograniczenia.  

### Ograniczenia {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> ograniczenie**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Parametr Waga jest dostępny tylko w typach nawigacji, takich jak [*Samochód, Ciężarówka* i *Motocykl*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> ograniczenie**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Parametr Wysokość jest dostępny tylko w typach nawigacji, takich jak *[Samochód, Ciężarówka, Motocykl](../../navigation/routing/car-based-routing.md)* i *[Łódź](../../navigation/routing/boat-navigation.md)*.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> ograniczenie**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Parametr Długość jest dostępny tylko w typach nawigacji, takich jak [*Samochód, Ciężarówka* i *Motocykl*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> ograniczenie**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Parametr Szerokość jest dostępny tylko w typach nawigacji, takich jak *[Samochód, Ciężarówka, Motocykl](../../navigation/routing/car-based-routing.md)* i *[Łódź](../../navigation/routing/boat-navigation.md)*.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Ograniczenia parametrów pojazdu mogą być ważne dla nawigacji i bezpieczeństwa na drodze. Niektóre z tych ograniczeń mogą obejmować:  

1. Ograniczenia dla pojazdów poruszających się w niektórych obszarach miejskich.  
2. Ograniczenia w ruchu pojazdów na określonych odcinkach dróg, na przykład tam, gdzie znajdują się mosty, tunele o ograniczonej przestrzeni, niskie wiadukty, skomplikowane zakręty lub inne konstrukcje.  
3. Ograniczenia nacisku na oś pojazdu mogą być szczególnie ważne dla samochodów ciężarowych.
4. Ograniczenia dla pojazdów poruszających się w określonych warunkach, takich jak wysokie temperatury, mokre lub zaśnieżone drogi, w nocy lub w warunkach pogodowych o ograniczonej widoczności.


## Parametry paliwa {#fuel-parameters}

### Paliwo używane przez silnik {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Jeśli w parametrach pojazdu wybierzesz typ silnika, [***dane o śladzie węglowym CO2***](../../navigation/setup/route-details.md#elevation-info) zostaną wyświetlone nad wykresem w [Szczegółach trasy](../setup/route-details.md).
Dostępnych jest sześć rodzajów paliwa: ***Benzyna, Olej napędowy, LPG, CNG, Elektryczny*** i ***Hybrydowy***.  

**Zastosowanie:**

Ustawienie **Paliwo używane przez silnik** jest dostępne tylko w nawigacji opartej na pojazdach, takich jak *[Samochód, Motocykl i Ciężarówka](../../navigation/routing/car-based-routing.md)*.


### Pojemność zbiornika paliwa {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Parametr **Pojemność zbiornika paliwa** pozwala dokładniej śledzić [poziom paliwa](../../widgets/info-widgets.md#vehicle-metrics-widgets) i [zużycie](../../widgets/info-widgets.md#vehicle-metrics-widgets) pojazdu, podając całkowitą pojemność zbiornika. Domyślna wartość to ~50 ***litrów***. Jednostka miary pojemności paliwa jest określana przez [Profil (Ustawienia)](../..//personal/profiles.md#units--formats) skonfigurowany w *Menu → Konfiguruj profil → Ustawienia ogólne → Jednostki i formaty → Jednostka objętości*.

**Zastosowanie:**

Ustawienie **Pojemność zbiornika paliwa** jest dostępne tylko w nawigacji opartej na pojazdach. W przypadku typów nawigacji, takich jak *Rower*, *Jazda konna*, *Pieszo* i *Narty*, ten parametr nie jest wyświetlany w Parametrach pojazdu.

## Parametry prędkości

### Domyślna prędkość {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

**Domyślna prędkość** to domyślna prędkość poruszania się dla tego środka transportu ([Domyślne ograniczenia prędkości](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Dla profili *Pieszo*, *Jazda konna* i *Rower* w małych przyrostach odpowiadających 0,1 km/h (mph) ([Jednostki i formaty](https://osmand.net/docs/user/personal/profiles#units--formats)), a dla pozostałych profili w przyrostach odpowiadających 1 km/h (1 mph). Jest używana:
- Do oszacowania [czasu trasy](../../widgets/nav-widgets.md#time-to-intermediate), gdy prędkość nie może być określona na podstawie dróg, jak w przypadku [Nawigacji GPX](../setup/gpx-navigation.md), [tras narciarskich](../routing/ski-routing.md), [tras łodzią](../routing/boat-navigation.md), [tras pieszych](../routing/pedestrian-routing.md) i innych podobnych profili.
- Do określenia, kiedy aktywowane są [komunikaty głosowe](../guidance/voice-navigation.md).
- Do określenia szacowanego czasu przybycia (ETA) dla znaczników na mapie przy nawigacji w linii prostej, jeśli średnia prędkość nie została jeszcze obliczona.



 Służy do obliczania czasu przybycia i określania optymalnej trasy na podstawie prędkości poruszania się, którą aplikacja uważa za typową. Na przykład samochód, transport publiczny, pieszy lub prędkość ustawiona ręcznie.


### Prędkości na drogach {#road-speeds}


![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Dla niektórych typów nawigacji można ustawić minimalną i maksymalną dopuszczalną prędkość. Jeśli jest ustawiona, silnik routingu zakłada, że pojazd lub środek transportu nie będzie poruszał się szybciej niż limit i nie będzie poruszał się wolniej niż prędkość minimalna. 
Na przykład, pozwala to na stworzenie trasy **paliwooszczędnej**, gdzie zużycie paliwa jest optymalne przy ustawionej **prędkości maksymalnej**, a silnik znajdzie krótszą trasę, omijając dłuższe, ale szybsze drogi.

- **Prędkość minimalna**  
    Ustawienie to określa minimalną prędkość jazdy dla wszystkich typów dróg na trasie. Zwiększa priorytet dla dróg o zalecanej prędkości niższej niż prędkość minimalna.  
- **Prędkość maksymalna**  
    Ustawienie to określa maksymalną prędkość jazdy i obniża priorytet dla dróg o możliwej prędkości wyższej niż maksymalna.




## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Ustawienia nawigacji](./navigation-settings.md)
- [Komunikaty głosowe / Powiadomienia](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)