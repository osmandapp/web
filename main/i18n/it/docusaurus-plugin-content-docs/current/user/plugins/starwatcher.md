---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
sidebar_position: 14
title:  Star Watcher
unlistead: true
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

<InfoAndroidOnly/>

:::info
**Star Watcher** è attualmente in **beta**.
:::

## Panoramica {#overview}

Il plugin Star Watcher mostra la sovrapposizione del cielo stellato sulla mappa con stelle, costellazioni, Sole, Luna e pianeti. Le posizione e i percorsi del Sole, Luna, pianeti e stelle principali sono mostrati sulla mappa.


## Parametri di Configurazione Richiesti {#required-setup-parameters}
  
Le seguenti impostazioni sono richieste per visualizzare la sovrapposizione Star Watcher:

1. Abilita il plugin [**Star Watcher**](../plugins/index.md#enable--disable) dalla sezione *Plugin* del *Menu Principale*
2. Usa **Menu → Mappa stellare** per aprire lo schermo dedicato con cielo stellato, impostazioni e controlli del tempo
3. Seleziona **data e ora** usando le slider o i pulsanti sullo schermo Mappa stellare
4. Regola **visibilità e trasparenza** nelle impostazioni del menu "Mappa stellare".

Il plugin funziona con entrambi i motori di rendering della mappa ma performa al meglio in modalità OpenGL.

## Schermo Mappa Stellare

**Vai a:** *Plugin abilitato → Menu → Mappa stellare* 

![Schermo mappa stellare](@site/static/img/plugins/starwatcher/view.png)

Lo schermo dedicato **Mappa stellare** mostra una cupola celeste interattiva con stelle, costellazioni, percorsi di pianeti, Sole e Luna. In basso c'è una **barra degli strumenti** con slider per data/ora, pulsanti giorno e interruttori rapidi per layer come linea dell'orizzonte o etichette.


- Lo schermo rende l'intero emisfero celeste sopra la tua posizione, allineato con la direzione della bussola
- Tocca oggetti celesti per dettagli come magnitudine, tempi di alba/tramonto o percorsi



## Informazioni Oggetto Celeste

Tocca qualsiasi **stella, pianeta, costellazione o Sole/Luna** sullo **schermo Mappa stellare** o **sovrapposizione mappa** per visualizzare informazioni dettagliate.

![Popup info oggetto](@site/static/img/plugins/starwatcher/object-info.png)

**Dati visualizzati:**
- **Azimut**: Direzione dal Nord (0°-360°) dove l'oggetto appare nel cielo
- **Altitudine**: Altezza sopra l'orizzonte (0° all'orizzonte, 90° allo zenit)
- **Magnitudine**: Scala di luminosità (-26 per il Sole a +6 per stelle deboli; più basso = più luminoso)
- **Tempi di alba/tramonto**: Quando l'oggetto sorge sopra/scende sotto l'orizzonte
- **Distanza** (pianeti): Distanza media dalla Terra in UA/km

**Integrazione Wikipedia**: Tocca **"Wikipedia"** nel popup info per aprire la pagina dell'oggetto nel tuo browser (es. Sirius, Orione, Venere). Funziona offline per dati cachati, online per articoli completi.

**Pressione prolungata** sugli oggetti celesti per **fissarli** come marker sulla mappa con aggiornamenti posizione live, o **condividere** coordinate per osservazione stellare di gruppo.

Questa funzione aiuta a identificare oggetti nel cielo reale, pianificare osservazioni e imparare fatti di astronomia direttamente da OsmAnd.


## Ricerca Stelle AR (Modalità Fotocamera)

**Vai a:** *Plugin abilitato → Menu → Mappa stellare → Pulsante fotocamera* 

Il layer **Star Watcher** lavora con la **fotocamera del dispositivo** per abilitare **osservazione stelle in Realtà Aumentata (AR)**. Punta la fotocamera del telefono al cielo notturno reale e vedi stelle, pianeti, costellazioni, Sole/Luna sovrapposti in tempo reale.


**Come funziona la Ricerca Stelle AR:**
- Vista **fotocamera live** mostra cielo reale con sovrapposizioni astronomiche trasparenti allineate a orizzonte/bussola
- **Muovi la fotocamera** per scansionare il cielo — oggetti evidenziati quando appaiono nel tuo campo visivo
- **Tocca oggetti evidenziati** per vedere azimut, altitudine, magnitudine, tempi alba/tramonto e link Wikipedia
- **Calibrazione bussola** richiesta per allineamento accurato (agita il telefono in figura-8 se necessario)

**Perfetto per:**
- Identificare stelle/pianeti deboli invisibili a occhio nudo
- Localizzare costellazioni muovendo il telefono attraverso il cielo
- Navigazione cielo in tempo reale durante escursioni o campeggio


## Impostazioni Star Watcher

*Menu Principale → Plugin → Mappa stellare → Pulsante ⚙️*

Scegli layer e oggetti visibili

### Layer Stelle

Tutti i dati astronomici appaiono come sovrapposizioni mappa, visibili a scale di zoom 5-15. I layer proiettano la sfera celeste sulla mappa piatta.

| Strato | Descrizione |
|--------|-------------|
| Stelle | Stelle luminose (fino a magnitudine 4-6) con etichette e linee costellazioni |
| Costellazioni | Collega stelle in pattern familiari come Orione o Orsa Maggiore |
| Pianeti | Posizioni e percorsi giornalieri per Mercurio-Venere-Marte-Giove-Saturno (icone colorate) |
| Sole & Luna | Archi che mostrano tempi alba/tramonto e fase di illuminazione |
| Orizzonte | Linea che separa cielo visibile dal suolo, con direzioni cardinali |


## Articoli Correlati {#related-articles}

- [Interagire con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni Globali](../../user/personal/global-settings.md)
- [Mappe Vettoriali (Stili Mappa)](../../user/map/vector-maps.md)