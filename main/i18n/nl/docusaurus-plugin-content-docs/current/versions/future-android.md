---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# Android 5.4 {#android-54}



## Deelnemen aan de bètaversie {#join-beta}

OsmAnd brengt dagelijks verschillende kant-en-klare builds uit, zodat u nieuwe functies kunt volgen en kunt deelnemen aan het vertaalproces van OsmAnd. U kunt deelnemen aan het testen van de bètaversie van OsmAnd via Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Wat is er nieuw {#whats-new}

- Verbeterde **[Favorieten](https://osmand.net/docs/user/personal/favorites)** met ondersteuning voor mediabijlagen (foto's, audio en video) en verbeterde integratie van audio-/videonotities.
- Verbeterde **[navigatiewidgets](https://osmand.net/docs/user/widgets/nav-widgets)** met flexibelere aanpassing van grootte en indeling voor verschillende schermdichtheden en oriëntaties.
- Kaartlegenda toegevoegd aan **[Configureer kaart](https://osmand.net/docs/user/map/configure-map-menu)** voor een beter begrip van routetypes en kaartelementen.
- Verbeterd routefilteren en visuele bediening in **[Configureer kaart](https://osmand.net/docs/user/map/configure-map-menu)**, inclusief routeclassificaties en prioriteiten.
- Verbeterde trackanalyse met nieuwe grafiektypes en gedetailleerdere gegevens zoals ondergrond, wegtype en hellingsgraad.
- Verbeterd trackbeheer met voorbeelden en verbeterde organisatie in **[Mijn plaatsen](https://osmand.net/docs/user/personal/myplaces)**.
- Automatische back-up en betrouwbaardere synchronisatie van gebruikersgegevens in **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, inclusief **[Slimme mappen](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Initiële verbeteringen aan nautische navigatie met AIS-verbeteringen en extra navigatieparameters en widgets.
- Verbeterde **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**-ervaring met verbeterde zoek- en navigatiebediening.
- Mogelijkheid toegevoegd om te communiceren met de kaart op **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, inclusief het rechtstreeks selecteren van punten.
- Herontworpen **[Hoogtewidget](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** met gedetailleerdere hoogte-informatie van de route.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Bugopsporingen {#bug-fixes}

- Een [probleem](https://github.com/osmandapp/OsmAnd/issues/16507) opgelost waarbij favorieteigenschappen (kleur, pictogram, vorm) niet werden bijgewerkt bij het wijzigen van de groep.
- [Onjuiste afritrichtingen](https://github.com/osmandapp/OsmAnd/issues/23104) op rotondes in Android Auto opgelost.
- Onjuiste [bergop- en bergaf-waarden](https://github.com/osmandapp/OsmAnd/issues/20624) in hoogtemeterwidgets gecorrigeerd.
- Voorkomen dat [verborgen favorieten](https://github.com/osmandapp/OsmAnd/issues/24689) opnieuw op de kaart verschijnen bij het toevoegen van track-waypoints aan een map.
- [Inconsistenties tussen grafieken](https://github.com/osmandapp/OsmAnd/issues/24712) op het detailsscherm opgelost.
- Een [probleem](https://github.com/osmandapp/OsmAnd/issues/24791) opgelost waarbij losgemaakte Favorieten-mappen na het herstarten van de app opnieuw vastgemaakt leken.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->