---
source-hash: 72c443553f19a954e1e225c0a8053d174db652de6cd02e9719c8c87174e281ad
sidebar_position: 6
title: Ricerca Coordinate
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

La **ricerca coordinate di OsmAnd** ti consente di trovare una posizione specifica tramite latitudine e longitudine. Questo tipo di ricerca aiuta a identificare una posizione con precisione. È particolarmente utile per le aree che non hanno indirizzi precisi o per attività geografiche specifiche come la creazione di geo-recinzioni o il posizionamento preciso in spazi aperti.

OsmAnd offre diversi modi per accedere allo *strumento di ricerca → [scheda Ricerca indirizzo](../search/search-address.md)*, dove si trova la **ricerca coordinate**.

- Il [pulsante Cerca](../widgets/map-buttons.md#search) nella schermata dell'applicazione della mappa.
- Vai al *Menu* principale di Android *→ Cerca → scheda Indirizzo → Ricerca coordinate*.
- Quando ti prepari per iniziare un percorso, tocca *Navigazione → Imposta destinazione → Campo di ricerca → scheda Indirizzo → Ricerca coordinate*.  


## Come usare {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Coordinate iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Le coordinate possono essere inserite in qualsiasi formato disponibile, ma la posizione trovata viene visualizzata nel formato specificato in *Configura profilo → Impostazioni generali → Unità e formati*.

- Per utilizzare la ricerca per coordinate, puoi digitarle singolarmente in ogni campo corrispondente, oppure incollare le coordinate precedentemente copiate nel campo di ricerca o inserirle al suo interno. L'applicazione ti chiederà di selezionare una posizione adatta.
- La ricerca per coordinate converte automaticamente un formato di coordinate in un altro quando il formato specificato viene modificato nel campo con il loro elenco.
- Tocca la posizione suggerita e si aprirà il [menu contestuale della mappa](../map/map-context-menu.md#select-any-point-long-tap).
- Maggiori informazioni possono essere trovate qui [Coordinate geografiche](https://en.wikipedia.org/wiki/Geographic_coordinate_system).


**Ambito della funzione di ricerca per coordinate**:

- *Posizione precisa*. La ricerca per coordinate fornisce una posizione precisa. Puoi inserire coordinate precise ottenute, ad esempio, da altre fonti come una mappa, un dispositivo GPS o servizi online.
- *Luoghi senza indirizzo*. Le coordinate sono particolarmente utili quando si tratta di luoghi che non hanno un indirizzo esatto, o quando l'indirizzo è sconosciuto. Ad esempio, potrebbe essere un'area remota, un punto sul mare o una cima di montagna. Inserendo le coordinate, puoi trovare e navigare verso tali posizioni senza dover conoscere l'indirizzo.
- *Condivisione della posizione*. La ricerca per coordinate fornisce un modo conveniente per inserire informazioni. Puoi inserire le coordinate manualmente o copiarle da altre fonti. Questo può essere utile quando si condividono posizioni con altri o si utilizzano coordinate precedentemente ottenute.


## Formato delle coordinate {#coordinate-format}

Esistono diversi modi per inserire le coordinate per la ricerca. Per utilizzare ciascuno di essi, è molto importante seguire le regole di input, altrimenti l'applicazione non sarà in grado di trovare la posizione.

1. **<Translate android="true" ids="navigate_point_format_D"/>**  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_degrees_andr.png)  

    **Coordinate decimali (gradi)**. In questo formato, le coordinate di latitudine e longitudine sono scritte in formato decimale, ad esempio, 52.37022° di latitudine e 4.89517° di longitudine per Amsterdam. Questo metodo di input è facile da usare ed è il più comune. Puoi leggere di più sul formato delle coordinate decimali [qui](https://en.wikipedia.org/wiki/Decimal_degrees).  

    - *Regole di input*. Le coordinate di latitudine e longitudine sono scritte in formato decimale, dove la latitudine varia da -90 a 90 e la longitudine varia da -180 a 180.
    - *Più comunemente usato*. Le coordinate decimali sono ampiamente utilizzate nelle applicazioni di navigazione, nei dispositivi GPS, nelle mappe web e in altri servizi di geolocalizzazione.  

2. **<Translate android="true" ids="navigate_point_format_DM"/>**  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_DM_andr.png)  

    **Gradi e Minuti (DM)**. In questo formato, le coordinate di latitudine e longitudine vengono registrate utilizzando gradi e minuti. Ad esempio, 37:46.29 di latitudine e -122:25.10 di longitudine per San Francisco. Questo formato potrebbe essere meno preciso e potrebbe richiedere più tempo per l'inserimento.
    - *Regole di input*. Le coordinate di latitudine e longitudine sono scritte in un formato che utilizza gradi (:) e minuti (:).
    - *Più comunemente usato*. Il formato DM si trova spesso nella navigazione marina, nell'aviazione, nell'astronomia e nei sistemi di mappatura topografica.

3. **<Translate android="true" ids="navigate_point_format_DMS"/>**  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_DMS_andr.png)  

    **Gradi, Minuti e Secondi (DMS)**. Il formato delle coordinate DMS registra le coordinate geografiche dove i valori sono dati in gradi, minuti e secondi. I gradi (DDD) possono assumere valori da 0 a 180 per la longitudine e da 0 a 90 per la latitudine. I valori positivi indicano longitudine est e latitudine nord, e i valori negativi indicano longitudine ovest e latitudine sud. I minuti (MM) possono assumere valori da 0 a 59. I secondi (SS.S) rappresentano la frazione decimale di un secondo e possono anche variare da 0 a 59.9.
    - *Regole di input*. Le coordinate di latitudine e longitudine sono scritte in un formato che utilizza gradi (:), minuti (:) e secondi (.).
    - *Più comunemente usato*. Il formato DMS è ampiamente utilizzato in geodesia, applicazioni di navigazione, cartografia, astronomia e altri campi in cui è richiesta un'espressione più dettagliata delle coordinate di posizione.

4. **<Translate android="true" ids="navigate_point_format_utm"/>**  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_UTM_andr.png)  

    **UTM (Universal Transversal Mercator System)**. In questo formato, le coordinate sono specificate utilizzando la zona UTM, le direzioni Est e Nord. Ad esempio, per Amsterdam, le coordinate potrebbero essere approssimativamente le seguenti: zona 31, direzione Est 581000, direzione Nord 5809000. L'inserimento delle coordinate in formato UTM potrebbe richiedere una certa familiarità con il sistema ed essere più complesso di altri formati, ma fornisce una buona precisione e soddisfa gli standard globali di geolocalizzazione. Puoi leggere di più sul formato UTM [qui](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
    - *Regole di input*. Le coordinate sono registrate in un formato che utilizza la zona UTM e gli offset Est e Nord.
    - *Più comunemente usato*. Il formato UTM è spesso utilizzato nel rilevamento, nella mappatura e nei sistemi di informazione geografica per la misurazione e la navigazione.

5. **<Translate android="true" ids="navigate_point_format_olc"/>** ((OLC) - 9F2X4WFJ+7W (Open Location Code rappresenta un'area di 9m x 14m))  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_OLC_andr.png)  

    **Open Location Code (OLC)**, noto anche come **Plus Code**, è un sistema di codifica della posizione globale. È una combinazione di lettere e numeri per indicare la latitudine e la longitudine di qualsiasi posizione sul pianeta. Esempio di un codice OLC per Amsterdam: 9F3WCVWG+FP. In questo esempio, "9F3WCVWG" indica una griglia grossolana, e "+FP" specifica una posizione all'interno di quell'area. Leggi di più [qui](https://en.wikipedia.org/wiki/Open_Location_Code).
    - *Regole di input*.  
        - Il codice OLC è composto da 4 a 14 caratteri, che possono essere lettere da "C" a "Z" (eccetto "I" e "O") e numeri da "2" a "9".
        - Il codice inizia con un prefisso globale che indica un continente o un'area.
        - Seguono gruppi di caratteri separati da punti. Ogni gruppo rappresenta un'area più ristretta.
        - Per chiarire la posizione, lettere e cifre sono integrate da altri caratteri nel codice OLC.  
    - *Più comunemente usato*. L'OLC è spesso utilizzato in aree in cui gli indirizzi precisi non sono disponibili o sono difficili da determinare, come aree remote, deserti o oceani. È anche ampiamente utilizzato in applicazioni e servizi relativi alla geolocalizzazione, alla consegna, ai servizi di emergenza e ad altre aree in cui è richiesta una posizione precisa senza l'uso di indirizzi tradizionali.  

6. **<Translate android="true" ids="navigate_point_mgrs"/>**  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_MGRS_andr.png)  

    **MGRS (Military Grid Reference System)**. Questo è un sistema di coordinate spesso utilizzato nelle applicazioni militari. Si basa sul sistema UTM ed è integrato con una griglia aggiuntiva di quadrati. Un esempio di coordinate in formato MGRS per una posizione in Australia può essere il seguente: 55HBE1234567890. In questo esempio, "55H" rappresenta la zona MGRS e "BE" rappresenta il quadrato in cui si trova la posizione. "123456" rappresenta l'offset verso est e "7890" rappresenta l'offset verso nord all'interno di quel quadrato. Le MGRS sono ampiamente utilizzate in aree che richiedono alta precisione e georeferenziazione. Sono particolarmente utili in ambienti in cui gli indirizzi potrebbero non essere chiari o disponibili, come operazioni militari o spedizioni in aree remote. Puoi leggere di più sul formato MGRS [qui](https://en.wikipedia.org/wiki/Military_Grid_Reference_System).  
    - *Regole di input*. Le coordinate sono composte da una zona MGRS, un quadrato e altre due cifre che indicano gli offset est e nord.
    - *Più comunemente usato*. Il formato MGRS è ampiamente utilizzato nella navigazione e nelle comunicazioni militari e può essere utile anche per gli appassionati di attività all'aperto e gli escursionisti.

7. **Swiss Grid** (CH1903) e **Swiss Grid** (CH1903+)  

    ![Ricerca Coordinate Android](@site/static/img/search/coordinates_search_Swiss_andr.png)  

    **Sistema di coordinate svizzero**. Swiss Grid (CH1903) e Swiss Grid (CH1903+) sono sistemi di coordinate ampiamente utilizzati in Svizzera per il posizionamento. Entrambi i formati si basano sul sistema CH1903, introdotto nel 1903 e basato sulla proiezione della griglia internazionale svizzera. Esempio di coordinate in formato Swiss Grid (CH1903) — Est: 600000; Nord: 200000. In formato Swiss Grid (CH1903+) — Est: 600300; Nord: 200400. Puoi leggere di più sul sistema di coordinate geografiche Swiss Grid [qui](https://en.wikipedia.org/wiki/Swiss_coordinate_system).  
    - *Regole di input*.  
        - Le coordinate in formato CH1903 sono composte da due componenti: Est e Nord.
        - L'Est è in metri da un punto chiamato Asse di Lucerna (zero Est).
        - Il Nord è dato in metri dall'equatore.
        - Il formato CH1903+ utilizza le stesse regole di input di CH1903, ma con valori più precisi.
        - CH1903+ include correzioni per tenere conto degli spostamenti delle coordinate causati dai cambiamenti nei movimenti tettonici in Svizzera.
    - *Più comunemente usato*. I formati Swiss Grid (CH1903) e Swiss Grid (CH1903+) sono utilizzati in Svizzera per misurazioni geodetiche, cartografia, sistemi di informazione geografica e costruzione e ingegneria. Questi formati forniscono un sistema di coordinate locale specifico per la Svizzera.


> Per ogni profilo separatamente puoi impostare un formato di coordinate diverso. Per farlo, vai su *Impostazioni generali → [Formato coordinate](../personal/profiles.md#units--formats)*.


<!--

## Troubleshooting {#troubleshooting}

https://github.com/osmandapp/OsmAnd/issues/14081  

https://github.com/osmandapp/OsmAnd/issues/16114  

https://github.com/osmandapp/OsmAnd/issues/14081  

-->


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cerca indirizzo](./search-address.md)
- [Cronologia ricerche](./search-history.md)
- [Cerca POI](./search-poi.md)


> *Ultimo aggiornamento: Luglio 2024*