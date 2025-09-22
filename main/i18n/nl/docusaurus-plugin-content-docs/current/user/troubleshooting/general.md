---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  Algemeen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Algemene problemen met betrekking tot de verschillende functies van OsmAnd.

## Batterijverbruik {#battery-consumption}

### OsmAnd lijkt te veel batterijvermogen te verbruiken {#osmand-seems-to-use-up-too-much-battery-power}

Er zijn gebruikersrapporten geweest over overmatig batterijverbruik door OsmAnd, met gevallen waarin OsmAnd verantwoordelijk was voor tot 90% van het batterijgebruik. We hebben echter veel tests uitgevoerd en konden dergelijke resultaten niet reproduceren.

Onder normale omstandigheden verbruikt OsmAnd alleen stroom wanneer dat nodig is voor actieve functies zoals live navigatie of het opnemen van een track. Wanneer deze diensten actief zijn, verschijnen ze in het Android-notificatiegebied. Als er geen dergelijke melding zichtbaar is, verbruikt OsmAnd geen stroom op de achtergrond.

Verschillende factoren beïnvloeden het batterijverbruik: de leeftijd van het apparaat, het aantal oplaadcycli, de batterijcapaciteit, de temperatuur en meer. Hieronder staan de typische batterijverbruikscijfers, gebaseerd op tests uitgevoerd op een apparaat uit het middensegment:

| Apparaatfunctie | Batterijverbruik per uur |
| :--- | :--- |
| Typisch apparaat in slaapstand met alleen standaard apps actief | 0.5 % |
| Scherm aan (normaal gesproken) | 6 % |
| GPS actief (normaal gesproken) | 5 % |
| OsmAnd draait op de achtergrond voor trackopname | 0.5 % |
| OsmAnd draait geen service op de achtergrond | 0 % |

#### Batterijverbruik van OsmAnd-functies {#osmand-function-battery-consumption}

| OsmAnd-functie | Batterijverbruik per uur |
| :--- | :--- |
| Trackopname met scherm uit | 6 % |
| Navigatie met scherm aan | 12 % |

Het totale stroomverbruik zou het resultaat moeten zijn van het optellen van deze componenten, afhankelijk van hoe u OsmAnd gebruikt. Meld het alstublieft als u significante afwijkingen van deze typische waarden ziet.


### Optimaliseren van batterijverbruik {#optimizing-battery-consumption}

Bij het gebruik van OsmAnd kunnen verschillende functies het batterijverbruik beïnvloeden, vooral tijdens activiteiten zoals navigatie of het opnemen van een track. Hier zijn enkele tips om het batterijgebruik effectief te beheren:

- **Schermbediening tijdens navigatie** (*Android*). Om stroom te besparen, kunt u OsmAnd zo configureren dat het scherm uit blijft tijdens de navigatie, tenzij er een afslag of een belangrijke gebeurtenis plaatsvindt. Dit is met name handig tijdens spraaknavigatie. Raadpleeg voor meer details *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Energiebesparende navigatie-instellingen**. U kunt het batterijverbruik verminderen door de frequentie van het hertekenen van de kaart te minimaliseren en de GPS-nauwkeurigheid te beperken. Om deze instellingen aan te passen, gaat u naar *Navigatie → Instellingen → Route Navigatie*. Raadpleeg voor meer informatie [energie besparen tijdens navigatie](../navigation/setup/route-navigation.md#power-saving-tips).

- **Beheren van kaartlagen en details**. Deactiveer onnodige kaartfuncties zoals 3D-reliëf, contourlijnen of schaduwreliëf. U kunt ook het aantal weergegeven objecten (POI-labels, grenzen, huisnummers, enz.) verminderen via het menu *Kaart configureren*. Het uitschakelen van deze lagen helpt de frequentie van het hertekenen van de kaart te verminderen, wat het stroomverbruik verlaagt.

- **Automatisch zoomen uitschakelen**. Automatisch zoomen tijdens navigatie kan leiden tot frequent hertekenen van de kaart, wat het batterijgebruik verhoogt. Het uitschakelen van deze functie kan helpen het stroomverbruik te verminderen. Navigeer naar *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>* om automatisch zoomen uit te schakelen. Bezoek voor meer details [Kaart tijdens navigatie](../navigation/guidance/map-during-navigation.md).

- **Optimaliseren van trackopname-instellingen**. Zorg ervoor dat u de GPS-nauwkeurigheid en het schermgebruik tijdens het opnemen van een track aanpast om de batterij te sparen. Bezoek de sectie [Problemen met trackopname oplossen](../troubleshooting/track-recording-issues.md) voor meer begeleiding.


## Privacy {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Hoe zoekgeschiedenis te verwijderen {#how-to-delete-search-history}

Om de zoekgeschiedenis in OsmAnd te verwijderen:

1. Open het *Zoek*-menu.
2. Tik lang op een zoekresultaat.
3. Selecteer de resultaten die u wilt verwijderen, of gebruik de optie *Alles selecteren* in de linkerbovenhoek om alle resultaten te verwijderen.
4. Tik op het *Prullenbak*-icoon in de rechterbovenhoek om de verwijdering te bevestigen.

Voor meer gedetailleerde instructies over de zoekfunctionaliteit kunt u deze [gids](../search/search-history.md) raadplegen.


## Overig {#other}

### Probleem met de GPS-verbinding (Android) {#problem-with-the-gps-connection-android}

OsmAnd is afhankelijk van locatiegegevens die door uw Android-apparaat worden verstrekt via de Android API.

Volg deze stappen om problemen met de GPS-verbinding op te lossen:

1. **Wijzig locatiebron**. Probeer verschillende opties zoals Google Play Services of Android API in *OsmAnd Instellingen → Locatiebron*.
2. **Update Google Service API**. Zorg ervoor dat u de nieuwste versie hebt van [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Controleer Android-locatie-instellingen**. Ga naar de Systeeminstellingen van Android en zorg ervoor dat Locatietoegang is ingeschakeld en ingesteld op Hoge nauwkeurigheid. U kunt ook proberen de cache te wissen en uw apparaat opnieuw op te starten. GPS-problemen kunnen optreden als gebouwen of grote objecten het signaal verstoren. Test de GPS-prestaties en stel, als het signaal zwak is, de minimale opnamenauwkeurigheid in op meer dan 15 meter.
4. **Schakel GPS-widget in**. Gebruik de GPS-info-widget om satellietverbindingen te controleren. Als er geen satellietverbindingen zijn, zal uw apparaat de locatie niet bepalen en zal het aantal satellieten 0 zijn. Meer details vindt u in de [GPS-widgetgids](../widgets/info-widgets.md#gps-info).
5. **Gebruik alleen GPS-signaal**. Stel uw apparaat in om alleen GPS te gebruiken (schakel locatiebepaling op basis van Wi-Fi of Bluetooth uit). Instructies zijn beschikbaar op [Google Support](https://support.google.com/android/answer/3467281?hl=en).
6. **Installeer OsmAnd opnieuw**. Als de bovenstaande stappen niet werken, probeer dan de OsmAnd-app opnieuw te installeren om slechte gegevens te wissen en GPS-problemen op te lossen. Exporteer al uw opgeslagen gegevens voordat u dit doet.
7. **Controleer het RAM-geheugen van het apparaat**. Als het probleem aanhoudt, kan dit te wijten zijn aan onvoldoende geheugen, dus zorg ervoor dat uw apparaat voldoende RAM beschikbaar heeft.


### E-mail-mismatchprobleem tijdens OsmAnd Pro-aankoop {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Als u een probleem tegenkomt waarbij de e-mail die is gekoppeld aan uw OsmAnd Pro-aankoop niet overeenkomt met de e-mail van de OsmAnd-app, volg dan deze stappen om het probleem op te lossen:

1. **Controleer Google Play- en Pay-accounts**. Zorg ervoor dat de juiste e-mail is gekoppeld aan uw Google Play Store- en Pay-accounts. Het betalingsproces wordt afgehandeld door deze diensten, en de e-mail-mismatch kan optreden doordat een oude e-mail nog steeds is gekoppeld aan uw betalingsprofiel.

2. **Verifieer de e-mail van de OsmAnd-app**. Controleer het e-mailadres in uw OsmAnd-app opnieuw om er zeker van te zijn dat het overeenkomt met uw huidige Google Play-e-mail. Dit kan worden gedaan door de app te openen en naar de accountinstellingen te navigeren.

3. **Aankopen herstellen**. Controleer de beschikbaarheid en juistheid van uw aankoop. Ga hiervoor naar OsmAnd *Menu → Instellingen → Aankopen*. Als de weergegeven gegevens niet overeenkomen met uw verwachtingen, probeer dan [Aankopen herstellen](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **App-cache en -gegevens wissen**. Wis de cache en gegevens van de OsmAnd-app door naar de *Instellingen → Apps → OsmAnd → Opslag → Cache wissen en Gegevens wissen* van uw apparaat te gaan. Dit zal de app vernieuwen en eventuele resterende problemen van het oude account verwijderen.

5. **Installeer OsmAnd opnieuw**. Als het wissen van de cache het probleem niet oplost, probeer dan de app te verwijderen en opnieuw te installeren. Zorg ervoor dat u belangrijke gegevens (tracks, favorieten) back-upt voordat u dit doet door naar *Menu → Instellingen → Exporteren naar bestand* te gaan. Het opnieuw installeren van de app zorgt ervoor dat alle accountgegevens correct worden vernieuwd.

6. **Proxy uitschakelen**. Controleer de proxy-instellingen van de app en zorg ervoor dat de proxy is uitgeschakeld door naar *Menu → Instellingen → OsmAnd-instellingen → Proxy* te gaan. Een proxy of VPN kan de accountsynchronisatie verstoren.

7. **Opnieuw inloggen of web gebruiken voor accountbeheer**. Als u nog steeds problemen ondervindt, probeer dan uit te loggen en weer in te loggen om de verbinding van de app met uw huidige account te vernieuwen. Als u problemen ondervindt bij het verwijderen van het oude account in de app, overweeg dan uw account te beheren via de webversie van OsmAnd.