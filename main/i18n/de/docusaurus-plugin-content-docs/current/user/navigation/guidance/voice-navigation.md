---
source-hash: 23fa8491d55d8126a921b95c8d650a5b5c13376f6c4a630b3c3446e35d19d2c0
sidebar_position: 6
title: Sprachansagen / Benachrichtigungen
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



## Überblick {#overview}

Die Sprachnavigationsfunktion von OsmAnd bietet gesprochene Anweisungen und Warnungen in Echtzeit, die Ihnen helfen, unterwegs informiert und sicher zu bleiben. Sie können die Führung an Ihre Vorlieben und Bedürfnisse anpassen. Wählen Sie dazu ein passendes Sprachprofil, entweder eine [Text-to-Speech (TTS)-Engine](#tts-text-to-speech), die Straßennamen, Entfernungen und Geschwindigkeitsbegrenzungen dynamisch ansagen kann, oder eine [voraufgezeichnete Stimme](#recorded-voice-prompts), die prägnante Anweisungen gibt.

Zusätzlich zu den Abbiegeanweisungen kann die Sprachnavigation von OsmAnd Sie über bevorstehende Sonderziele, Änderungen der Verkehrsbedingungen und das Überschreiten einer voreingestellten Geschwindigkeitsbegrenzung informieren. Weitere Informationen zum Anpassen dieser Warnungen finden Sie unter [Einstellungen für die Ansagezeit](#announcement-time) und [Geschwindigkeitsbegrenzungswarnungen](#speed-limit).

Mit der richtigen Kombination aus Sprachoptionen, Warneinstellungen und Geräteeinstellungen erhalten Sie während Ihrer gesamten Route zeitnahe und klare Navigationsinformationen.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Textbenachrichtigungen spiegeln die Auslösezeit und die Nachrichten der Sprachansagen vollständig wider.

:::


## Sprachansagen einrichten {#setting-up-voice-prompts}

OsmAnd bietet verschiedene Optionen zur Steuerung von Sprachansagen, damit Sie Ihre Route bequem verfolgen können. Um diese Einstellungen zu konfigurieren, beginnen Sie in den entsprechenden Anwendungsbereichen.

- Aktivieren Sie Sprachansagen im Abschnitt [Navigation](../guidance/navigation-settings.md), indem Sie auf **Einstellungen** tippen. Sie können Sprachansagen auch über *Profil konfigurieren*, *Navigationseinstellungen* aktivieren und konfigurieren.
- Schalten Sie Sprachansagen ein oder aus über *Menü → Navigation →* tippen Sie auf die *Sound-Schaltfläche*,
oder *Menü → Navigation →* Einstellungen-Schaltfläche *→ Sound →* Ein/Aus-Schalter.

Weitere Informationen dazu, wie und wann Sprachansagen ausgelöst werden, finden Sie in der Dokumentation [Auslösen von Navigations-Sprachansagen](../../../technical/algorithms/voice-prompt-triggering.md).


### Spracheinstellungen {#voice-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Sprachnavigationseinstellungen Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Sprachnavigationseinstellungen iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Sprache](#voice-prompt-language)**. Wählen Sie Ihre bevorzugte Sprache und Ihren bevorzugten Typ.

**Ansage**. Ermöglicht die Konfiguration der folgenden Arten von Ansagen:

- *Straßennamen (TTS), Ausfahrtnummern, Verkehrswarnungen, Fußgängerüberwege* und *Tunnel*.
- *[Radarkameras](#speed-cameras)*.
- Konfigurieren Sie auch das **[Warn-Widget](../../widgets/nav-widgets.md#alert-widget)** zur Verwendung mit Ansagen.

**Benutzerpunkte**:

- Aktivieren Sie Sprachansagen für die voreingestellten und hinzugefügten [Wegpunkte](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favoriten](../../personal/favorites.md) oder [POIs](../../map/point-layers-on-map.md#points-of-interest-pois). Während der Fahrt werden die ausgewählten Punkte angesagt, wenn Sie sich ihnen nähern oder sie passieren.

| Ansagetyp | Vorlaufzeit [s]:<br/>Entsprechende<br/>Vorlaufdistanz bei Standardgeschwindigkeit [m] | Limit |
| :- | :- | :- |
| Annäherung | **60 s:**<br/>Fahren: 750 m<br/>Radfahren: 167 m<br/>Gehen: 67 m | Nicht mehr als 1 Punkt gleichzeitig |
| Vorbeifahren | **15 s:**<br/>Fahren: 188 m<br/>Radfahren: 42 m<br/>Gehen: 17 m | Nicht mehr als 3 Punkte gleichzeitig |

[**Geschwindigkeitsbegrenzung**](#speed-limit):

- *Ansage bei Überschreitung*.
- *Geschwindigkeitsbegrenzungstoleranz*.

**Sonstiges**:

- *Ansage bei GPS-Signalverlust und -Wiederherstellung*. OsmAnd meldet, wenn das GPS-Signal auf dem Gerät verloren geht.
- *Ansage bei Routenneuberechnung*. OsmAnd meldet die Routenneuberechnung im Falle einer [Abweichung oder Bewegung in umgekehrter Richtung](./navigation-settings.md#recalculate-route).
- *Ansage bei Abweichung von der Route*. Sie erhalten Informationen über Abweichungen von der Route gemäß den [eingestellten Parametern](./navigation-settings.md#recalculate-route).

**Optionen**:

- *Navigationsanweisungen wiederholen*. Ermöglicht das Wiederholen der Navigationsanweisungen in regelmäßigen Abständen von 1 Minute bis 30 Minuten. Oder manuell – wenn Sie eine Sprachansage verpassen, können Sie sie erneut anhören, indem Sie einfach auf [den aktuellen Abbiegepfeil](../../widgets/nav-widgets.md#next-turn) auf dem Anwendungsbildschirm tippen.
- *[Ansagezeit](#announcement-time)*.

**Ausgabe** (*nur Android*):

- *[Sprachführungs-Ausgabe](#voice-guidance-output)*.
- *Musik pausieren*. Sprachansagen stoppen die Musikwiedergabe für eine Weile.


### Radarkameras {#speed-cameras}

![Sprachnavigation Ansagezeit Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Radarkamera-Warnungen](../../personal/global-settings.md#uninstall-speed-cameras) ermöglichen es Ihnen, POIs mit Radarkameras zu aktivieren oder zu deaktivieren. Sie müssen die OsmAnd-Anwendung neu starten, um die Änderungen zu übernehmen.

In einigen Ländern oder Regionen ist die Verwendung von Radarkamera-Warnanwendungen illegal. Sie müssen eine Wahl treffen, die von den Gesetzen in Ihrem Land abhängt. Wählen Sie **Aktiv lassen**, und Sie erhalten Radarkamera-Warnungen und Benachrichtigungen. Wählen Sie **Deinstallieren**, und alle Daten im Zusammenhang mit Radarkameras, wie Warnungen, Benachrichtigungen und POIs, werden gelöscht, bis Sie OsmAnd vollständig neu installieren.


### Geschwindigkeitsbegrenzung {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Sprachnavigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sprachnavigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

Die Option **Geschwindigkeitsbegrenzung** ermöglicht es OsmAnd, Sie zu informieren, wenn Ihre aktuelle Geschwindigkeit einen bestimmten Schwellenwert überschreitet. Daten zu den maximal zulässigen Geschwindigkeitsbegrenzungen stammen aus OpenStreetMap.

**Ansage bei Überschreitung**
*Geschwindigkeitsbegrenzungstoleranz* ermöglicht es Ihnen, eine zulässige Abweichung (z. B. -10 km/h bis +20 km/h) von der [gesetzlichen Höchstgeschwindigkeit](https://wiki.openstreetmap.org/wiki/Key:maxspeed) auf der aktuellen Straße auszuwählen. Wenn Ihre Geschwindigkeit diese Toleranz überschreitet, gibt OsmAnd eine Sprachansage aus.

*Regeln für die Aktivierung von Sprachansagen* bei Überschreitung der Geschwindigkeitsbegrenzung:

- *Erste Warnung*. Wenn OsmAnd feststellt, dass Sie die Geschwindigkeitsbegrenzung überschreiten, wartet es 5 Sekunden, bevor die erste Sprachwarnung ausgegeben wird.
- *Verzögerung der Wiederholungsansage*. Wenn Sie weiterhin zu schnell fahren, wird die nächste Warnung um 120 Sekunden verzögert, um übermäßig häufige Benachrichtigungen zu vermeiden.
- *Timer-Reset*. Der Timer wird zurückgesetzt, wenn Sie 30 Sekunden lang innerhalb der gesetzlichen Grenze bleiben. Bei jeder weiteren Geschwindigkeitsüberschreitung wird wieder 5 Sekunden gewartet, bevor die nächste Warnung ertönt.

Diese Einstellung **Geschwindigkeitsbegrenzungstoleranz** beeinflusst die Geschwindigkeit, die im *Warnbereich* des [Tachometer-Widgets](../../widgets/info-widgets.md#speedometer) in der OsmAnd-App, [Android Auto](../../navigation/auto-car.md#speedometer) und [CarPlay](../../navigation/car-play.md#speedometer) angezeigt wird.


### Ansagezeit {#announcement-time}

![Sprachnavigation Ansagezeit Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

Die Ansagezeit der verschiedenen Sprachansagen hängt vom ausgewählten Profil, der Art der Ansage, der aktuellen Navigationsgeschwindigkeit und der Standard-Navigationsgeschwindigkeit ab. Mit dieser Einstellung können Sie die Entfernung ändern, bevor die Sprachansagen aktiviert werden, indem Sie einen Entfernungsfaktor anwenden: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

In der Dropdown-Liste *Zeit- und Distanzintervalle* können Sie detaillierte Informationen über die Aktivierung von Ansagen für die verschiedenen Entfernungsfaktoren anzeigen. Weitere Informationen finden Sie unter [Auslösen von Navigations-Sprachansagen](../../../technical/algorithms/voice-prompt-triggering.md).


### Sprachführungs-Ausgabe {#voice-guidance-output}

<InfoAndroidOnly/>

![Sprachnavigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

Um die Audiowiedergabe in demselben Ausgabestream gleichzeitig zu vermeiden, wird der Audiofokus in Android implementiert. OsmAnd verwendet den aus der Liste in dieser Einstellung ausgewählten Lautsprecher für die Audioausgabe. Andere Anwendungen pausieren die Wiedergabe oder reduzieren die Lautstärke, um Ihnen das Hören der Sprachansagen von OsmAnd zu erleichtern.

- Medien-/Navigationsaudio.
- Benachrichtigungsaudio.
- Telefonanrufaudio (zum Unterbrechen von Bluetooth-[Autoradios](../auto-car.md)).


### Testen von Sprachansagen {#testing-of-voice-prompts}

Sie können die Sprachansagen testen mit:

- [Navigation simulieren](../../navigation//setup/route-navigation.md#simulated-navigation). Legen Sie eine Route fest und starten Sie die Simulation: *Navigationsmenü → Einstellungen → Navigation simulieren*.

- [Sprachansagen testen](../../plugins/development.md#application-testing) (*nur Android*). Verwenden Sie das *Entwicklungs-Plugin*, um Sprachansagen zu testen:
- Gehen Sie zu *Menü → Plugins → OsmAnd Development aktivieren*.
- Gehen Sie zu *Einstellungen → Sprachansagen testen*.
- Wählen Sie eine Sprache aus und prüfen Sie, ob das System die Ansagen korrekt wiedergibt.


### Beheben von Audioproblemen {#solving-audio-issues}

Wenn Sie **Sprachansagen** oder [Geschwindigkeitsbegrenzungswarnungen](#speed-limit) nicht hören:

- Stellen Sie sicher, dass die Lautstärke Ihres Geräts eingeschaltet und hochgedreht ist.
- Bestätigen Sie, dass der Ton während der Navigation aktiviert ist: *Menü → Navigation → Ton ein/aus-Schaltfläche* oder *Menü → Navigation → Einstellungen-Schaltfläche → Ton* für detaillierte Audiokonfiguration.
- Wählen Sie aus, welche [Lautsprecher](#voice-guidance-output) verwendet werden sollen.
- Überprüfen Sie, welche [Sprachführung](#voice-prompt-language) ausgewählt ist, und stellen Sie sicher, dass Sie eine TTS- oder aufgezeichnete Stimme haben, die Geschwindigkeitsbegrenzungswarnungen ansagen kann.
- Überprüfen Sie, ob der Ton nicht an ein unbeabsichtigtes Ausgabegerät geleitet wird (z. B. ein getrenntes Bluetooth-Headset).

Weitere Schritte zur Fehlerbehebung finden Sie im [Handbuch zur Fehlerbehebung bei der Navigation](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

OsmAnd unterstützt **Text-to-Speech (TTS)**-Stimmen, die dynamische und detaillierte Sprachführung bieten, einschließlich Abbiegeanweisungen, Straßennamen und POI-Ansagen. TTS-Stimmen sind in der Anwendung enthalten, erfordern jedoch eine auf dem Gerät installierte [Text-to-Speech-Engine](https://en.wikipedia.org/wiki/Speech_synthesis).

Die meisten modernen Android- und iOS-Geräte enthalten eine standardmäßige TTS-Engine, aber zusätzliche Engines und Sprachen können separat installiert werden.

Eine Liste der **verfügbaren TTS-Engines und unterstützten Sprachen** auf Android finden Sie unter:
[Liste der Sprachen mit verfügbaren TTS-Engines auf Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Konfigurieren von TTS auf Ihrem Gerät:***

**Android:**

1. Öffnen Sie die Einstellungen.
2. Navigieren Sie zu *Bedienungshilfen → Text-to-Speech-Ausgabe*.
3. Wählen Sie eine **TTS-Engine** (Google TTS oder eine andere installierte Engine).
4. Wählen Sie eine **bevorzugte Sprache** (einige erfordern möglicherweise zusätzliche Downloads).
5. Passen Sie Sprechgeschwindigkeit, Tonhöhe und Wiedergabegeschwindigkeit nach Bedarf an.
6. Tippen Sie auf **Beispiel anhören**, um die Sprachausgabe zu testen.

Weitere Details finden Sie unter:
[Google Support – Android Text-to-Speech Einstellungen](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Öffnen Sie die Einstellungen.
2. Gehen Sie zu *Bedienungshilfen → Gesprochene Inhalte*.
3. Tippen Sie auf **Stimmen**, um eine bevorzugte Stimme auszuwählen.
4. Passen Sie **Sprechgeschwindigkeit**, **Aussprachen** und andere Einstellungen an.
5. Testen Sie die Stimme mit **Auswahl sprechen** oder **Bildschirm sprechen**.

Weitere Details finden Sie unter:
[Apple Support – iPhone Spracheinstellungen](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Testen von Sprachansagen:***

Um zu überprüfen, ob TTS in OsmAnd ordnungsgemäß funktioniert:

- Aktivieren Sie das **Entwicklungs-Plugin**: *Menü → Einstellungen → Plugins → OsmAnd Development*.
- Öffnen Sie [Sprachansagen testen](../../plugins/development.md#application-testing): *Menü → Einstellungen → Plugins → OsmAnd Development → Sprachansagen testen*.

Weitere Informationen zur Fehlerbehebung finden Sie unter:
[Fehlerbehebung bei der Sprachnavigation](../../troubleshooting/navigation.md#voice-navigation).


### Sprachansagen-Sprache {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Sprachnavigation Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Sprachnavigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Sprachnavigationseinstellungen iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd bietet zwei Arten von Sprachansagen:

- **<Translate android="true" ids="tts_title"/>**
- Verwendet die TTS-Engine des Geräts, um Sprachansagen dynamisch zu generieren.
- Liest Straßennamen, Abbiegeanweisungen, POI-Namen und andere Details vor.
- Unterstützt mehrere Sprachen und Ausspracheeinstellungen.
- Kann mit Sprechgeschwindigkeit, Tonhöhe und Ausspracheeinstellungen angepasst werden.

- **<Translate android="true" ids="shared_string_recorded"/>** (*nur Android*)
- Verwendet voraufgezeichnete Sprachansagen für die Navigation.
- Klingt natürlicher als TTS, hat aber Einschränkungen.
- Liest keine Straßennamen oder POI-Namen vor.
- Bietet nur grundlegende Abbiegeanweisungen.

> *TTS wird für detaillierte Navigationsanweisungen empfohlen.*

#### Systemweite Sprachansagen Einstellungen {#system-level-voice-prompt-settings}

Das Verhalten von Sprachansagen, einschließlich *Wiedergabegeschwindigkeit, Tonhöhe und Pausen*, kann nur in den Systemeinstellungen des Geräts angepasst werden.

**Android:**

1. Öffnen Sie die Geräteeinstellungen *→ Bedienungshilfen → Text-to-Speech-Ausgabe*.
2. Wählen Sie Ihre bevorzugte TTS-Engine und Sprache.
3. Passen Sie Sprechgeschwindigkeit, Tonhöhe und Wiedergabegeschwindigkeit an.

**iOS:**

1. Öffnen Sie die Geräteeinstellungen *→ Bedienungshilfen → Gesprochene Inhalte*.
2. Passen Sie an: Sprache, Stimmen, Sprechgeschwindigkeit, Aussprachen.

> *Für zusätzliche Stimmen laden Sie Sprachpakete aus den Systemeinstellungen herunter.*


#### Verfügbare TTS-Sprachen {#available-tts-languages}

Derzeit gibt es insgesamt 45 Sprachen. Nicht alle unten aufgeführten Sprachen werden von jeder TTS-Engine unterstützt. Siehe [hier](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Arabisch |
| **B** | Weißrussisch, Bulgarisch |
| **C** | Katalanisch, Chinesisch, Chinesisch (Hongkong), Chinesisch (traditionell), Kroatisch, Tschechisch |
| **D** | Dänisch, Niederländisch |
| **E** | Englisch, Englisch (Vereinigtes Königreich), Estnisch |
| **F** | Finnisch, Französisch |
| **G** | Deutsch, Deutsch (umgangssprachlich), Griechisch, Guarani |
| **H** | Hindi, Ungarisch, Ungarisch (formell), Hebräisch |
| **I** | Indonesisch, Italienisch |
| **J** | Japanisch |
| **K** | Koreanisch |
| **L** | Lettisch |
| **N** | Norwegisch Bokmål |
| **P** | Persisch, Polnisch, Portugiesisch, Portugiesisch (Brasilien) |
| **R** | Rumänisch, Russisch |
| **S** | Sardisch, Serbisch (Kyrillisch), Slowakisch, Slowenisch, Spanisch, Spanisch (Argentinien), Swahili, Schwedisch |
| **T** | Türkisch |
| **U** | Ukrainisch |
| **V** | Vietnamesisch |


## Aufgezeichnete Sprachansagen {#recorded-voice-prompts}

### Sprachpakete herunterladen {#download-voice-packages}

<InfoAndroidOnly />

Die Verwendung aufgezeichneter Stimmen in OsmAnd sollte nur ein Notfallplan sein. Sie sind ziemlich begrenzt und können keine Straßennamen, Ortsnamen usw. aussprechen. Sie können Sprachansagen aus zwei verschiedenen Sätzen aus der Liste herunterladen.

- Der erste Typ, dies sind die empfohlenen:

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

![Sprachnavigationseinstellungen Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Sprachnavigationseinstellungen Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Der zweite Typ sind aufgezeichnete Sprachansagen mit einem unvollständigen Funktionsumfang:

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

![Sprachnavigationseinstellungen Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Piep-Modi {#beep-modes}

<InfoAndroidOnly />

Sie können ein OsmAnd-Profil so konfigurieren, dass es piept, anstatt zu sprechen, ähnlich wie bei einem Fahrradcomputer. Es gibt drei grundlegende Muster: *minimal*, *einfach* und *komplex*. Die einfachen und komplexen Muster haben *laute* Varianten, die in einer lauten Umgebung erheblich leichter zu hören sind, aber unangenehm schrill klingen können.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimal**. Geeignet, um eine bekannte Route zu Fuß mit minimalen Ablenkungen zu verfolgen. Dieses Muster warnt Sie beim Passieren von Zwischenzielen, Favoriten und POIs sowie bei Abweichungen von oder Rückkehr zur Route. Es gibt keine akustischen Warnungen für Abbiegungen.
- **Einfach**. Zusätzlich zu Warnungen für Ziele, Favoriten, POIs und andere warnt Sie das einfache Muster mit einem längeren Piepton, wenn Sie abbiegen müssen.
- **Komplex**. Geeignet für das Radfahren auf der Straße. Das komplexe Muster verwendet Pieptöne unterschiedlicher Länge und Tonhöhe, um Sie über bevorstehende Abbiegungen zu informieren.
- Ein tiefer Piepton bedeutet Linksabbiegen, während ein hoher Piepton Rechtsabbiegen bedeutet. Eine Reihe von Pieptönen mittlerer Tonhöhe stellt die Ausfahrt dar, die Sie an einem Kreisverkehr nehmen müssen. Alle drei Tonhöhen nacheinander stellen eine Kehrtwende dar. In all diesen Fällen bedeuten kurze Pieptöne, dass Sie sich auf etwas vorbereiten müssen, während lange Pieptöne bedeuten, dass Sie etwas jetzt tun müssen.


## Textbenachrichtigungen {#text-notifications}

Sobald Sie eine Route gestartet haben, können Sie die Informationen im Dropdown-Systemmenü in der Benachrichtigungsliste anzeigen. Die stillen Benachrichtigungen von OsmAnd enthalten Informationen wie Abbiegeanweisungen, Abbiegepfeile, Ankunftszeit und verbleibende Zeit, aktuelle Geschwindigkeit und Entfernung zum Ziel.

![Navigationsroute Benachrichtigung Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Aktive Schaltflächen im Dropdown-Systemmenü für Ihre Navigation:

- *<Translate android="true" ids="stop_navigation_service"/>*. Ermöglicht das Beenden Ihrer Navigation.
- *<Translate android="true" ids="shared_string_pause"/>*. Ermöglicht das Pausieren Ihrer Navigation.
- *<Translate android="true" ids="shared_string_resume"/>*. Ermöglicht das Fortsetzen Ihrer Navigation.

### Benachrichtigungen konfigurieren {#configure-notifications}

Sie können die Benachrichtigungseinstellungen für die OsmAnd-App in den Systemeinstellungen Ihres Geräts ändern. Benachrichtigungen können auf dem Sperrbildschirm, dem Startbildschirm, im Dropdown Menü oder oben in der App angezeigt werden.

Lesen Sie in diesem [Artikel](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications) nach, wie die Benachrichtigungssteuerung auf Android implementiert ist. Für iOS - [hier](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Bildschirmsteuerung {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Bildschirmsteuerungsmenü Android](@site/static/img/navigation/route/screen_control_android.png)

Sie können den Bildschirm Ihres Geräts steuern, um Strom zu sparen. Dieser Modus hat zwei allgemeine Einstellungen: *<Translate android="true" ids="screen_timeout"/>* und *<Translate android="true" ids="turn_screen_on"/>*.

### Bildschirm-Timeout {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Der Bildschirm schaltet sich je nach den Systemeinstellungen Ihres Geräts aus. Die Schaltfläche *Einstellungen ändern* bietet schnellen Zugriff auf das Systemmenü wie *Anzeige und Helligkeit*, wo Sie das Bildschirm-Timeout anpassen können.

![System-Timeout Bildschirmsteuerung Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Wenn *Bildschirm eingeschaltet lassen* aktiviert ist, wendet der Bildschirm des Geräts nach dem Aufwachen kein Timeout an. Wenn es deaktiviert ist, können Sie die Zeit einstellen, nach der sich der Bildschirm des Geräts ausschaltet, wenn Sie nicht mit ihm interagieren, von 5 bis 60 Sekunden.

![Timeout nach dem Aufwachen Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout nach dem Aufwachen Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Bildschirm einschalten {#turn-screen-on}

![Bildschirm einschalten Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Wählen Sie Optionen zum Aufwecken des Bildschirms und stellen Sie sicher, dass OsmAnd im Vordergrund bleibt, wenn das Gerät gesperrt ist.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](../setup/route-navigation.md)
- [Navigation nach Track](../setup/gpx-navigation.md)
- [Navigation nach Markierungen](../setup/markers-navigation.md)
- [Routendetails](../setup/route-details.md)
- [Navigationseinstellungen](./navigation-settings.md)
- [Kartenbildschirm während der Navigation](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. [Audioprobleme.](#solving-audio-issues)
2. [Testen von Sprachansagen.](#testing-of-voice-prompts)
3. [Warum sollte ich eine TTS-Stimme anstelle einer aufgezeichneten Stimme verwenden?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS funktioniert nicht richtig? Befolgen Sie diese Schritte, um es zu beheben.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Zuletzt aktualisiert: März 2025*