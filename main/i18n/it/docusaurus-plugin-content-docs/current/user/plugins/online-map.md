---
source-hash: 4cb7c9084c7789ea96d9afde0dedc4fd456fd2ec20405b46d983a36f733ea01e
sidebar_position: 8
title:  Mappe Online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Panoramica {#overview}

Le mappe online di OsmAnd sono un'ampia aggiunta al database di OpenStreetMap già presente nell'applicazione. Con questo plugin, è possibile aggiungere livelli alla mappa con informazioni provenienti da una fonte diversa, a partire dalla vista satellitare o dai percorsi escursionistici fino a dati molto specifici, come la posizione degli idranti. È anche possibile cambiare la fonte principale della mappa da mappe vettoriali a tasselli online.


## Parametri di Configurazione Richiesti {#required-setup-parameters}

La possibilità di utilizzare le mappe online è abilitata automaticamente nella versione iOS di OsmAnd. Per visualizzare le mappe online su Android, è necessario effettuare le seguenti impostazioni:

1. [Abilita](../plugins/index.md#enable--disable) il plugin **Mappe Online** nel *Menu principale → Plugin → Mappe Online*.
2. Effettua le impostazioni necessarie nella sezione [Sorgente mappa](../map/raster-maps.md#select-raster-maps) del menu Configura mappa.
3. Imposta la mappa *Sorgente mappa*, *Sovrapposizione* e *Sottoposizione*. Seleziona il tuo fornitore di mappe satellitari preferito.
4. Scarica la [mappa Online](#how-to-prepare-raster-maps) selezionata se necessario.


## Utilizzare le Mappe Raster sul Dispositivo {#use-raster-maps-on-device}

Puoi trovare informazioni dettagliate sulla visualizzazione e personalizzazione delle mappe raster nell'articolo [Mappe Raster](../map/raster-maps.md). Come usare:

1. [Seleziona](../map/raster-maps.md#select-raster-maps) la mappa raster come livello *Principale*, *Sottostante* o *Sovrapposto*.
    - [Modifica](../map/raster-maps.md#how-to-use-raster-maps) i parametri del livello (trasparenza).

2. [Prepara / copia](../map/raster-maps.md#preparecopy-raster-maps-to-device) le mappe raster sul dispositivo.
    - [Aggiungi una nuova sorgente di mappe raster online](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Aggiungi URL Magico](../map/raster-maps.md#magic-url-to-install-map-source) per installare la sorgente della mappa.

3. [Gestisci](../map/raster-maps.md#manage-raster-maps) le mappe raster.
    - [Scarica / aggiorna tasselli](../map/raster-maps.md#download--update-tiles).
    - [Modifica](../map/raster-maps.md#change-raster-map-parameters) i parametri della mappa raster.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configura sottostrato / sovrapposizione Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configura sottostrato / sovrapposizione iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Come Preparare le Mappe Raster {#how-to-prepare-raster-maps}

:::info
L'articolo principale per preparare le mappe [si può leggere qui](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Nonostante il plugin si chiami *Mappe Online*, è possibile utilizzare le mappe anche senza connessione a internet. È sufficiente salvare le parti delle mappe (spesso chiamate tasselli) per utilizzarle in seguito. Per farlo, scarica uno specifico [strumento per la creazione di mappe](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) sviluppato dal team di OsmAnd.

Seleziona l'area che devi scaricare, clicca su Preload area, quindi imposta i livelli di zoom più piccolo e più grande che vuoi visualizzare e scarica i tasselli.
Per la <b>versione Android</b> puoi copiarli nella cartella <i>osmand/tiles/*tipo_tassello*</i> del tuo telefono. Dovrai anche aprire <i>Configura mappa → Mappa sovrapposta</i> e scegliere i tasselli online di OsmAnd.

Per la <b>versione iOS</b> puoi scegliere il file SQ Lite nel tuo telefono (qualsiasi messenger o dropbox), OsmAnd suggerirà di aggiungerlo. Dovrai anche aprire <i>Mappa → Sovrapposizione / Sottostrato o Tipo di mappa</i> e scegliere la nuova sorgente della mappa.

Come aggiungere un file SQ Lite nelle versioni Android e iOS di OsmAnd si può leggere nel <a href="https://anygis.ru/Web/Html/Osmand_en"><b>progetto Anygis</b></a>.


I tasselli online possono essere utili quando hai bisogno solo di una piccola sezione della mappa o di un tipo specifico di essa da utilizzare in un'area limitata, ma non vuoi scaricare l'intera regione. Possono tornare utili in infinite situazioni.

![Mappe Online](@site/static/img/plugins/online-maps/map_creator.jpg)

![Mappe Online](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Articoli Correlati {#related-articles}

- [Interagire con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali (Stili Mappa)](../../user/map/vector-maps.md)

### Problemi Comuni e Soluzioni {#common-issues-and-solutions}

1. Le Mappe Online non appaiono nel menu Sorgente Mappa:  
  
    - Verifica che il plugin Mappe Online sia abilitato: *Menu → Plugin → Mappe Online*.  
    - Assicurati di avere una connessione internet attiva per accedere alle immagini satellitari.  
    - Controlla se la Mappa Online selezionata è stata scaricata o richiede [impostazioni aggiuntive](../map/raster-maps.md#select-raster-maps).