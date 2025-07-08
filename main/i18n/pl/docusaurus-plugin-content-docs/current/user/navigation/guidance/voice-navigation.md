---
source-hash: 23fa8491d55d8126a921b95c8d650a5b5c13376f6c4a630b3c3446e35d19d2c0
sidebar_position: 6
title: Komunikaty głosowe / Powiadomienia
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



## Przegląd {#overview}

Funkcja nawigacji głosowej OsmAnd zapewnia instrukcje mówione i alerty w czasie rzeczywistym, które pomagają pozostać poinformowanym i bezpiecznym podczas podróży. Możesz dostosować wskazówki do swoich preferencji i potrzeb. W tym celu wybierz odpowiedni profil głosowy, albo [silnik Text-to-Speech (TTS)](#tts-text-to-speech), który może dynamicznie ogłaszać nazwy ulic, odległości i ograniczenia prędkości, albo [wcześniej nagrany głos](#recorded-voice-prompts) oferujący zwięzłe instrukcje.

Oprócz wskazówek zakręt po zakręcie, nawigacja głosowa OsmAnd może powiadamiać o zbliżających się punktach POI, zmianach w warunkach ruchu i przekroczeniu ustawionego limitu prędkości. Aby dowiedzieć się więcej o dostosowywaniu tych alertów, zobacz [Ustawienia czasu ogłoszeń](#announcement-time) i [Ostrzeżenia o ograniczeniu prędkości](#speed-limit).

Dzięki odpowiedniej kombinacji opcji głosowych, ustawień alertów i regulacji dźwięku urządzenia, otrzymasz na czas i wyraźne informacje nawigacyjne przez całą trasę.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Powiadomienia tekstowe w pełni odzwierciedlają czas wyzwolenia i komunikaty komunikatów głosowych.

:::


## Konfigurowanie komunikatów głosowych {#setting-up-voice-prompts}

OsmAnd oferuje różne opcje sterowania komunikatami głosowymi, dzięki czemu możesz wygodnie podążać swoją trasą. Aby skonfigurować te ustawienia, zacznij od odpowiednich sekcji aplikacji.

- Aktywuj komunikaty głosowe z sekcji [Nawigacja](../guidance/navigation-settings.md), dotykając **Ustawienia**. Możesz także włączyć i skonfigurować komunikaty głosowe poprzez *Konfiguruj profil* i *Ustawienia nawigacji*.
- Włącz lub wyłącz komunikaty głosowe za pomocą *Menu → Nawigacja →* dotknij *przycisk Dźwięk*,
    lub *Menu → Nawigacja →* przycisk Ustawienia *→ Dźwięk →* przełącz włącz/wyłącz.

Więcej informacji na temat tego, jak i kiedy wyzwalane są komunikaty głosowe, można znaleźć w dokumentacji [Wyzwalanie komunikatów głosowych nawigacji](../../../technical/algorithms/voice-prompt-triggering.md).


### Ustawienia głosu {#voice-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> przycisk* *(lub <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Wybierz profil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Ustawienia nawigacji głosowej iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Język](#voice-prompt-language)**. Wybierz preferowany język i typ.

**Ogłoszenie**. Umożliwia skonfigurowanie następujących typów komunikatów:

- *Nazwy ulic (TTS), numery zjazdów, ostrzeżenia o ruchu drogowym, przejścia dla pieszych* i *tunele*.
- *[Fotoradary](#speed-cameras)*.
- Skonfiguruj także **[widżet alertów](../../widgets/nav-widgets.md#alert-widget)** do użycia z ogłoszeniami.

**Punkty użytkownika**:

- Włącz komunikaty głosowe dla wstępnie ustawionych i dodanych [punktów trasy](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [ulubionych](../../personal/favorites.md) lub [POI](../../map/point-layers-on-map.md#points-of-interest-pois). Podczas jazdy wybrane punkty zostaną ogłoszone, gdy się do nich zbliżysz lub je miniesz.

| Typ komunikatu | Czas wyprzedzenia [s]:<br/>Odpowiednia<br/>Odległość wyprzedzenia przy domyślnej prędkości [m] | Limit |
| :- | :- | :- |
| Zbliżanie się | **60 s:**<br/>Jazda: 750 m<br/>Rower: 167 m<br/>Pieszo: 67 m | Nie więcej niż 1 punkt na raz |
| Mijanie | **15 s:**<br/>Jazda: 188 m<br/>Rower: 42 m<br/>Pieszo: 17 m | Nie więcej niż 3 punkty na raz |

[**Ograniczenie prędkości**](#speed-limit):

- *Ogłoś po przekroczeniu*.
- *Tolerancja ograniczenia prędkości*.

**Inne**:

- *Ogłoś utratę i odzyskanie sygnału GPS*. OsmAnd ogłasza, jeśli sygnał GPS na urządzeniu zostanie utracony.
- *Ogłoś przeliczenie trasy*. OsmAnd zgłasza przeliczenie trasy w przypadku [odchylenia lub ruchu w przeciwnym kierunku](./navigation-settings.md#recalculate-route).
- *Ogłoś odchylenie od trasy*. Otrzymujesz informacje o odchyleniach od trasy zgodnie z [ustawionymi parametrami](./navigation-settings.md#recalculate-route).

**Opcje**:

- *Powtórz instrukcje nawigacji*. Umożliwia powtarzanie instrukcji nawigacji w regularnych odstępach czasu od 1 min do 30 min. Lub ręcznie - jeśli przegapisz komunikat głosowy, możesz go ponownie odsłuchać, po prostu dotykając [strzałki bieżącego zakrętu](../../widgets/nav-widgets.md#next-turn) na ekranie aplikacji.
- *[Czas ogłoszenia](#announcement-time)*.

**Wyjście** (*tylko Android*):

- *[Wyjście wskazówek głosowych](#voice-guidance-output)*.
- *Wstrzymaj muzykę*. Komunikaty głosowe na chwilę wstrzymują odtwarzanie muzyki.


### Fotoradary {#speed-cameras}

![Czas ogłoszenia nawigacji głosowej Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Alerty o fotoradarach](../../personal/global-settings.md#uninstall-speed-cameras) umożliwiają aktywowanie lub dezaktywowanie POI z fotoradarami. Aby zastosować zmiany, należy ponownie uruchomić aplikację OsmAnd.

W niektórych krajach lub regionach używanie aplikacji ostrzegających o fotoradarach jest nielegalne. Musisz dokonać wyboru w zależności od przepisów obowiązujących w Twoim kraju. Wybierz **Zachowaj aktywność**, a będziesz otrzymywać alerty i powiadomienia o fotoradarach. Wybierz **Odinstaluj**, a wszystkie dane związane z fotoradarami, takie jak ostrzeżenia, powiadomienia i POI, zostaną usunięte, dopóki nie zainstalujesz ponownie OsmAnd.


### Ograniczenie prędkości {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nawigacja głosowa](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nawigacja głosowa](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

Opcja **Ograniczenie prędkości** pozwala OsmAnd informować Cię, gdy Twoja aktualna prędkość przekroczy określony próg. Dane o maksymalnych dozwolonych prędkościach pochodzą z OpenStreetMap.

**Ogłoś po przekroczeniu**
*Tolerancja ograniczenia prędkości* pozwala wybrać dopuszczalne odchylenie (np. od -10 km/h do +20 km/h) od [maksymalnego dozwolonego limitu prędkości](https://wiki.openstreetmap.org/wiki/Key:maxspeed) na bieżącej drodze. Gdy Twoja prędkość przekroczy tę tolerancję, OsmAnd wyda komunikat głosowy.

*Zasady aktywacji komunikatów głosowych* po przekroczeniu ograniczenia prędkości:

- *Początkowe ostrzeżenie*. Wykrywając przekroczenie ograniczenia prędkości, OsmAnd czeka 5 sekund przed wydaniem pierwszego ostrzeżenia głosowego.
- *Opóźnienie powtórnego ogłoszenia*. Jeśli nadal przekraczasz prędkość, następne ostrzeżenie jest opóźnione o 120 sekund, aby zapobiec zbyt częstym powiadomieniom.
- *Reset timera*. Timer resetuje się, jeśli pozostajesz w granicach limitu przez 30 sekund. Każde dalsze przekroczenie prędkości ponownie będzie czekać 5 sekund przed wydaniem następnego ostrzeżenia.

To ustawienie **Tolerancja ograniczenia prędkości** wpływa na prędkość wyświetlaną w części *ostrzegawczej* [widżetu prędkościomierza](../../widgets/info-widgets.md#speedometer) w aplikacji OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) i [CarPlay](../../navigation/car-play.md#speedometer).


### Czas ogłoszenia {#announcement-time}

![Czas ogłoszenia nawigacji głosowej Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

Czas ogłoszenia różnych komunikatów głosowych zależy od wybranego profilu, typu komunikatu, aktualnej prędkości nawigacji i domyślnej prędkości nawigacji. Dzięki temu ustawieniu możesz zmienić odległość przed aktywacją komunikatów głosowych, stosując mnożnik odległości: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

W rozwijanej liście *Interwały czasu i odległości* możesz wyświetlić szczegółowe informacje o aktywacji komunikatów dla różnych mnożników odległości. Więcej informacji znajdziesz w [Wyzwalanie komunikatów głosowych nawigacji](../../../technical/algorithms/voice-prompt-triggering.md).


### Wyjście wskazówek głosowych {#voice-guidance-output}

<InfoAndroidOnly/>

![Nawigacja głosowa Android](@site/static/img/navigation/voice/voice_promt-1.png)

Aby uniknąć jednoczesnego odtwarzania dźwięku w tym samym strumieniu wyjściowym, w systemie Android zaimplementowano funkcję skupienia dźwięku. OsmAnd będzie używać głośnika wybranego z listy w tym ustawieniu do wyjścia audio. Inne aplikacje wstrzymają odtwarzanie lub zmniejszą głośność, aby ułatwić słyszenie komunikatów głosowych OsmAnd.

- Dźwięk multimediów/nawigacji.
- Dźwięk powiadomień.
- Dźwięk połączeń telefonicznych (aby przerywać [systemy audio samochodów](../auto-car.md) Bluetooth).


### Testowanie komunikatów głosowych {#testing-of-voice-prompts}

Możesz przetestować komunikaty głosowe za pomocą:

- [Symulacja nawigacji](../../navigation//setup/route-navigation.md#simulated-navigation). Ustaw trasę i rozpocznij symulację: *Menu nawigacji → Ustawienia → Symuluj nawigację*.

- [Testuj komunikaty głosowe](../../plugins/development.md#application-testing) (*tylko Android*). Użyj *wtyczki deweloperskiej*, aby przetestować komunikaty głosowe:
    - Przejdź do *Menu → Wtyczki → Włącz OsmAnd Development*.
    - Przejdź do *Ustawienia → Testuj komunikaty głosowe*.
    - Wybierz język i sprawdź, czy system poprawnie odtwarza komunikaty.


### Rozwiązywanie problemów z dźwiękiem {#solving-audio-issues}

Jeśli nie słyszysz **komunikatów głosowych** lub [ostrzeżeń o ograniczeniu prędkości](#speed-limit):

- Upewnij się, że głośność urządzenia jest włączona i podkręcona.
- Potwierdź, że dźwięk jest włączony podczas nawigacji: *Menu → Nawigacja → Przycisk włącz/wyłącz dźwięk* lub *Menu → Nawigacja → Przycisk Ustawienia → Dźwięk* dla szczegółowej konfiguracji audio.
- Wybierz, które [głośniki](#voice-guidance-output) mają być używane.
- Sprawdź, które [wskazówki głosowe](#voice-prompt-language) są wybrane i upewnij się, że masz TTS lub nagrany głos zdolny do ogłaszania ostrzeżeń o ograniczeniu prędkości.
- Sprawdź, czy dźwięk nie jest kierowany do niezamierzonego urządzenia wyjściowego (np. odłączonego zestawu słuchawkowego Bluetooth).

Dodatkowe kroki rozwiązywania problemów znajdziesz w [przewodniku rozwiązywania problemów z nawigacją](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

OsmAnd obsługuje głosy **Text-to-Speech (TTS)**, które zapewniają dynamiczne i szczegółowe wskazówki głosowe, w tym instrukcje zakrętów, nazwy ulic i ogłoszenia POI. Głosy TTS są dołączone do aplikacji, ale wymagają zainstalowanego na urządzeniu [silnika Text-to-speech](https://en.wikipedia.org/wiki/Speech_synthesis).

Większość nowoczesnych urządzeń z systemem Android i iOS zawiera domyślny silnik TTS, ale dodatkowe silniki i języki mogą być instalowane oddzielnie.

Listę **dostępnych silników TTS i obsługiwanych języków** na Androida znajdziesz pod adresem:
[Lista języków z dostępnymi silnikami TTS na Androida](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Konfiguracja TTS na Twoim urządzeniu:***

**Android:**

1. Otwórz Ustawienia.
2. Przejdź do *Dostępność → Wyjście Text-to-Speech*.
3. Wybierz **silnik TTS** (Google TTS lub inny zainstalowany silnik).
4. Wybierz **preferowany język** (niektóre mogą wymagać dodatkowych pobrań).
5. Dostosuj szybkość mowy, wysokość tonu i szybkość odtwarzania według potrzeb.
6. Dotknij **Posłuchaj przykładu**, aby przetestować wyjście głosowe.

Więcej szczegółów znajdziesz pod adresem:
[Pomoc Google – Ustawienia Text-to-Speech w Androidzie](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Otwórz Ustawienia.
2. Przejdź do *Dostępność → Treść mówiona*.
3. Dotknij **Głosy**, aby wybrać preferowany głos.
4. Dostosuj **Szybkość mówienia**, **Wymowę** i inne ustawienia.
5. Przetestuj głos za pomocą **Mów zaznaczenie** lub **Mów ekran**.

Więcej szczegółów znajdziesz pod adresem:
[Pomoc Apple – Ustawienia mowy iPhone'a](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Testowanie komunikatów głosowych:***

Aby sprawdzić, czy TTS działa poprawnie w OsmAnd:

- Włącz **Wtyczkę deweloperską**: *Menu → Ustawienia → Wtyczki → OsmAnd Development*.
- Otwórz [Testuj komunikaty głosowe](../../plugins/development.md#application-testing): *Menu → Ustawienia → Wtyczki → OsmAnd Development → Testuj komunikaty głosowe*.

W celu rozwiązywania problemów, zapoznaj się z:
[Rozwiązywanie problemów z nawigacją głosową](../../troubleshooting/navigation.md#voice-navigation).


### Język komunikatów głosowych {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Nawigacja głosowa Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Nawigacja głosowa Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Ustawienia nawigacji głosowej iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd oferuje dwa typy komunikatów głosowych:

- **<Translate android="true" ids="tts_title"/>**
    - Wykorzystuje silnik TTS urządzenia do dynamicznego generowania komunikatów głosowych.
    - Odczytuje nazwy ulic, instrukcje zakrętów, nazwy POI i inne szczegóły.
    - Obsługuje wiele języków i ustawień wymowy.
    - Można dostosować szybkość mowy, wysokość tonu i ustawienia wymowy.

- **<Translate android="true" ids="shared_string_recorded"/>** (*tylko Android*)
    - Wykorzystuje wcześniej nagrane komunikaty głosowe do nawigacji.
    - Brzmi bardziej naturalnie niż TTS, ale ma ograniczenia.
    - Nie odczytuje nazw ulic ani nazw POI.
    - Zapewnia tylko podstawowe instrukcje zakrętów.

> *TTS jest zalecane do szczegółowych wskazówek nawigacyjnych.*

#### Ustawienia komunikatów głosowych na poziomie systemu {#system-level-voice-prompt-settings}

Zachowanie komunikatów głosowych, w tym *szybkość odtwarzania, wysokość tonu i pauzy*, można regulować tylko w ustawieniach systemowych urządzenia.

**Android:**

1. Otwórz *Ustawienia urządzenia → Dostępność → Wyjście zamiany tekstu na mowę*.
2. Wybierz preferowany silnik TTS i język.
3. Dostosuj szybkość mowy, wysokość tonu i szybkość odtwarzania.

**iOS:**

1. Otwórz *Ustawienia urządzenia → Dostępność → Treść mówiona*.
2. Dostosuj: język, głosy, szybkość mówienia, wymowę.

> *Aby uzyskać dodatkowe głosy, pobierz pakiety językowe z ustawień systemowych.*


#### Dostępne języki TTS {#available-tts-languages}

Obecnie dostępnych jest łącznie 45 języków. Nie wszystkie języki wymienione poniżej mogą być obsługiwane przez każdy silnik TTS. Zobacz [tutaj](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Arabski |
| **B** | Białoruski, Bułgarski |
| **C** | Kataloński, Chiński, Chiński (Hongkong), Chiński (Tradycyjny), Chorwacki, Czeski |
| **D** | Duński, Holenderski |
| **E** | Angielski, Angielski (Wielka Brytania), Estoński |
| **F** | Fiński, Francuski |
| **G** | Niemiecki, Niemiecki (potoczny), Grecki, Guarani |
| **H** | Hindi, Węgierski, Węgierski (formalny), Hebrajski |
| **I** | Indonezyjski, Włoski |
| **J** | Japoński |
| **K** | Koreański |
| **Ł** | Łotewski |
| **N** | Norweski Bokmål |
| **P** | Perski, Polski, Portugalski, Portugalski (Brazylia) |
| **R** | Rumuński, Rosyjski |
| **S** | Sardyński, Serbski (cyrylica), Słowacki, Słoweński, Hiszpański, Hiszpański (Argentyna), Suahili, Szwedzki |
| **T** | Turecki |
| **U** | Ukraiński |
| **W** | Wietnamski |


## Nagrane komunikaty głosowe {#recorded-voice-prompts}

### Pobierz pakiety głosowe {#download-voice-packages}

<InfoAndroidOnly />

Używanie nagranych głosów w OsmAnd powinno być tylko ostatecznością. Są one dość ograniczone i nie potrafią wymawiać nazw ulic, nazw miejsc itp. Możesz pobrać komunikaty głosowe z dwóch różnych zestawów z listy.

- Pierwszy typ, to te zalecane:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Drugi typ to nagrane komunikaty głosowe, z niekompletnym zestawem funkcji:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Ustawienia nawigacji głosowej Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Tryby sygnałów dźwiękowych {#beep-modes}

<InfoAndroidOnly />

Możesz skonfigurować profil OsmAnd tak, aby wydawał sygnały dźwiękowe zamiast mówić, podobnie jak w komputerze rowerowym. Istnieją trzy podstawowe wzorce: *minimalny*, *prosty* i *złożony*. Wzorce prosty i złożony mają warianty *głośne*, które będą znacznie łatwiejsze do usłyszenia w głośnym otoczeniu, ale mogą brzmieć nieprzyjemnie ostro.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimalny**. Odpowiedni do podążania znaną trasą pieszo z minimalnymi rozpraszaczami, ten wzorzec będzie ostrzegał o mijaniu pośrednich celów, ulubionych miejsc i POI, a także o odchyleniu od trasy lub powrocie na nią. Nie będzie dostarczał żadnych ostrzeżeń dźwiękowych dotyczących zakrętów.
- **Prosty**. Oprócz alertów o celach, ulubionych miejscach, POI i innych, prosty wzorzec ostrzega dłuższym sygnałem dźwiękowym, gdy trzeba skręcić.
- **Złożony**. Odpowiedni do jazdy na rowerze szosowym, złożony wzorzec wykorzystuje sygnały dźwiękowe o różnej długości i wysokości, aby informować o zbliżających się zakrętach.
    - Niski sygnał dźwiękowy oznacza skręt w lewo, a wysoki sygnał dźwiękowy oznacza skręt w prawo. Seria sygnałów dźwiękowych o średniej wysokości oznacza zjazd na rondzie. Wszystkie trzy wysokości w sekwencji oznaczają zawracanie. We wszystkich tych przypadkach krótkie sygnały dźwiękowe oznaczają przygotowanie się do czegoś, podczas gdy długie sygnały dźwiękowe oznaczają zrobienie czegoś teraz.


## Powiadomienia tekstowe {#text-notifications}

Po rozpoczęciu trasy możesz wyświetlić informacje w rozwijanym menu systemowym na liście powiadomień. Ciche powiadomienia OsmAnd zawierają informacje takie jak instrukcje zakręt po zakręcie, strzałki kierunku zakrętu, czas przybycia i czas do celu, aktualną prędkość i odległość do celu.

![Powiadomienie o trasie nawigacji Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Aktywne przyciski w rozwijanym menu systemowym dla Twojej nawigacji:

- *<Translate android="true" ids="stop_navigation_service"/>*. Umożliwia zatrzymanie nawigacji.
- *<Translate android="true" ids="shared_string_pause"/>*. Umożliwia wstrzymanie nawigacji.
- *<Translate android="true" ids="shared_string_resume"/>*. Umożliwia wznowienie nawigacji.

### Konfiguruj powiadomienia {#configure-notifications}

Możesz zmienić ustawienia powiadomień dla aplikacji OsmAnd w ustawieniach systemowych swojego urządzenia. Powiadomienia mogą być wyświetlane na ekranie blokady, ekranie głównym, w menu rozwijanym lub na górze aplikacji.

Przeczytaj, jak kontrola powiadomień jest zaimplementowana na Androidzie w tym [artykule](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Dla iOS - [tutaj](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Sterowanie ekranem {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Menu sterowania ekranem Android](@site/static/img/navigation/route/screen_control_android.png)

Możesz sterować ekranem swojego urządzenia, aby oszczędzać energię. Ten tryb ma dwa ogólne ustawienia: *<Translate android="true" ids="screen_timeout"/>* i *<Translate android="true" ids="turn_screen_on"/>*.

### Limit czasu ekranu {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Ekran wyłącza się w zależności od ustawień systemowych urządzenia. Przycisk *Zmień ustawienia* zapewnia szybki dostęp do menu systemowego, takiego jak *Wyświetlacz i jasność*, gdzie można dostosować limit czasu ekranu.

    ![Sterowanie ekranem z limitem czasu systemu Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Jeśli opcja *Ekran zawsze włączony* jest włączona, ekran urządzenia nie wyłącza się po wybudzeniu. Jeśli jest wyłączona, możesz ustawić czas, po którym ekran urządzenia wyłączy się, jeśli nie będziesz z nim wchodzić w interakcję, od 5 do 60 sekund.

    ![Limit czasu po wybudzeniu Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Limit czasu po wybudzeniu Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Włącz ekran {#turn-screen-on}

![włącz ekran Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Wybierz opcje wybudzania ekranu i upewnij się, że OsmAnd pozostaje na pierwszym planie, gdy urządzenie jest zablokowane.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Powiązane artykuły {#related-articles}

- [Parametry trasy](../routing/osmand-routing.md#routing-types)
- [Przygotowanie trasy](../setup/route-navigation.md)
- [Nawigacja po śladzie](../setup/gpx-navigation.md)
- [Nawigacja po znacznikach](../setup/markers-navigation.md)
- [Szczegóły trasy](../setup/route-details.md)
- [Ustawienia nawigacji](./navigation-settings.md)
- [Ekran mapy podczas nawigacji](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Typowe problemy i rozwiązania {#common-issues-and-solutions}

1. [Problemy z dźwiękiem.](#solving-audio-issues)
2. [Testowanie komunikatów głosowych.](#testing-of-voice-prompts)
3. [Dlaczego powinienem używać głosu TTS zamiast nagranego głosu?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS nie działa poprawnie? Wykonaj te kroki, aby to naprawić.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Ostatnia aktualizacja: marzec 2025*