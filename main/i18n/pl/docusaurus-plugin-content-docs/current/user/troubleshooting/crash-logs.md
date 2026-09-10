---
source-hash: 39d418f4e27287d045bdf80db534c375abb992ea40f27b907543333249efada9
sidebar_position: 5
title:  Dzienniki awarii
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Przegląd {#overview}

Dzienniki awarii są cennymi narzędziami diagnostycznymi, które pomagają programistom identyfikować i naprawiać problemy oraz błędy powodujące awarię aplikacji lub nieoczekiwane zachowanie. Udostępnianie dzienników z urządzenia z systemem Android zespołowi programistów OsmAnd jest możliwe. Obecnie użytkownicy iOS mają tylko jeden typ opcji dziennika awarii do wysłania.


## Dzienniki awarii i dzienniki aplikacji {#crash-and-app-logs}

OsmAnd umożliwia wysyłanie dwóch typów danych do programistów:

- **Dzienniki awarii**. Generowane, gdy aplikacja OsmAnd napotka krytyczny błąd lub wyjątek powodujący jej awarię. Dzienniki te dostarczają szczegółowych informacji o stanie aplikacji podczas awarii, w tym dane kompilacji, ślady stosu, komunikaty o błędach i inne istotne szczegóły.
- **Dzienniki bieżącej sesji/aplikacji**. Zapis strumienia dzienników OsmAnd przechwytujący różne zdarzenia i komunikaty. Dzienniki te pomagają programistom monitorować zachowanie aplikacji, śledzić przepływ wykonania, śledzić określone działania i badać problemy niezwiązane z awariami. Dzienniki Logcat zazwyczaj zawierają zapisy aktywności od ostatniego uruchomienia aplikacji.

:::caution Twoje prywatne informacje
Zachowaj ostrożność podczas wysyłania dzienników aplikacji, ponieważ mogą one zawierać prywatne informacje, takie jak lokalizacja urządzenia, zapytania wyszukiwania, wyniki budowania tras i dane nawigacyjne.
:::


### Wysyłanie dzienników z aplikacji OsmAnd {#send-logs-from-osmand-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wyślij dzienniki awarii z Androida 1](@site/static/img/troubleshooting/send_logs_andr_5.webp)  ![Wyślij dzienniki awarii z Androida 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wyślij dzienniki awarii z iOS](@site/static/img/troubleshooting/send_logs_ios.webp)

</TabItem>

</Tabs>

1. Przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>* lub *<Translate android="true" ids="send_logcat_log"/>* (*Wyślij bieżący dziennik aplikacji* na iOS). W zależności od sytuacji wybierz odpowiedni typ dziennika. Szczegóły dotyczące różnic między typami dzienników można znaleźć w sekcji [Dzienniki awarii i dzienniki aplikacji](#crash-and-app-logs).
2. W wyskakującym menu wybierz Gmaila lub preferowaną aplikację pocztową. Zalecamy wysłanie dzienników na adres `support@osmand.net`.
3. Stuknij przycisk *Wyślij*.

<!--
### Send Logs from iOS Devices {#send-logs-from-ios-devices}

1. Logs from iOS devices can be sent:

    - Automatically.
        - Navigate to OsmAnd app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    - Manually.
        - Navigate to the iOS system app *Files → On my iPhone (or On my iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Send [IPS-format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) of logs and authorization data:
    - On iOS 15 or older: *Settings → Analytics → Analytics Data → OsmAnd Maps ips-format file*.
    - On iOS 16 or newer:  *Settings → Privacy & Security → Analytics & Improvements → Analytics Data → OsmAnd Maps ips-format file*.
    - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)
-->

## Wysyłanie plików Tombstone (Android) {#send-tombstone-files-android}

:::caution Kluczowe
Tylko dla zaawansowanych użytkowników!
:::

W niektórych złożonych lub nietypowych przypadkach mogą być wymagane *[pliki Tombstone](https://source.android.com/docs/core/tests/debug)*. Pliki te dostarczają szczegółowych śladów stosu dla wszystkich wątków w procesie ulegającym awarii (nie tylko tego, który spowodował błąd), pełną mapę pamięci i listę wszystkich otwartych deskryptorów plików. Pliki Tombstone są kluczowe do debugowania i diagnozowania problemów związanych z kodem natywnym na platformie Android.


### Korzystanie z urządzenia {#using-your-device}

Aby wyeksportować pliki tombstone, należy wygenerować raport o błędach za pomocą ustawień systemowych Androida:

1. Włącz *Opcje programisty* (ten ekran jest domyślnie ukryty).
    - Przejdź do *Ustawienia → Informacje o telefonie → Informacje o oprogramowaniu* (ta ścieżka jest prawidłowa dla urządzeń Samsung).
    - Stuknij *Numer kompilacji* siedem razy, aż pojawi się komunikat potwierdzający aktywację trybu programisty.

2. Przejdź do *Opcji programisty*, zazwyczaj znajdujących się na dole listy ustawień. Możesz również użyć funkcji wyszukiwania.
    - Stuknij opcję *Wykonaj raport o błędach*.
    - Wybierz typ raportu o błędach i stuknij *Raport*.
  
Po przygotowaniu raportu o błędach otrzymasz powiadomienie. Stuknij pole powiadomienia, aby pobrać raport na swoje urządzenie. Rozpakuj plik i wyślij pliki tombstone do zespołu programistów OsmAnd (e-mail: `support@osmand.net`).

![Wyślij dzienniki awarii z Androida 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Wyślij dzienniki awarii z Androida 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Należy pamiętać, że raporty o błędach mogą zawierać prywatne dane, w tym dane dotyczące użytkowania aplikacji lub lokalizacji.
:::

### Korzystanie z ADB {#using-adb}

Android Debugging Bridge (ADB) to narzędzie wiersza poleceń, które umożliwia programistom debugowanie ich aplikacji. Aby użyć ADB do eksportowania plików tombstone, należy najpierw pobrać i zainstalować. Postępuj zgodnie z instrukcjami podanymi na [oficjalnej stronie programistów Androida](https://developer.android.com/tools/releases/platform-tools).

#### Przygotuj swoje urządzenie {#prepare-your-device}

Upewnij się, że *Opcje programisty* są włączone (ten ekran jest domyślnie ukryty) i *Debugowanie USB* jest włączone:

- Przejdź do *Ustawienia → Informacje o telefonie → Informacje o oprogramowaniu*.
- Stuknij *Numer kompilacji* siedem razy, aż pojawi się komunikat potwierdzający aktywację trybu programisty.
- W *Opcjach programisty* włącz *Debugowanie USB*.

Następnie podłącz urządzenie do stacji roboczej za pomocą kabla USB. Jeśli jest to pierwsze połączenie, pojawi się wyskakujące okienko z prośbą o zezwolenie na debugowanie.

#### Generowanie raportu o błędach {#generate-bug-report}

1. Otwórz terminal wiersza poleceń. Na Macu lub Linuksie użyj aplikacji *Terminal*, a na Windowsie użyj *Wiersza polecenia*.
2. Przejdź do folderu platform-tools, w którym znajduje się ADB, używając polecenia *cd* (na przykład „cd /Users/NazwaUżytkownika/Pobrane/Narzędzia”).
3. Wygeneruj raport o błędach:
   - Na Macu: ```adb bugreport```
   - Na Windowsie: ```adb.exe bugreport```
4. Poczekaj kilka minut na wygenerowanie raportu. Wynikowy plik zostanie zapisany w folderze narzędzi platformy.
5. Rozpakuj plik.
6. Znajdź folder *tombstones* z plikami takimi jak *tombstone_00*, *tombstone_01* i podobnymi.
7. Wyślij pliki tombstone na adres `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Korzystanie z urządzeń z rootem lub emulatora Android Studio {#using-rooted-devices-or-android-studio-emulator}

- Z dostępem roota do urządzenia możesz bezpośrednio otworzyć folder */data/tombstones*.  

- W Android Studio użyj emulatora, aby przejść do *Eksploratora plików urządzenia* i znaleźć folder /data/tombstones. Wewnątrz znajdziesz pliki o nazwach takich jak *tombstone_00*, *tombstone_01* i inne. Pobierz te pliki i wyślij je na adres `support@osmand.net`.

Więcej szczegółów na temat raportów o błędach można znaleźć w [dokumentacji Androida](https://developer.android.com/studio/debug/bug-report).