---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170
---
import Admonition from '@theme/Admonition';

# Створення за допомогою OsmAnd {#build-with-osmand}

Прочитайте **[Технічну документацію](../technical/osmand-api-sdk/index.md)** про те, як інтегруватись з OsmAnd.

## Використання OsmAnd API {#use-osmand-api}

OsmAnd API дозволяє керувати встановленим застосунком OsmAnd. Почати розробку через API легко та просто, і його можна вбудувати в будь-який застосунок, **без вимог до ліцензування** цільового застосунку. Єдиний недолік полягає в тому, що у вас вже має бути встановлений OsmAnd.

**Можливості OsmAnd API:**

* Додавання обраних місць та маркерів на мапу
* Навігація між локаціями
* Створення аудіо-, відео- та фотонотаток
* Запуск та зупинка запису GPX-треку
* Імпорт GPX-треків в OsmAnd та навігація по ним
* Багато інших функцій вже присутні або можуть бути реалізовані за запитом

### Початок розробки (API) {#start-development-api}

Ви можете створити власний проєкт будь-яким зручним для вас способом. Інтеграція з OsmAnd API здійснюється за допомогою двох типів інтентів: прихованого або видимого. Прихований інтент не залишає OsmAnd відкритим, тоді як видимий інтент переводить OsmAnd на певний екран. У майбутньому планується додати міжпроцесну комунікацію Android. Будь ласка, ознайомтеся з вихідним кодом проєкту OsmAnd API.

<Admonition type="caution" icon="🛠️&nbsp;" title="Приклади">
  <p>
    Перегляньте вихідний код на GitHub та встановіть демо з Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Для отримання додаткової інформації прочитайте **[Технічну документацію](../technical/osmand-api-sdk/index.md)**.

### Ліцензія (API) {#license-api}

Оскільки прямого використання коду з основного проєкту OsmAnd немає, Ліцензія для OsmAnd API та для основного проєкту OsmAnd відрізняється. Найімовірніше, застосунки, що використовують OsmAnd API, будуть написані з нуля, і цей застосунок, наданий як приклад, взагалі не буде використовуватися. Для OsmAnd API використовується найменш обмежувальна ліцензія, ліцензія MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Використання OsmAnd SDK {#use-osmand-sdk}

OsmAnd Sample представляє можливість створити застосунок на основі ядра OsmAnd. OsmAnd надає бібліотеку Java з великою кількістю включених функцій. [Будь ласка, ознайомтеся з вихідним кодом](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample не є випадком використання API, і ЛІЦЕНЗІЯ OsmAnd Sample така ж, як і самого застосунку OsmAnd. Вона надає можливість пакувати та розповсюджувати його незалежно від OsmAnd.


### Початок розробки (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Приклади">
  <p>
    Перегляньте вихідний код на GitHub та встановіть демо APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Завантажити APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Для отримання додаткової інформації прочитайте **[технічну документацію](../technical/osmand-api-sdk/index.md)**.


### Ліцензія (SDK) {#license-sdk}

[Ліцензія](https://github.com/osmandapp/Osmand/blob/master/LICENSE) для застосунку OsmAnd досить велика. Є 2 важливі речі: OsmAnd використовує сторонній код лише з дозвільними ліцензіями, такими як (LGPL, MIT, Apache), а сам код OsmAnd, захищений авторським правом OsmAnd BV, розповсюджується за ліцензією GPLv2 з винятком розповсюдження на ринках Google Play без дозволу. Це надає можливість створювати будь-які застосунки для особистого використання або створювати застосунки з відкритим вихідним кодом за ліцензією GPLv2 (оскільки OsmAnd не є платформою, і весь код, створений на основі ядра, також має бути ліцензований як GPL).

Якщо ви хочете створити застосунок для внутрішнього використання, будь ласка, зв'яжіться з <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, в деяких випадках надаються винятки з коду GPLv2, захищеного авторським правом OsmAnd BV. Для решти коду, будь ласка, двічі перевірте список з [ЛІЦЕНЗІЇ](https://github.com/osmandapp/Osmand/blob/master/LICENSE), який складається лише з дозвільних ліцензій (LGPL, MIT, Apache).

У разі будь-яких питань, будь ласка, не соромтеся звертатися до <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Ми також будемо раді надати допомогу від досвідчених розробників OsmAnd для створення застосунку спеціального призначення.


## Зв'яжіться з нами для розробки {#contact-us-for-development}

Якщо ви не впевнені, який випадок вам найбільше підходить, або ви хотіли б звернутися за допомогою до розробників, які мають досвід створення застосунків, інтегрованих з OsmAnd, будь ласка, не соромтеся зв'язатися з нами <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!