---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Come ispezionare un file binario obf
versions: '*'
---

**_Questo articolo necessita di revisione_**

Se si desidera ispezionare il contenuto di un file obf, è necessario scaricare [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Lì si trova un'applicazione console Inspector (.sh, .bat). Questa applicazione console ha parametri opzionali [-vmap, -vaddress, -vtransport] e un parametro obbligatorio (file obf di input). Specificando i parametri opzionali è possibile tracciare tutte le informazioni dal file obf (attenzione: potrebbe essere enorme!).

Esempio e procedura dettagliata per gli utenti Windows:
- avere installato Java Runtime Environment
- scaricare o copiare qualsiasi mappa offline di Osmand dal dispositivo al PC, posizionare il file obf idealmente nella cartella con tutti i file di Mapcreator decompressi
- aprire la riga di comando di Windows (ad esempio, premendo il tasto Windows e "r", quindi digitare cmd e premere invio)
- andare alla cartella in cui è stato decompresso Osmand-Mapcreator con il comando cd e il nome della cartella
- digitare `dir` per vedere se si è nella cartella giusta con il file inspector.bat
- digitare `inspector -h` per vedere un testo di aiuto
- digitare `inspector -vaddress nome_della_tua_mappa.obf \>output.csv`
- se si riceve un errore della console Java relativo a memoria insufficiente o simile, modificare il file inspector.bat aumentando gradualmente il numero al parametro -Xmx512M (o simile) a un valore superiore
- provare a caricare quel file di testo CSV (eventualmente molto grande) in qualsiasi editor o programma in grado di caricare file molto grandi, come Notepad++ ... o provare un'importazione in qualsiasi programma di foglio di calcolo come Excel o LibreOffice calc (scegliere TAB come separatore di campo)
- utilizzare qualsiasi funzione di ricerca per trovare nomi di luoghi o nomi di strade