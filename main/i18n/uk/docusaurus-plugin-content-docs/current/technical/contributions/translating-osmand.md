---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Як перекласти OsmAnd - Нам потрібна ваша допомога! {#how-to-translate-osmand---we-need-your-assistance}


Ми дуже цінуємо вашу допомогу в перекладі OsmAnd! Надання перекладів тексту для відображення не є дуже складним, бажаний спосіб надання перекладів рядків описано тут: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Якщо мова, на яку ви хотіли б допомогти перекласти, ще не вказана там, будь ласка, відкрийте запит [тут](https://github.com/osmandapp/Osmand/issues) (потрібен обліковий запис github).
* Існуючі мовні файли також можна змінити, відредагувавши відповідний файл _strings.xml_ безпосередньо в нашому коді за допомогою механізмів github, але це не є бажаним способом.
* Просто для довідки: основні рядки зберігаються у [файлі strings.xml американської англійської мови](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). Дані рядків для витягувача даних карти знаходяться у файлах `swing_messages_{language}.properties` у проєкті [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(ПРИМІТКА Харді: посилання не працює!)**.

Дякуємо за вашу допомогу!

## Деякі часті запитання та відповіді: {#some-frequent-questions-and-answers}

#### З1: Які рядки мені перекладати? {#q1-which-strings-should-i-translate}
Інструмент Weblate зрозумілий сам по собі. Тільки якщо ви спробуєте редагувати файли безпосередньо:
* У `strings.xml` рядки виглядають так: `<string name="shared_string_save_as_gpx">Save as GPX track</string>`. Перекладайте лише частину `Save route as GPX track`.
* У `swing_messages.properties` рядки виглядають так: `IndexCreator.INDEX_CITIES=Indexing cities...`. Перекладайте лише праву частину `Indexing cities...`.

#### З2: Я не хочу створювати в Weblate або github, чи можу я просто надіслати вам файл? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Так, ви можете надіслати файл електронною поштою, але, будь ласка, спробуйте бажані способи, це легко.

#### З3: Як мені перевірити, що змінилося в __English strings.xml__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Будь ласка, використовуйте Weblate, як описано вище, він покаже вам усі зміни. Якщо ви хочете перевірити джерело вручну порівняно з вашим файлом: Нові рядки зазвичай додаються на початку основного файлу ресурсів мови. Ви можете завантажити його та використовувати деякі утиліти, такі як pspad або vim, для їх порівняння. Ви також можете використовувати *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* або історію файлів на github, щоб переглянути останні зміни.

## Які мови будуть включені в OsmAnd? {#what-languages-will-be-included-in-osmand}

> Шановні перекладачі,
>
> Щиро дякуємо всім за ваші зусилля з завершення перекладів нашої мови відображення, а також за локалізацію OsmAnd на все більше мов на [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Зверніть увагу на наступне: Я радий включити в меню вибору мови відображення OsmAnd будь-яку нову мову з рівнем перекладу >10% (буде позначено як "неповний", доки не досягне ~80%). Будь ласка, створіть запит в OsmAnd, якщо вам це потрібно, я лише спорадично переглядаю ці цифри на Weblate.
>
> На жаль, мови з 3-літерними кодами ISO 639-2 наразі, здається, мають проблеми в Android, див., наприклад, * [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Це означає, що, на жаль, будь-яка така мова може не відображатися в меню OsmAnd на вашому пристрої. (Ця проблема стосується лише мови, що використовується в меню програми, а не на карті, звичайно.)
>
> Дякую,
> Доктор Харді Мюллер