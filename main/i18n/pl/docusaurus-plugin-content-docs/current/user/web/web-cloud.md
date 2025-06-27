---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
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

#### Dostęp do subskrypcji {#subscription-accesses}

Z Portalu Map można korzystać bez rejestracji; jednakże niektóre funkcje są dostępne wyłącznie dla użytkowników OsmAnd Pro i OsmAnd Start:

| Funkcje | Wersje |
|--- |--- |
| [Trasa nawigacyjna](./planner.md) | Bezpłatna |
| [Utwórz ślad](./planner.md) | Bezpłatna |
| [Pogoda](./web-map.md) | Bezpłatna |
| [Ulubione](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) lub <ProFeature/> |
| [Synchronizacja OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) lub <ProFeature/> |
| [Wyszukiwanie w sieci](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) lub <ProFeature/>|
| [Ślady](./web-map.md) | <ProFeature/> |


## Jak zacząć {#how-to-start}

Jeśli masz konto [OsmAnd Pro](../personal/osmand-cloud.md#login) lub chcesz utworzyć konto [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), musisz wykonać następujące kroki:

- Przejdź do [*Portalu Map OsmAnd*](https://osmand.net/map).
- Otwórz menu **Konto**.
  - *Zaloguj się*. Wprowadź adres e-mail, którego użyłeś do utworzenia konta. Dla subskrypcji Pro lub Start.
  - *Utwórz konto*. Dla OsmAnd Start.


## Jak zmienić język {#how-to-change-language}

Jeśli chcesz zmienić język wyświetlania:

- Wersja internetowa OsmAnd używa języka z ustawień przeglądarki.
- Dla Chrome priorytetem jest `chrome://settings/languages`.
- Możesz ręcznie zmienić język systemu (menu), wybierając:
    *Menu →* ⚙ *→ Wyłącz język*.


## Zarządzanie kontem {#managing-account}

*Menu Ogólne → Konto*

Po zarejestrowaniu się w sieci, użytkownicy mogą uzyskać dostęp do informacji o swoim koncie, pobierać kopie zapasowe, wylogowywać się, usuwać swoje konto lub zmieniać adres e-mail.

#### Dostęp do konta {#access-account}

#### Kopie zapasowe {#backups}

#### Wyloguj się i usuń {#log-out-and-delete}

#### Zmień adres e-mail {#change-email-address}


## Synchronizacja OsmAnd Pro i OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** to [międzyplatformowa](../troubleshooting/setup.md#cross-platform) płatna subskrypcja.
- **OsmAnd Start** to [bezpłatna rejestracja w OsmAnd Cloud](https://osmand.net/blog/start).

Możliwość korzystania z OsmAnd Pro na różnych platformach pozwala na używanie go na wszystkich platformach *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Aby to zrobić, musisz:

1. Subskrybuj **OsmAnd Pro**. Więcej o tym, jak to zrobić dla [Androida, przeczytaj tutaj](../purchases/android.md#how-to-buy), a dla [iOS tutaj](../purchases/ios.md#how-to-buy).
2. Jak utworzyć konto **OsmAnd Start**, przeczytaj więcej [tutaj](https://osmand.net/blog/start#how-to-create-an-account).
3. Zarejestruj swoje konto [Pro lub Start](../troubleshooting/setup.md#cross-platform) na serwerze OsmAnd w aplikacji OsmAnd.
4. Zarejestrowany adres e-mail będzie Twoim loginem do aktywacji OsmAnd Pro na platformie internetowej. Za pierwszym razem należy wybrać hasło do przyszłego logowania się na portal internetowy (proszę, postępuj zgodnie z instrukcją na portalu internetowym).

- Wprowadź swój *e-mail* i *hasło* dla [osmand.net/map](https://osmand.net/map/).

![Widok aktywacji OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Twoje dane, takie jak ślady (OsmAnd Pro) i ulubione (OsmAnd Pro i OsmAnd Start), pojawią się w menu po zalogowaniu. Są one dostępne do wyświetlenia na mapie. Ale musisz [zsynchronizować te dane](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) ze swoich urządzeń.

![Widok danych OsmAnd Web](@site/static/img/web/web_data.png)

- Aby *POBRAĆ KOPIĘ ZAPASOWĄ* z [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), kliknij pole logowania. W polu logowania możesz zobaczyć informacje o plikach (całkowita liczba plików, całkowity rozmiar plików, wykorzystana przestrzeń w chmurze) oraz informacje o koncie (typ subskrypcji, data rozpoczęcia i data wygaśnięcia subskrypcji).

![Widok pliku kopii zapasowej OsmAnd Web](@site/static/img/web/web_backup_file.png)

Wybierz potrzebne pliki do pobrania, format `.zip` lub `.osf` pobranych plików i kliknij przycisk *POBIERZ KOPIĘ ZAPASOWĄ*:

![Widok pliku kopii zapasowej OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

Dostępny jest również przycisk do *wylogowania się* z konta.

- *Wyloguj się*, *USUŃ SWOJE KONTO* lub *Zmień e-mail* znajdziesz również w polu logowania. Aby otworzyć *USUŃ SWOJE KONTO* lub *Zmień e-mail*, musisz kliknąć *Niebezpieczny obszar*.

![Widok pliku kopii zapasowej OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Dane w chmurze {#cloud-data}

[Ślady i ulubione](web-map.md#tracks).
<!--
## Styl mapy {#map-style}

W tej sekcji menu możesz zmienić styl mapy. Więcej o tym, jak to zrobić, przeczytasz w artykule [Mapy wektorowe (Style map)](../map/vector-maps.md) dla aplikacji OsmAnd. Ustawienia w wersji internetowej niczym się nie różnią.
**Kilka przykładów:**

- Styl mapy morskiej

![Styl mapy OsmAnd Web](@site/static/img/web/web_map_style_nautical.png)

- Styl mapy topograficznej

![Dodawanie ulubionych w OsmAnd Web](@site/static/img/web/web_map_style_topo.png)
-->



> *Ostatnia aktualizacja: wrzesień 2024*