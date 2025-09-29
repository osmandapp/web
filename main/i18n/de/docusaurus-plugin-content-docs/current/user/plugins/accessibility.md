---
source-hash: 4db0114e42759ddaed0f65e43eed0a9d1c7cdaa964a48ca19d502843f4cd2bf1
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
Das Barrierefreiheits-Plugin ist nur für die **Android-Version** von OsmAnd verfügbar. Die [iOS-Version](#how-to-use-ios) stützt sich auf die standardmäßigen Barrierefreiheitseinstellungen des Systems.
:::

## Übersicht {#overview}

Die Barrierefreiheit verbessert die Benutzerfreundlichkeit für blinde und sehbehinderte Benutzer durch die Integration mit den [Android-Barrierefreiheitswerkzeugen](https://www.android.com/accessibility/). Das Plugin bietet **Text-zu-Sprache, Gestensteuerung, automatische Ansagen** und **haptisches Feedback**, um die Navigation zugänglicher zu machen. Unter iOS nutzt OsmAnd die in Apple integrierten Barrierefreiheitsfunktionen wie VoiceOver.


### Wie zu verwenden (Android) {#how-to-use-android}

![Barrierefreiheit](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Aktivieren Sie das Barrierefreiheits-Plugin:***  

1. **Aktivieren Sie das Plugin**: *Menü → Plugins → Barrierefreiheit → Aktivieren*.

2. **Schalten Sie den Barrierefreiheitsmodus ein**:  
   - Navigieren Sie zu *Systemeinstellungen → Barrierefreiheit* auf Ihrem Android-Gerät.
   - Aktivieren Sie TalkBack oder einen anderen Bildschirmleser.

3. **Passen Sie die Plugin-Einstellungen an**:  
   - Öffnen Sie die [Barrierefreiheitseinstellungen](#plugin-settings) in der OsmAnd-App.
   - Konfigurieren Sie Funktionen wie Sprechgeschwindigkeit, automatische Ansagen und haptisches Feedback.

<br/>

***Merkmale und Funktionalität:***

- **Gestensteuerung**:
   - Unterstützt alle standardmäßigen [OsmAnd-Gesten](../map/interact-with-map.md#gestures).
   - Passt Gesten an die Anweisungen von Androids **TalkBack** an.

- **TalkBack-Integration**:
   - Der TalkBack-Bildschirmleser bietet Audioführung für die Navigation und Menüinteraktionen.
   - Erfahren Sie mehr über TalkBack-Gesten [hier](https://support.google.com/accessibility/android/answer/6151827?hl=de&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Hintergrundbetrieb**. Audio- und haptisches Feedback werden auch bei ausgeschaltetem oder gesperrtem Bildschirm fortgesetzt.

- **Aktionen der Kompass-Schaltfläche**:

| Geste | Aktion | TalkBack-Äquivalent |
|-----|-----|-----|
| **Einfaches Tippen** | Dreht die Karte nach **Norden** | **Doppeltes Tippen** |
| **Langes Tippen** | Öffnet die Liste der [Kartenausrichtungen](../map/interact-with-map.md#map-orientation-modes) | **Doppeltippen und halten** |
| **Doppeltes Tippen** | *Nicht im Barrierefreiheitsmodus verfügbar* | *Nicht unterstützt* |


### Wie zu verwenden (iOS) {#how-to-use-ios}

Die iOS-Version von OsmAnd verwendet die **integrierten Barrierefreiheitswerkzeuge** des Systems.

1. **Aktivieren Sie VoiceOver**:
   - Gehen Sie zu *Einstellungen → Bedienungshilfen → VoiceOver*.
   - Konfigurieren Sie **VoiceOver-Gesten** für die Verwendung mit OsmAnd.

2. **Unterstützte Funktionen**:
   - **Unterstützung für Bildschirmleser** bei Karteninteraktionen.
   - **Anpassbare Gesten** über die iOS-Einstellungen.
   - Alle standardmäßigen [OsmAnd-Gesten](../map/interact-with-map.md#gestures) sind verfügbar.

3. **Erfahren Sie mehr**:
   - Lesen Sie hier über die iOS Vision-Barrierefreiheitsfunktionen [hier](https://www.apple.com/de/accessibility/vision/).
   - Entdecken Sie VoiceOver-Gesten für das iPhone [hier](https://support.apple.com/de-de/guide/iphone/iph3e2e2281/ios).


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um die Barrierefreiheitsfunktionen des Geräts in OsmAnd zu aktivieren, müssen Sie die folgenden Einstellungen vornehmen:

1. **Aktivieren Sie das** [Barrierefreiheits-Plugin](../plugins/index.md#enable--disable):  *Menü → Plugins → Barrierefreiheit → Aktivieren*.  
2. **Aktivieren Sie den Barrierefreiheitsmodus** auf Ihrem Gerät.
3. Konfigurieren Sie die [Plugin-Einstellungen](#plugin-settings) für die Barrierefreiheit.


## Plugin-Einstellungen {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Barrierefreiheit](@site/static/img/plugins/Accessibility/access_.png)  

Das Barrierefreiheits-Plugin bietet verschiedene Einstellungen, um die Navigation und Interaktion für Benutzer mit Behinderungen zu personalisieren. Diese Einstellungen werden pro [Profil](../personal/profiles.md) in OsmAnd angewendet.

| Einstellung                   | Beschreibung |  
|---------------------------|-------------|  
| **Barrierefreiheitsmodus**    | Aktiviert *integrierte OsmAnd-Funktionen* oder verwendet **Systemeinstellungen**. |  
| **Sprechgeschwindigkeit**           | Steuert die *Text-zu-Sprache-Geschwindigkeit* im Bereich von **50 % bis 200 %**. |  
| [Intelligente automatische Ansage](#smart-autoannounce-and-clockwise-directions)    | Bietet *Sprachführung*, wenn von der Route abgewichen wird. |  
| **Intervall für automatische Ansagen**   | Legt die Mindestzeit zwischen den Ansagen fest, von **5 Sekunden bis 5 Minuten**. |  
| **Richtungsstil**       | Wählen Sie zwischen *Seitwärts (8 Richtungen)* oder [Im Uhrzeigersinn](#smart-autoannounce-and-clockwise-directions) (12 Richtungen)*. |  
| **Audio-Richtungsanweisungen**      | Spielt *Audio-Anweisungen* ab, die die Richtung angeben. |  
| **Haptische Richtungsanweisungen**     | Bietet *Vibrationsfeedback* für Abbiegungen und Abweichungen.|  

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

***Tipps für eine optimierte Barrierefreiheit:***

- **Bildschirmleser** - Verwenden Sie TalkBack (*Android*) oder VoiceOver (*iOS*) für eine verbesserte Karteninteraktion.
- **Audio-Navigation** - Aktivieren Sie die automatische Ansage, um Sprachanweisungen zu erhalten, während der Bildschirm ausgeschaltet ist.
- **Haptisches Feedback** - Ideal für Umgebungen mit schlechter Sicht oder wenn Audio-Anweisungen unpraktisch sind.


### Intelligente automatische Ansage und Richtungen im Uhrzeigersinn {#smart-autoannounce-and-clockwise-directions}

Die Funktion **Intelligente automatische Ansage** bietet *Audio-Benachrichtigungen*, wenn Sie von der geplanten Route abweichen, während der **Richtungsstil im Uhrzeigersinn** *Navigationsanweisungen basierend auf dem Zifferblatt einer Uhr* bietet. Diese Funktionen sind darauf ausgelegt, sehbehinderte Benutzer zu unterstützen, die auf *Sprachführung* angewiesen sind.  

- Wenn **TalkBack nicht aktiviert ist**, zeigen sowohl die *Intelligente automatische Ansage* als auch die *Richtungen im Uhrzeigersinn* nur *Textbenachrichtigungen* auf dem Bildschirm an.  

- **Sprachbenachrichtigungen** werden nur aktiviert, wenn *TalkBack* in den **Systemeinstellungen des Geräts** aktiviert ist.  

- Stellen Sie das **Intervall für automatische Ansagen** (z. B. *10 Sekunden*) ein, um die Häufigkeit der Ansagen zu steuern.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)