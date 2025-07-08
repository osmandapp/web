---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
sidebar_position: 11
title: OsmAnd Tracker
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


<InfoAndroidOnly />

## Przegląd {#overview}

OsmAnd Tracker to zmodyfikowany klient Telegramu stworzony do elastycznego monitorowania i wysyłania wiadomości z lokalizacjami GPS w czasie rzeczywistym.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) pomaga zobaczyć kontakty na mapie w OsmAnd. Ma aspekt społeczny, co oznacza, że aby go używać, musisz zapewnić dostęp do swoich kontaktów dla platformy wybranej przez OsmAnd.

Wybraliśmy [Telegram](https://telegram.org/) jako najbardziej otwartą platformę społecznościową, ponieważ ma [Otwarte API](https://core.telegram.org/api), Otwarte SDK, a ponadto docelowo będzie miał implementację Otwartego Serwera (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Jak to działa {#how-it-works}

Co ważne, istnieje wysoki poziom kompatybilności między aplikacjami. Możesz łatwo udostępniać swoją lokalizację swoim kontaktom bez posiadania aplikacji mobilnej Telegram (OsmAnd Online GPS Tracker jest niezależnym klientem Telegramu), a Twoje kontakty nie muszą mieć [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram), aby zobaczyć Twoją lokalizację.

Zaprojektowaliśmy [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) tak, abyś mógł nadal używać aplikacji Telegram i aplikacji OsmAnd w sposób, do którego jesteś przyzwyczajony, bez dodatkowych ograniczeń.

Aplikacja wysyła wiadomości o lokalizacji na żywo do wybranych czatów przez ustawiony czas, wyświetla listę Twoich kontaktów i grup oraz sprawdza czaty pod kątem wiadomości z Twoją lokalizacją, które są następnie wyświetlane na mapie w OsmAnd.
Aplikacja nie wysyła ani nie przegląda Twoich wiadomości tekstowych.

Zaloguj się, używając numeru telefonu zarejestrowanego w Telegramie, aby włączyć następujące funkcje:

- Zarządzaj listą kontaktów i grup, które wysyłają Ci swoją lokalizację.
- Wyświetlaj lokalizację kontaktów i grup w czasie rzeczywistym na mapie w OsmAnd.
- Ustaw czas udostępniania lokalizacji oddzielnie dla każdego czatu.
- Ustaw, jak często Twoja lokalizacja jest aktualizowana.
- Monitoruj chronologię swoich ruchów i swoich kontaktów.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Wymagane parametry konfiguracji {#required-setup-parameters}

Zainstaluj plik APK OsmAnd Online GPS Tracker:

- [Sklep Google Play](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Serwer OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Ustawienia wtyczki {#plugin-settings}

Istnieje kilka ustawień do zarządzania częstotliwością udostępniania lokalizacji i kontrolowania wyświetlania wysłanych do Ciebie lokalizacji.

Aby otworzyć menu *Ustawienia*:

*Ekran [Moja lokalizacja](#my-location-screen) → przewiń ekran w dół (lista kontaktów) → ⋮ → Ustawienia*
lub
*Ekran [Na żywo](#live-now-screen) → ⋮ → Ustawienia*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Pozycja {#position}

**Wyślij moją lokalizację** — pozwala ustawić interwał wysyłania Twojej pozycji od raz na sekundę (dla zwiększenia dokładności) do raz na 5 minut (dla zmniejszenia zużycia energii).

**Nie porusza się** — pozwala ustawić czas (od 1 minuty do 1 godziny), po którym lokalizacja kontaktu jest uważana za nieaktualną. Jeśli lokalizacja stanie się nieaktualna, zmienia kolor na szary.

**Historia lokalizacji** — pozwala ustawić czas (od 5 minut do 24 godzin), po którym kontakt z usuniętą lokalizacją zostanie ukryty z listy i mapy OsmAnd.

**Wyślij lokalizację jako** — pozwala wybrać kategorię do wysyłania wiadomości o Twojej lokalizacji w Telegramie (3 typy wysyłania): tekst, mapa, tekst i mapa.

**Czas wygaśnięcia bufora** — pozwala wybrać czas zapisywania punktów w buforze.

**Praca w tle** — pozwala zmienić ustawienia optymalizacji baterii w celu stabilizacji udostępniania lokalizacji.

**Źródło lokalizacji** — pozwala wybrać *Usługi Google Play* (domyślnie) lub *Android API* do określania lokalizacji.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Jednostki i formaty {#units--formats}

Pozwala dodać ustawienia jednostek i formatów. Teraz możesz wybrać wygodne wartości dla wiadomości Telegram podczas udostępniania danych lokalizacyjnych.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Wygląd {#appearance}

Pozwala wyświetlić liczbę punktów GPS odebranych od innych kontaktów, a także tych wysłanych przez Ciebie.


### Prywatność {#privacy}

Korzystanie z proxy wewnątrz OsmAnd Tracker. Przejdź do Ustawień i wpisz swoje dane proxy: *Ustawienia → Prywatność → Ustawienia proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Ustawienia GPS {#gps-settings}

Ustawienia punktu lokalizacji. Na przykład, jeśli pozostajesz w jednej lokalizacji przez pewien czas bez ruchu, dane punktu lokalizacji nie są wysyłane, a Twój ślad GPX będzie wyświetlał dokładniejsze i precyzyjniejsze dane.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Udostępnij lokalizację jako {#share-location-as}

Jeśli chcesz podłączyć kilka urządzeń do jednego konta Telegram, musisz kliknąć „Dodaj urządzenie” i nazwać urządzenie.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### Połączenie z OsmAnd {#osmand-connect}

To ustawienie pozwala wybrać wersję OsmAnd, w której Twoje kontakty z ich lokalizacją pojawią się na mapie.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Konto {#account}

Użyj tego ustawienia, aby sprawdzić, którego konta Telegram aktualnie używasz. W tym menu możesz również wyjść z aplikacji OsmAnd Telegram, po prostu dotykając przycisku *Wyloguj*.


### Bufor Logcat {#logcat-buffer}

Tutaj możesz sprawdzić i udostępnić szczegółowe logi aplikacji.


## Ekran Moja lokalizacja {#my-location-screen}

Na tym ekranie możesz zobaczyć swoje kontakty z Telegramu. Możesz wybrać jeden lub więcej z nich, ustawić opcje udostępniania i rozpocząć udostępnianie swojej lokalizacji.

Po pierwszym uruchomieniu zobaczysz listę Sugerowanych kontaktów. Są to pięć najnowszych kontaktów, z którymi udostępniałeś swoją lokalizację. Możesz kliknąć tylko raz, aby kontynuować udostępnianie swojej lokalizacji tym kontaktom.

Czas udostępniania to ostatni czas udostępniania, który wybrałeś dla kontaktu.

Po rozpoczęciu udostępniania zobaczysz listę Sugerowanych kontaktów i przycisk *Powrót do OsmAnd* na ekranie *Moja lokalizacja*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Ekran Na żywo {#live-now-screen}

W tym menu możesz zobaczyć wszystkie kontakty, które udostępniają Ci lokalizację. Dotknij kontaktu i zobacz go na **mapie OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Aktywny znacznik na mapie OsmAnd {#active-marker-on-the-osmand-map}

Pozwala śledzić odległość, prędkość i kąt ruchu Twoich kontaktów na mapie OsmAnd i w tekście Telegramu. Możesz zrozumieć, gdzie i jak porusza się Twój kontakt.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Ekran Oś czasu {#timeline-screen}

To jest trzecia zakładka w aplikacji. Tutaj możesz wybrać dzień, aby wyświetlić historię udostępnionych Ci lokalizacji. Wybranie dnia wyświetla kontakty, które pokazały swoją lokalizację tego dnia.

Monitorowanie pozwala zbierać informacje w tle, gdy Twoje kontakty je udostępniają. Aby to zrobić, musisz je włączyć.

Aby wyświetlić wszystkie informacje o lokalizacji kontaktu, dotknij jego ikony lub otwórz ślad GPX w OsmAnd i dokładniej zbadaj ślad ([czytaj więcej tutaj](./trip-recording.md)). Możesz również udostępnić ślad GPX dla wybranego okresu: wysyłając go na e-mail lub dowolny komunikator.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Możesz zobaczyć ruch online swoich kontaktów na mapie OsmAnd za pomocą śladu GPS online. Aby to zrobić, musisz włączyć *Na żywo* przy kontakcie w *Osi czasu*. Jeśli w danej chwili jest wiele wspólnych kontaktów, aplikacja OsmAnd losowo wybiera kolor śladów.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Po dotknięciu „Pokaż w OsmAnd” lub na mini-mapie możesz wybrać specjalne ustawienia śledzenia GPX swojego kontaktu w aplikacji OsmAnd i zobaczyć jego ruch w czasie rzeczywistym na mapie OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Jeśli w wybranej dacie nie ma zebranych danych, na ekranie pojawi się specjalne powiadomienie. Możesz przejść do najbliższej daty, dotykając strzałki do przodu lub do tyłu.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Widżet Trackera {#tracker-widget}

Aby wyświetlić [widżet](../widgets/info-widgets.md#tracker-widget-android), musisz najpierw włączyć wtyczkę OsmAnd Tracker. Następnie w prawym górnym rogu ekranu OsmAnd pojawi się widżet ze słowem *Start*.

Aby go wyłączyć, przejdź do *Menu główne → Konfiguruj ekran*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Widżet ma kilka widoków.

1. Pierwszy to *Start*.
   Po dotknięciu *Start* przechodzisz do [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), gdzie możesz wybrać dowolne kontakty lub dotknąć Sugerowane kontakty.
2. Po drugie, po rozpoczęciu udostępniania swojej lokalizacji, widżet zmienia swój wygląd.

   - Zielona ikona emoji *OK* oznacza, że Twoja lokalizacja jest obecnie udostępniana. Wszystko jest w porządku, udostępnianie działa bez błędów.
   - Pomarańczowa ikona emoji *OK* oznacza, że Twoja lokalizacja nie może zostać wysłana. Występuje problem z połączeniem internetowym lub GPS.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Jeśli przez długi czas nie masz połączenia z Internetem, Twoje punkty lokalizacji są zapisywane w buforze OsmAnd Tracker. Widżet w OsmAnd zmienia swój wygląd na szarą ikonę emoji. Pokazuje czas zapełnienia bufora, jak długo bufor już zapisuje Twoje punkty lokalizacji.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Gdy tylko połączenie internetowe zostanie przywrócone, rozpocznie się przesyłanie punktów lokalizacji z bufora. Widżet OsmAnd zmieni swój wygląd, a liczba minut w nim zacznie się zmniejszać. Gdy wszystkie punkty lokalizacji z bufora zostaną przesłane do Telegramu, na widżecie pojawi się ikona emoji *OK*.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Jeśli widzisz widżet jako ikonę emoji *OK*, oznacza to, że wszystko jest w porządku. Proces wymiany przebiega bez żadnych problemów.


## Asystent OsmAnd {#osmand-assistant}

Aplikacja OsmAnd ma własnego bota Telegramu o nazwie „OsmAnd Assistant”, który pomaga zintegrować OsmAnd Telegram z zewnętrznymi trackerami lub API. Będziesz mógł udostępniać nie tylko swoją lokalizację, ale także lokalizację swojego roweru lub grupy osób ścigających się, dostępnych za pośrednictwem API. OsmAnd Telegram zapewni Ci ładną prezentację Twoich lokalizacji na mapie w samym OsmAnd.

Podziel się z nami swoimi przemyśleniami na temat tej nowej aplikacji na [Twitterze](https://twitter.com/osmandapp) i innych kanałach społecznościowych.

Aby wyświetlić pozycje GPS kontaktów na mapie, potrzebujesz najnowszej wersji [OsmAnd lub OsmAnd+](./../purchases/android.md). Minimalna obsługiwana wersja OsmAnd lub OsmAnd+ to 3.0.4.

> *Ostatnia aktualizacja: lipiec 2024*