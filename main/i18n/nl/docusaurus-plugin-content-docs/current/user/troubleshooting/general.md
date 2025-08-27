---
source-hash: 0a0e6bbadf34561e82d857c6270b71b1fa26543e35edd9ea4cda96e07711812f
sidebar_position: 2
title: Algemeen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Algemene problemen met betrekking tot verschillende functies van OsmAnd.

## Batterijverbruik {#battery-consumption}

### OsmAnd lijkt te veel batterijvermogen te verbruiken {#osmand-seems-to-use-up-too-much-battery-power}

Er zijn gebruikersrapporten geweest over OsmAnd die buitensporig veel batterijvermogen verbruikt, met gevallen waarin OsmAnd verantwoordelijk was voor tot wel 90% van het batterijverbruik. We hebben echter veel tests uitgevoerd en konden dergelijke resultaten niet reproduceren.

Onder normale omstandigheden verbruikt OsmAnd alleen stroom wanneer dit nodig is voor actieve functies zoals live navigatie of het opnemen van tracks. Wanneer deze services actief zijn, verschijnen ze in het Android-meldingengebied. Als er geen dergelijke melding zichtbaar is, verbruikt OsmAnd geen stroom op de achtergrond.

Verschillende factoren beïnvloeden het batterijverbruik: de leeftijd van het apparaat, het aantal laadcycli, de batterijcapaciteit, de temperatuur en meer. Hieronder staan typische batterijverbruikssnelheden, gebaseerd op tests uitgevoerd op een gemiddeld apparaat:

| Apparaatfunctie | Batterijverbruik per uur |
| :--- | :--- |
| Typisch apparaat in slaapstand met alleen standaardapps actief | 0,5 % |
| Scherm aan (typisch) | 6 % |
| GPS actief (typisch) | 5 % |
| OsmAnd draait op de achtergrond voor het opnemen van tracks | 0,5 % |
| OsmAnd draait geen service op de achtergrond | 0 % |

#### Batterijverbruik van OsmAnd-functies {#osmand-function-battery-consumption}

| OsmAnd-functie | Batterijverbruik per uur |
| :--- | :--- |
| Track opnemen met scherm uit | 6 % |
| Navigatie met scherm aan | 12 % |

Het totale stroomverbruik zou het resultaat moeten zijn van het optellen van deze componenten, afhankelijk van hoe u OsmAnd gebruikt. Meld het alstublieft als u significante afwijkingen van deze typische waarden ziet.

### Batterijverbruik optimaliseren {#optimizing-battery-consumption}

Bij het gebruik van OsmAnd kunnen verschillende functies het batterijverbruik beïnvloeden, vooral tijdens activiteiten zoals navigatie of het opnemen van tracks. Hier zijn enkele tips om het batterijverbruik effectief te beheren:

- **Schermbediening tijdens navigatie** (*Android*). Om stroom te besparen, kunt u OsmAnd configureren om het scherm uit te laten tijdens navigatie, tenzij er een afslag of belangrijke gebeurtenis plaatsvindt. Dit is bijzonder handig tijdens stemnavigatie. Voor meer details, raadpleeg de *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Energiebesparende navigatie-instellingen**. U kunt het batterijverbruik verminderen door de frequentie van het opnieuw tekenen van de kaart te minimaliseren en de GPS-nauwkeurigheid te beperken. Om deze instellingen aan te passen, gaat u naar *Navigatie → Instellingen → Routenavigatie*. Voor meer informatie, raadpleeg het [energie besparen tijdens navigatie](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Kaartlagen en details beheren**. Deactiveer onnodige kaartfuncties zoals 3D-reliëf, hoogtelijnen of heuvelschaduwen. U kunt ook het aantal weergegeven objecten (POI-labels, grenzen, huisnummers, enz.) verminderen via het menu *Kaart configureren*. Het uitschakelen van deze lagen helpt de frequentie van het opnieuw tekenen van de kaart te verminderen, wat het stroomverbruik verlaagt.

- **Autozoom uitschakelen**. Autozoom tijdens navigatie kan leiden tot frequent opnieuw tekenen van de kaart, wat het batterijverbruik verhoogt. Het uitschakelen van deze functie kan helpen het stroomverbruik te verminderen. Navigeer naar *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* om autozoom uit te schakelen. Voor verdere details, bezoek [Kaart tijdens navigatie](../navigation/guidance/map-during-navigation).

- **Instellingen voor trackopname optimaliseren**. Zorg ervoor dat u de GPS-nauwkeurigheid en het schermgebruik tijdens trackopname aanpast om batterij te besparen. Bezoek de sectie [Probleemoplossing voor trackopname](../troubleshooting/track-recording-issues.md) voor meer begeleiding.

## Privacy {#privacy}

<!--
Privacy gerelateerde problemen (geschiedenis verwijderen / internetgebruik controleren / machtigingen).
-->

### Zoekgeschiedenis verwijderen {#how-to-delete-search-history}

Om de zoekgeschiedenis in OsmAnd te verwijderen:

1. Open het menu *Zoeken*.
2. Tik lang op een zoekresultaat.
3. Selecteer de resultaten die u wilt verwijderen, of gebruik de optie *Alles selecteren* in de linkerbovenhoek om alle resultaten te verwijderen.
4. Tik op het *Prullenbak*-pictogram in de rechterbovenhoek om de verwijdering te bevestigen.

Voor meer gedetailleerde instructies over de zoekfunctionaliteit, kunt u [deze gids](../search/search-history.md) raadplegen.

## Overig {#other}

### Probleem met de GPS-verbinding (Android) {#problem-with-the-gps-connection-android}

OsmAnd vertrouwt op locatiegegevens die door uw Android-apparaat worden geleverd via de Android API.

Volg deze stappen om GPS-verbindingsproblemen op te lossen:

1. **Locatiebron wijzigen**. Probeer verschillende opties zoals Google Play Services of Android API in *OsmAnd Instellingen → Locatiebron*.
2. **Google Service API bijwerken**. Zorg ervoor dat u de nieuwste versie van [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US) hebt.
3. **Android Locatie-instellingen controleren**. Ga naar de Android Systeeminstellingen en zorg ervoor dat Locatietoegang is ingeschakeld en ingesteld op Hoge nauwkeurigheid. U kunt ook proberen de cache te wissen en uw apparaat opnieuw op te starten. GPS-problemen kunnen optreden als gebouwen of grote objecten het signaal verstoren. Test de GPS-prestaties, en als het signaal zwak is, stel de minimale opnamenauwkeurigheid in op meer dan 15 meter.
4. **GPS-widget inschakelen**. Gebruik de GPS-infowidget om satellietverbindingen te controleren. Als er geen satellietverbindingen zijn, kan uw apparaat de locatie niet bepalen en is het aantal satellieten 0. Meer details vindt u in de [GPS-widgetgids](../widgets/info-widgets.md#gps-info-android).
5. **Alleen GPS-signaal gebruiken**. Stel uw apparaat in om alleen GPS te gebruiken (schakel Wi-Fi of Bluetooth-gebaseerde locatie uit). Instructies zijn beschikbaar op [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **OsmAnd opnieuw installeren**. Als de bovenstaande stappen niet werken, probeer dan de OsmAnd-app opnieuw te installeren om slechte gegevens te wissen en GPS-problemen op te lossen. Exporteer al uw opgeslagen gegevens voordat u dit doet.
7. **Apparaat-RAM controleren**. Als het probleem aanhoudt, kan dit te wijten zijn aan onvoldoende geheugen, dus zorg ervoor dat uw apparaat voldoende RAM beschikbaar heeft.

### E-mailadres komt niet overeen bij aankoop van OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
of deze titel:
### Problemen met het synchroniseren van betaalrekening en app-e-mail in OsmAnd oplossen {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Als u een probleem tegenkomt waarbij het e-mailadres dat is gekoppeld aan uw OsmAnd Pro-aankoop niet overeenkomt met het e-mailadres van de OsmAnd-app, volgt u deze stappen om het probleem op te lossen:

1. **Controleer Google Play- en Betaalrekeningen**. Zorg ervoor dat het juiste e-mailadres is gekoppeld aan uw Google Play Store- en Betaalrekeningen. Het betalingsproces wordt afgehandeld door deze services, en de e-mailmismatch kan optreden doordat een oud e-mailadres nog steeds is gekoppeld aan uw betalingsprofiel.

2. **Controleer het e-mailadres van de OsmAnd-app**. Controleer het e-mailadres in uw OsmAnd-app opnieuw om er zeker van te zijn dat het overeenkomt met uw huidige Google Play-e-mailadres. Dit kan worden gedaan door de app te openen en naar de accountinstellingen te navigeren.

3. **Aankopen herstellen**. Controleer de beschikbaarheid en geschiktheid van uw aankoop. Ga hiervoor naar OsmAnd *Menu → Instellingen → Aankopen*. Als de weergegeven gegevens niet overeenkomen met uw verwachtingen, probeer dan [Aankopen herstellen](./purchases_payments.md#how-to-restore-purchases).

4. **Cache en gegevens van de app wissen**. Wis de cache en gegevens van de OsmAnd-app door naar de *Instellingen* van uw apparaat te gaan *→ Apps → OsmAnd → Opslag → Cache wissen en Gegevens wissen*. Dit zal de app vernieuwen en eventuele resterende problemen van het oude account verwijderen.

5. **OsmAnd opnieuw installeren**. Als het wissen van de cache het probleem niet oplost, probeer dan de app te verwijderen en opnieuw te installeren. Zorg ervoor dat u belangrijke gegevens (tracks, favorieten) back-upt door naar *Menu → Instellingen → Exporteren naar bestand* te gaan. Het opnieuw installeren van de app zorgt ervoor dat alle accountgegevens correct worden vernieuwd.

6. **Proxy uitschakelen**. Controleer de proxy-instellingen van de app en zorg ervoor dat de proxy is uitgeschakeld door naar *Menu → Instellingen → OsmAnd-instellingen → Proxy* te gaan. Een proxy of VPN kan de accountsynchronisatie verstoren.

7. **Opnieuw inloggen of web gebruiken voor accountbeheer**. Als u nog steeds problemen ondervindt, probeer dan uit te loggen en opnieuw in te loggen om de verbinding van de app met uw huidige account te vernieuwen. Als u problemen ondervindt bij het verwijderen van het oude account in de app, overweeg dan om uw account te beheren via de webversie van OsmAnd.