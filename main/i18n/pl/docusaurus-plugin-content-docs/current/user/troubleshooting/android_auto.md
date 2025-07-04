---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title: Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Opóźnienia lokalizacji (awarie ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto i OsmAnd mogą jednocześnie wykrywać lokalizację pojazdu, co może powodować 3-5 sekundowe opóźnienie w wyświetlaniu informacji w powiązanych widżetach lub zawieszenie. Aby tego uniknąć, należy:

1. Otworzyć ustawienia Android Auto.
2. W Ustawieniach znaleźć Uprawnienia lokalizacji.
3. W tej sekcji wyświetlana jest lista aplikacji, które mogą używać lokalizacji w Android Auto. Znaleźć aplikację OsmAnd i zezwolić na używanie lokalizacji.
4. Lokalizacja będzie teraz wykrywana tylko przez aplikację OsmAnd w Android Auto, co pozwoli uniknąć opóźnień w wyświetlaniu informacji o lokalizacji.

## Problem z orientacją mapy {#map-orientation-issue}

Orientacja mapy kierunku ruchu jest [odwrócona i drży](https://github.com/osmandapp/OsmAnd/issues/16041). Rozwiązuje się to poprzez włączenie opcji ["Przybliżony kierunek"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- Widoczne tylko, jeśli włączono [Rozwój OsmAnd](../plugins/development.md).
- Znajduje się w *Menu → Ustawienia → Profil → Ustawienia nawigacji → [Mapa podczas nawigacji](../navigation/guidance/map-during-navigation.md) → Przybliżony kierunek*.

## Problem z kontrolą głośności {#volume-control-issue}

W większości przypadków wszystkie rodzaje **sygnałów** pozostają na stałym, pełnym poziomie głośności, na który nie mają wpływu ustawienia jednoczesnego odtwarzania dźwięku. Aby zmienić głośność komunikatów nawigacyjnych OsmAnd podczas korzystania z Android Auto, przejdź do *Ustawienia → Głos → Głośność głosu* na ekranie systemu multimedialnego pojazdu.

Jeśli ta metoda nie działa, istnieje inna opcja. Aby dostosować głośność powiadomień, musisz włączyć Asystenta Google podczas rozmowy. Przytrzymaj przycisk na kierownicy, który włącza Asystenta Google, a podczas rozmowy dostosuj głośność za pomocą deski rozdzielczej lub kierownicy.