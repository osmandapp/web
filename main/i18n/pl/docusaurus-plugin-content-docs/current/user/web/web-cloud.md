---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: OsmAnd Cloud na stronie internetowej
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

## Przegląd {#overview}

[Portal Map OsmAnd](https://osmand.net/map) to usługa przeglądarkowa świadczona przez OsmAnd, umożliwiająca użytkownikom eksplorowanie map, zarządzanie danymi, planowanie i tworzenie podróży, lub po prostu przeglądanie mapy.



## Jak zacząć {#how-to-start}

Aby uzyskać dostęp do funkcji OsmAnd Web, potrzebujesz konta:

- Jeśli masz już subskrypcję [**OsmAnd Pro**](../personal/osmand-cloud.md#login) lub chcesz utworzyć darmowe konto [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), wykonaj następujące kroki:

  1. Przejdź do [**Portalu Map OsmAnd**](https://osmand.net/map).
  2. Otwórz menu **Konto**.
     - **Zaloguj się**: Wprowadź adres e-mail użyty do subskrypcji Pro lub Start.
     - **Utwórz konto**: Użyj tej opcji, aby zarejestrować się w celu uzyskania darmowego konta OsmAnd Start.

![Web Account](@site/static/img/web/web_account.png)

## Zarządzanie kontem {#managing-account}

Aby zarządzać swoim kontem, przejdź do:
**Menu ogólne → Konto**

Po zarejestrowaniu się w sieci możesz:

- Wyświetlić informacje o koncie
- Pobrać kopie zapasowe z chmury
- Wylogować się z konta
- Usunąć konto
- Zmienić adres e-mail
- Zobaczyć swoje płatności i zakupy

![Web Account](@site/static/img/web/web_account_2.png)

### Moje dane {#my-data}

Możesz pobrać kopie zapasowe, które zostały utworzone i zsynchronizowane z Twojego urządzenia mobilnego za pośrednictwem **OsmAnd Cloud**.

- Przejdź do **Menu ogólne → Konto → Moje dane (OsmAnd Cloud) → Pobierz wszystko**.

Ta sekcja wyświetla:

- Liczbę plików przechowywanych w Twojej chmurze
- Całkowitą wykorzystaną objętość pamięci
- Dostępną przestrzeń dyskową w chmurze

> 💡 Pojawią się tutaj tylko kopie zapasowe utworzone na urządzeniach, na których włączono **OsmAnd Cloud**.

### Płatności i zakupy {#payments-and-purchases}

- Przejdź do **Menu ogólne → Konto → Płatności i zakupy**.

W tej sekcji możesz przeglądać wszystkie zakupy i subskrypcje powiązane z Twoim kontem.

Więcej szczegółów na temat korzystania z zakupów na różnych platformach znajdziesz w artykule o [dostępie międzyplatformowym](../purchases/cross.md).

### Zmień adres e-mail {#change-email-address}

Aby zaktualizować swój adres e-mail:

1. Przejdź do **Menu ogólne → Konto → E-mail → ⋮ → Zmień e-mail**.
2. Wprowadź nowy adres e-mail i potwierdź.

> 🔒 Przed finalizacją zmiany na nowy adres zostanie wysłany e-mail weryfikacyjny.

### Wyloguj się i usuń konto {#log-out-and-delete}

Aby wylogować się z konta OsmAnd Web:

- Otwórz **Menu ogólne → Konto**.
- Kliknij przycisk **Wyloguj**, aby zakończyć bieżącą sesję.

Aby trwale usunąć konto:

- Przewiń na dół menu **Konto**.
- Kliknij przycisk **Usuń konto**.
- Potwierdź usunięcie. Tej akcji nie można cofnąć.


## Synchronizacja OsmAnd Pro i OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** to [międzyplatformowa](../troubleshooting/setup.md#cross-platform) płatna subskrypcja.
- **OsmAnd Start** to [darmowa rejestracja w OsmAnd Cloud](https://osmand.net/blog/start).

Możliwość korzystania z OsmAnd Pro na różnych platformach *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Aby to zrobić, musisz:

1. Zasubskrybuj **OsmAnd Pro**. Więcej o tym, jak to zrobić dla [Androida, przeczytaj tutaj](../purchases/android.md#how-to-buy), a dla [iOS, przeczytaj tutaj](../purchases/ios.md#how-to-buy).
2. Jak utworzyć konto **OsmAnd Start**, przeczytaj więcej [tutaj](https://osmand.net/blog/start#how-to-create-an-account).
3. Zarejestruj swoje konto [Pro lub Start](../troubleshooting/setup.md#cross-platform) na serwerze OsmAnd w aplikacji OsmAnd.
4. Zarejestrowany adres e-mail będzie Twoim loginem do aktywacji OsmAnd Pro na platformie internetowej. Na początku, aby móc zalogować się do portalu internetowego, należy wybrać hasło (proszę, skorzystaj z instrukcji na portalu internetowym).


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



> *Ostatnia aktualizacja: lipiec 2024*