---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title:  Barrierefreiheit
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


:::caution Hinweis
Das Barrierefreiheits-Plugin ist nur in der **Android-Version** von OsmAnd verfügbar. Die [iOS-Version](#how-to-use-ios) verwendet die Standard-Barrierefreiheitseinstellungen des Systems.
:::

## Überblick {#overview}

Barrierefreiheit verbessert die Benutzerfreundlichkeit für blinde und sehbehinderte Benutzer durch die Integration mit den [Android-Barrierefreiheits-Tools](https://www.android.com/accessibility/). Das Plugin bietet **Text-to-Speech, Gestensteuerung, automatische Ansagen** und **haptisches Feedback**, um die Navigation zugänglicher zu machen. Auf iOS verwendet OsmAnd die integrierten Barrierefreiheitsfunktionen von Apple wie VoiceOver.


### Verwendung (Android) {#how-to-use-android}

![Barrierefreiheit](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Barrierefreiheits-Plugin aktivieren:***

1. **Aktivieren Sie das Plugin**: *Menü → Plugins → Barrierefreiheit → Aktivieren*.

2. **Schalten Sie den Barrierefreiheitsmodus ein**:
   - Navigieren Sie auf Ihrem Android-Gerät zu *Systemeinstellungen → Barrierefreiheit*.
   - Aktivieren Sie TalkBack oder einen anderen Screenreader.

3. **Plugin-Einstellungen anpassen**:
   - Öffnen Sie die [Barrierefreiheits-Einstellungen](#plugin-settings) in der OsmAnd-App.
   - Konfigurieren Sie Funktionen wie Sprechgeschwindigkeit, automatische Ansage und haptisches Feedback.

<br/>

***Funktionen und Funktionalität:***

- **Gestensteuerung**:
   - Unterstützt alle Standard-[OsmAnd-Gesten](../map/interact-with-map#gestures).
   - Passt Gesten an die Anweisungen von Android **TalkBack** an.

- **TalkBack-Integration**:
   - Der TalkBack-Screenreader bietet Audio-Anleitungen für die Navigation und Menü-Interaktionen.
   - Erfahren Sie mehr über TalkBack-Gesten [hier](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Hintergrundoperationen**. Audio- und haptisches Feedback werden auch bei ausgeschaltetem oder gesperrtem Bildschirm fortgesetzt.

- **Aktionen der Kompass-Taste**:

| Geste | Aktion | TalkBack-Äquivalent |
|-----|-----|-----|
| **Einmaliges Tippen** | Karte nach **Norden** drehen | **Doppeltes Tippen** |
| **Langes Tippen** | Öffnet die Liste der [Kartenorientierungen](../map/interact-with-map.md#map-orientation-modes) | **Doppeltes Tippen und Halten** |
| **Doppeltes Tippen** | *Nicht verfügbar im Barrierefreiheitsmodus* | *Nicht unterstützt* |


### Verwendung (iOS) {#how-to-use-ios}

Die iOS-Version von OsmAnd verwendet die **integrierten Barrierefreiheits-Tools** des Systems.

1. **VoiceOver aktivieren**:
   - Gehen Sie zu *Einstellungen → Barrierefreiheit → VoiceOver*.
   - Konfigurieren Sie **VoiceOver-Gesten** zur Verwendung mit OsmAnd.

2. **Unterstützte Funktionen**:
   - **Screenreader-Unterstützung** für Karteninteraktionen.
   - **Anpassbare Gesten** über die iOS-Einstellungen.
   - Alle Standard-[OsmAnd-Gesten](../map/interact-with-map#gestures) sind verfügbar.

3. **Mehr erfahren**:
   - Lesen Sie mehr über iOS Vision Accessibility-Funktionen [hier](https://www.apple.com/accessibility/vision/).
   - Erkunden Sie VoiceOver-Gesten für iPhone [hier](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um die Barrierefreiheitsfunktionen des Geräts in OsmAnd zu aktivieren, müssen Sie die folgenden Einstellungen vornehmen:

1. **Aktivieren Sie das** [Barrierefreiheits-Plugin](../plugins/index.md#enable--disable): *Menü → Plugins → Barrierefreiheit → Aktivieren*.
2. **Aktivieren Sie den Barrierefreiheitsmodus** auf Ihrem Gerät.
3. Konfigurieren Sie die [Einstellungen](#plugin-settings) des Barrierefreiheits-Plugins.


## Plugin-Einstellungen {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Barrierefreiheit](@site/static/img/plugins/Accessibility/access_.png)

Das Barrierefreiheits-Plugin bietet verschiedene Einstellungen zur Personalisierung der Navigation und Interaktion für Benutzer mit Behinderungen. Diese Einstellungen werden pro [Profil](../personal/profiles.md) in OsmAnd angewendet.

| Einstellung                   | Beschreibung |
|---------------------------|-------------|
| **Barrierefreiheitsmodus**    | Aktiviert *integrierte OsmAnd-Funktionen* oder verwendet **Systemeinstellungen**. |
| **Sprechgeschwindigkeit**           | Steuert die *Text-to-Speech-Geschwindigkeit* im Bereich von **50% bis 200%**. |
| [Intelligente automatische Ansage](#smart-autoannounce-and-clockwise-directions)    | Bietet *Sprachführung*, wenn Sie von der Route abweichen. |
| **Zeitraum für automatische Ansage**   | Legt die Mindestzeit zwischen Ansagen fest, von **5 Sekunden bis 5 Minuten**. |
| **Richtungsstil**       | Wählen Sie zwischen *seitlich (8 Richtungen)* oder [im Uhrzeigersinn](#smart-autoannounce-and-clockwise-directions) (12 Richtungen)*. |
| **Audio-Anweisungen**      | Spielt *Audio-Anweisungen* zur Angabe der Richtung ab. |
| **Haptische Anweisungen**     | Bietet *Vibrationsfeedback* bei Abbiegungen und Abweichungen.|

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Tipps für optimierte Barrierefreiheit:***

- **Screenreader** - Verwenden Sie TalkBack (*Android*) oder VoiceOver (*iOS*) für verbesserte Karteninteraktion.
- **Audio-Navigation** - Aktivieren Sie die automatische Ansage, um Sprachansagen zu erhalten, während der Bildschirm ausgeschaltet ist.
- **Haptisches Feedback** - Ideal für Umgebungen mit schlechter Sicht oder wenn Audio-Anleitungen unpraktisch sind.


#### Intelligente automatische Ansage und Richtungen im Uhrzeigersinn {#smart-autoannounce-and-clockwise-directions}

Die Funktion **Intelligente automatische Ansage** liefert *Audio-Benachrichtigungen*, wenn Sie von der geplanten Route abweichen, während der **Richtungsstil im Uhrzeigersinn** *Uhrzeit-basierte Navigationsanweisungen* bietet. Diese Funktionen wurden entwickelt, um sehbehinderte Benutzer zu unterstützen, die auf *Sprachführung* angewiesen sind.

- Wenn **TalkBack nicht aktiviert ist**, zeigen sowohl die *intelligente automatische Ansage* als auch die *Richtungen im Uhrzeigersinn* nur *Textbenachrichtigungen* auf dem Bildschirm an.

- **Sprachbenachrichtigungen** werden nur aktiviert, wenn *TalkBack* in den **Systemeinstellungen des Geräts** aktiviert ist.

- Stellen Sie den **Zeitraum für automatische Ansage** ein (z. B. *10 Sekunden*), um die Häufigkeit der Ansagen zu steuern.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Februar 2025*