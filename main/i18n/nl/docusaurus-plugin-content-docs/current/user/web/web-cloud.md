---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: OsmAnd Cloud op de Website
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


<InfoIncompleteArticle/>

## Overzicht {#overview}

Het [OsmAnd Kaartportaal](https://osmand.net/map) is een browsergebaseerde dienst van OsmAnd, waarmee gebruikers kaarten kunnen verkennen, hun gegevens kunnen beheren, reizen kunnen plannen en creëren, of simpelweg de kaart kunnen bekijken.



## Hoe te beginnen {#how-to-start}

Om toegang te krijgen tot de OsmAnd Web-functies, heeft u een account nodig:

- Als u al een [**OsmAnd Pro**](../personal/osmand-cloud.md#login) abonnement heeft of een gratis [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) account wilt aanmaken, volg dan deze stappen:

  1. Ga naar het [**OsmAnd Kaartportaal**](https://osmand.net/map).
  2. Open het **Account** menu.
     - **Inloggen**: Voer het e-mailadres in dat u gebruikt voor uw Pro- of Start-abonnement.
     - **Account aanmaken**: Gebruik deze optie om u te registreren voor een gratis OsmAnd Start-account.

![Web Account](@site/static/img/web/web_account.png)

## Account beheren {#managing-account}

Om uw account te beheren, gaat u naar:
**Algemeen Menu → Account**

Na registratie op het web kunt u:

- Accountinformatie bekijken
- Cloudback-ups downloaden
- Uitloggen van uw account
- Uw account verwijderen
- Uw e-mailadres wijzigen
- Uw betalingen en aankopen bekijken

![Web Account](@site/static/img/web/web_account_2.png)

### Mijn gegevens {#my-data}

U kunt back-ups downloaden die zijn gemaakt en gesynchroniseerd vanaf uw mobiele apparaat via **OsmAnd Cloud**.

- Ga naar **Algemeen Menu → Account → Mijn gegevens (OsmAnd Cloud) → Alles downloaden**.

Dit gedeelte toont:

- Het aantal bestanden dat in uw cloud is opgeslagen
- Totaal gebruikte opslagvolume
- Beschikbare cloudopslagruimte

> 💡 Alleen back-ups die zijn gemaakt op apparaten waarop **OsmAnd Cloud** is ingeschakeld, verschijnen hier.

### Betalingen en aankopen {#payments-and-purchases}

- Ga naar **Algemeen Menu → Account → Betalingen en aankopen**.

In dit gedeelte kunt u alle aankopen en abonnementen bekijken die aan uw account zijn gekoppeld.

Voor meer details over het gebruik van uw aankopen op verschillende platforms, lees over [cross-platform toegang](../purchases/cross.md).

### E-mailadres wijzigen {#change-email-address}

Om uw e-mailadres bij te werken:

1. Ga naar **Algemeen Menu → Account → E-mail → ⋮ → E-mail wijzigen**.
2. Voer uw nieuwe e-mailadres in en bevestig.

> 🔒 Er wordt een verificatie-e-mail naar het nieuwe adres gestuurd voordat de wijziging definitief is.

### Uitloggen en account verwijderen {#log-out-and-delete}

Om uit te loggen van uw OsmAnd Web-account:

- Open **Algemeen Menu → Account**.
- Klik op de knop **Uitloggen** om uw huidige sessie te beëindigen.

Om uw account permanent te verwijderen:

- Scroll naar de onderkant van het **Account** menu.
- Klik op de knop **Account verwijderen**.
- Bevestig de verwijdering. Deze actie is onomkeerbaar.


## OsmAnd Pro en OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is een [cross-platform](../troubleshooting/setup.md#cross-platform) betaald abonnement.
- **OsmAnd Start** is een [gratis OsmAnd Cloud-registratie](https://osmand.net/blog/start).

De cross-platform mogelijkheid stelt u in staat om OsmAnd Pro op alle platforms te gebruiken *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Hiervoor moet u:

1. Abonneren op **OsmAnd Pro**. Lees hier meer over hoe u dit kunt doen voor [Android](../purchases/android.md#how-to-buy), en voor [iOS](../purchases/ios.md#how-to-buy).
2. Hoe u een **OsmAnd Start** account aanmaakt, leest u [hier](https://osmand.net/blog/start#how-to-create-an-account).
3. Registreer uw [Pro- of Start-account](../troubleshooting/setup.md#cross-platform) op de OsmAnd-server in de OsmAnd-app.
4. Het geregistreerde e-mailadres is uw login om OsmAnd Pro op het webplatform te activeren. De eerste keer moet u een wachtwoord kiezen voor toekomstige toegang tot het webportaal (volg de instructies op het webportaal).


<!--

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)

There is also a button to *logout* of the account.

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->



> *Laatst bijgewerkt: juli 2024*