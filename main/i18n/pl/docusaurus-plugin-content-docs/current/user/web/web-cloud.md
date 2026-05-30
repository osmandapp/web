---
source-hash: 37966c34f2ca7cf0b51174feba09ac86bc8ff2c9dbcc286058b56a245ebf5aff
sidebar_position: 2
sidebar_label:  Konto
title: Konto OsmAnd
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

<!--
<InfoIncompleteArticle/>
-->

## Przegląd {#overview}

Zalogowanie się za pomocą konta OsmAnd zmienia [Planer OsmAnd Web](https://osmand.net/map) z prostego przeglądarki map w Twoją osobistą przestrzeń roboczą. To samo konto, którego używasz w aplikacji mobilnej, łączy stronę internetową z danymi OsmAnd Cloud i zakupami, dzięki czemu możesz uzyskać dostęp do zapisanej zawartości i subskrypcji w jednym miejscu w sieci.


## Autoryzacja {#authorization}

### Rejestracja {#sign-up}

Aby uzyskać dostęp do funkcji OsmAnd Web, musisz utworzyć konto. Użyj procesu rejestracji:

- Przejdź do [**Portalu map OsmAnd**](https://osmand.net/map).
- Otwórz menu **Konto**.
- Wybierz **Utwórz nowe konto**. Otwiera się okno dialogowe Utwórz nowe konto.
- W polu **E-mail** wprowadź adres e-mail, którego chcesz użyć dla swojego konta OsmAnd, i kliknij **Kontynuuj**.
- Kod weryfikacyjny zostanie wysłany na ten adres e-mail. Sprawdź skrzynkę odbiorczą (i folder spamu, jeśli to konieczne).
- W następnym oknie dialogowym wprowadź Kod weryfikacyjny i kliknij **Kontynuuj**, aby potwierdzić swój e-mail. Jeśli nie otrzymałeś kodu, użyj linku **Nie otrzymałem kodu weryfikacyjnego** i postępuj zgodnie z instrukcjami.

Po zweryfikowaniu kodu konto internetowe zostanie utworzone i nastąpi automatyczne zalogowanie.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Logowanie {#login}

Jeśli masz już konto OsmAnd, możesz się zalogować na [**Portalu map OsmAnd**](https://osmand.net/map) za pomocą tego samego adresu e-mail i hasła. Przejdź do menu **Konto** i wybierz opcję **Zaloguj się**. W otwierającym się oknie dialogowym wprowadź adres e-mail powiązany z Twoim kontem OsmAnd, wpisz hasło i wybierz **Kontynuuj**. Po pomyślnym zalogowaniu otworzy się panel Konto OsmAnd, w którym możesz pracować z danymi, zakupami i ustawieniami.


## Zarządzanie kontem {#managing-account}

### Moje dane {#my-data}

Możesz pobrać kopie zapasowe utworzone i zsynchronizowane z urządzenia mobilnego za pośrednictwem **OsmAnd Cloud**.  
Przejdź do: *Menu Główne → Konto → Moje dane (OsmAnd Cloud) → Pobierz wszystko*

Ta sekcja wyświetla:

- Liczbę plików przechowywanych w chmurze.
- Całkowitą objętość pamięci używaną.
- Dostępną przestrzeń w chmurze.

> 💡 Pojawią się tutaj tylko kopie zapasowe utworzone na urządzeniach, na których włączono **OsmAnd Cloud**.

Jeśli chcesz zapisać kopię wszystkich swoich danych, użyj **Pobierz wszystko**. Otworzy się okno dialogowe, w którym możesz:

- Wybrać, które dane wyeksportować (na przykład *Moje miejsca, Ustawienia, Zasoby, Mapy*),
- Wybrać format eksportu (*ZIP lub OSF*).
- Zobacz szacowany rozmiar i czas pobierania.

Kliknij **Pobierz kopię zapasową**, aby rozpocząć eksport i zapisać archiwum na komputerze.

![Web Account](@site/static/img/web/web_download_all.png)

### Płatności i zakupy {#payments-and-purchases}

Ta sekcja pokazuje wszystkie produkty i subskrypcje powiązane z Twoim kontem OsmAnd. Aby ją otworzyć,  
Przejdź do: *Menu Główne → Konto → Płatności i zakupy*

Tutaj możesz zobaczyć listę wszystkich zakupów powiązanych z Twoim adresem e-mail:
- Darmowe i płatne plany (takie jak OsmAnd Start lub OsmAnd Pro).
- Produkty jednorazowe (np. Maps+ lub edycje specjalne).
- Subskrypcje odnawiane miesięcznie lub rocznie.

Dla każdego elementu lista pokazuje:
- Nazwę produktu i ikonę.
- Typ – subskrypcja miesięczna, subskrypcja roczna lub płatność jednorazowa.
- Status – *Aktywne, Wygaśnięte lub Anulowane*.
- Informacje o dacie.

Jeśli klikniesz produkt na liście, otworzy się strona szczegółów. Tam możesz zobaczyć, gdzie produkt został zakupiony (*Google Play, Apple App Store, Huawei AppGallery, Amazon* lub *OsmAnd Web*) i znaleźć link lub instrukcje, jak zarządzać lub anulować subskrypcję w odpowiednim sklepie. Jeśli produkt został zakupiony w OsmAnd Web (FastSpring), strona szczegółów pokazuje link **Zarządzaj subskrypcją**, który otwiera portal zarządzania kontem FastSpring, gdzie możesz zaktualizować metodę płatności, anulować lub reaktywować subskrypcję, zmienić plan lub pobrać faktury.

Jeśli nie masz jeszcze żadnych zakupów powiązanych z kontem, ta sekcja pokazuje stan pusty z komunikatem **Nie masz żadnych zakupów** i przyciskiem **Dowiedz się więcej**, który prowadzi do strony z dostępnymi planami OsmAnd i opcjami uaktualnienia.

Więcej szczegółów na temat korzystania z zakupów na różnych platformach znajdziesz w artykule o [dostępie wieloplatformowym](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Synchronizacja w chmurze {#cloud-sync}

Synchronizacja w chmurze pozwala na dostęp do danych zsynchronizowanych z OsmAnd Cloud bezpośrednio na [Portalu map internetowych](https://osmand.net/map/). Po zalogowaniu się za pomocą konta [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) lub OsmAnd Pro strona wyświetla Ulubione, Ścieżki i pliki kopii zapasowych, które wcześniej zsynchronizowałeś z aplikacji mobilnej. To prosty sposób na przeglądanie zawartości chmury na większym ekranie i pobieranie kopii zapasowych, kiedy tylko potrzebujesz.

Te elementy stają się widoczne w menu zaraz po zalogowaniu się na stronie. Aby zaktualizować te informacje, musisz zsynchronizować dane z urządzeń za pomocą akcji [Synchronizuj teraz](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) w aplikacji mobilnej.

Dostępność synchronizacji w chmurze zależy od typu konta:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – synchronizuje [Ulubione](../web/web-favorites.md) i wyświetla je w sieci.
- OsmAnd Pro – synchronizuje [Ścieżki](../web/web-tracks.md), Ulubione i [Kopie zapasowe](#my-data), oraz odblokowuje pełny dostęp w sieci do danych chmurowych.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Po zalogowaniu sekcja OsmAnd Cloud pojawia się w Menu → Ustawienia i zawiera Zmiany i Kosz.

Opcja **Zmiany** pokazuje chronologiczny wykaz plików przechowywanych w koncie OsmAnd Cloud. Elementy są pogrupowane według miesięcy i zawierają nazwę pliku, typ zmiany (na przykład dodano, zmodyfikowano lub usunięto), czas ostatniej aktualizacji i urządzenie, które ją utworzyło. Dla każdego wpisu możesz otworzyć menu z trzema kropkami i wybrać *Pobierz*, aby zapisać wybrany plik na komputerze, lub *Usuń*.

Opcja **Kosz** zawiera pliki usunięte z OsmAnd Cloud. Lista jest również pogrupowana według miesięcy i pokazuje, kiedy każdy plik został usunięty i z jakiego urządzenia. Użyj menu z trzema kropkami obok pliku, aby *Pobrać* kopię, *Przywrócić z kosza* (zwróć plik do OsmAnd Cloud, aby stał się ponownie dostępny w danych), lub *Usuń natychmiast*, aby usunąć go na stałe. Pomaga to zapobiegać przypadkowej utracie danych, jednocześnie pozwalając na zwolnienie miejsca w chmurze, gdy jesteś pewien, że plik nie jest już potrzebny. Możesz również wyczyścić wszystkie usunięte elementy naraz, klikając ikonę Kosza w nagłówku panelu Kosz. Otworzy się okno dialogowe **Opróżnij kosz**, w którym potwierdzasz usunięcie, aby trwale usunąć wszystkie pliki z Kosza.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

### Połączone aplikacje {#connected-apps}

Sekcja **Połączone aplikacje** umożliwia łączenie usług zewnętrznych z kontem OsmAnd. Obecnie obsługuje integrację z [Garmin Connect™](https://connect.garmin.com/app/), która pozwala na automatyczną synchronizację aktywności Garmin. Aby ją otworzyć, przejdź do: *OsmAnd Web Map → Konto → Połączone aplikacje*.

Integracja z Garmin Connect jest dostępna tylko dla użytkowników [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/). Jeśli nie masz aktywnej subskrypcji Pro, wybranie elementu Garmin Connect otwiera stronę z cennikiem.

Aby połączyć konto Garmin Connect™, kliknij **Połącz**. Zostaniesz przekierowany na stronę autoryzacji Garmin, gdzie musisz się zalogować i udzielić dostępu do danych Garmin Connect™. Podczas autoryzacji możesz włączyć synchronizację ostatnich aktywności, aby zaimportować dane z ostatnich 30 dni. Aktywności starsze niż 30 dni nie mogą być importowane automatycznie.

Po połączeniu OsmAnd tworzy dedykowany folder Garmin Connect w sekcji [Ścieżki](./web-tracks.md) i rozpoczyna automatyczne importowanie aktywności. Nowe aktywności zarejestrowane w Garmin Connect™ są dodawane do tego folderu bez ręcznego importu. Folder jest również synchronizowany z aplikacjami mobilnymi OsmAnd, gdy włączona jest funkcja [OsmAnd Cloud](../personal/osmand-cloud.md).

Menu Garmin Connect zawiera dwie sekcje: **Moje dane** i **Ustawienia**. W sekcji Moje dane możesz wyświetlić liczbę zsynchronizowanych aktywności, otworzyć ostatnio pobraną aktywność lub otworzyć stronę Aktywności Garmin Connect™ za pomocą przycisku **Wyświetl w Garmin Connect™**. W sekcji Ustawienia możesz skonfigurować, które typy aktywności mają być synchronizowane za pomocą opcji Aktywności do synchronizacji.

Aktywności są pogrupowane w kategorie takie jak Cycling, Walking & Running, Water Sports oraz Winter & Other Sports. Poszczególne typy aktywności można włączać lub wyłączać. Domyślnie po połączeniu wybrane są wszystkie obsługiwane typy aktywności.

Aby odłączyć konto Garmin Connect™, przejdź do *Ustawienia → Odłącz* i potwierdź czynność. Wcześniej zaimportowane ścieżki pozostają w folderze Garmin Connect, ale nowe aktywności nie będą już synchronizowane.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Rozwiązywanie problemów {#troubleshooting}

### Resetowanie hasła {#reset-password}

Jeśli nie pamiętasz hasła, użyj linku **Nie mam hasła lub je zapomniałem** w oknie dialogowym logowania. Otworzy się panel **Zmień lub zresetuj hasło**. Wprowadź adres e-mail użyty do utworzenia konta i kliknij **Kontynuuj**. Wiadomość z kodem weryfikacyjnym zostanie wysłana na ten e-mail. Na następnym ekranie wpisz kod weryfikacyjny i nowe hasło, a następnie wybierz **Kontynuuj**, aby potwierdzić. Po zaakceptowaniu kodu hasło zostanie zaktualizowane i możesz zalogować się do OsmAnd Web za pomocą nowych poświadczeń.

![Web Account](@site/static/img/web/web_password.png)

### Zmiana adresu e-mail {#change-email-address}

Aby zaktualizować adres e-mail,
Przejdź do *Menu Główne → Konto → E-mail → ⋮ → Zmień e-mail*

Pojawia się okno dialogowe Zmiana e-mail. Kod weryfikacyjny zostanie wysłany na aktualny adres e-mail. Wprowadź ten kod w polu **Kod z starego e-maila**, podaj nowy adres w **Nowy e-mail**, a następnie wybierz **Dalej**. Z powodów bezpieczeństwa wiadomość potwierdzająca zostanie wysłana na nowy adres e-mail z informacją, że e-mail konta został zaktualizowany.

![Web Account](@site/static/img/web/web_email_new.png)

### Wylogowanie i usunięcie konta {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

Panel Konto OsmAnd zawiera elementy sterujące do zakończenia bieżącej sesji internetowej i trwałego usunięcia konta.

Aby się wylogować, otwórz Konto OsmAnd i użyj przycisku **Wyloguj** w prawym górnym rogu panelu (ikona ze strzałką wychodzącą z kwadratu). Wybranie Wyloguj zamyka panel konta i kończy aktywną sesję na stronie internetowej.

Aby usunąć konto, wybierz **Usuń konto** na dole panelu Konto OsmAnd. Pojawia się okno dialogowe potwierdzające z komunikatem *„Czy na pewno chcesz to zrobić?”* i krótkim wyjaśnieniem, że wszystkie dane i szczegóły konta zostaną usunięte z OsmAnd Cloud, a urządzenia drugorzędne stracą dostęp do płatnych funkcji. Kod weryfikacyjny zostanie wysłany na adres e-mail konta. Wprowadź kod w polu Kod z e-maila i wybierz **USUŃ TO KONTO**, aby ukończyć proces. Ta operacja jest trwała i nie może być cofnięta.

![Web Account](@site/static/img/web/web_delete.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


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

## Powiązane artykuły {#related-articles}

- [Wprowadzenie](./web-overview.md)
- [Zakupy wieloplatformowe](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Ścieżki](./web-tracks.md)