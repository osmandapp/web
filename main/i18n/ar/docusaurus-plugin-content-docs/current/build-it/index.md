---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# البناء باستخدام OsmAnd {#build-with-osmand}

اقرأ **[الوثائق الفنية](../technical/osmand-api-sdk/index.md)** حول كيفية التكامل مع OsmAnd.

## استخدام OsmAnd API {#use-osmand-api}

يتيح لك OsmAnd API التحكم في تطبيق OsmAnd المثبت. بدء التطوير عبر API سهل ومباشر ويمكن تضمينه في أي تطبيق، **دون متطلبات ترخيص** للتطبيق الهدف. العيب الوحيد هو أنه يجب أن يكون لديك OsmAnd مثبتًا بالفعل.

**ميزات OsmAnd API:**

* إضافة المفضلة والعلامات إلى الخريطة
* التنقل بين المواقع
* إنشاء ملاحظات صوتية وفيديو وصور
* بدء وإيقاف تسجيل مسار GPX
* استيراد مسارات GPX إلى OsmAnd والتنقل على طولها
* العديد من الميزات الأخرى موجودة بالفعل أو يمكن تنفيذها عند الطلب

### بدء التطوير (API) {#start-development-api}

يمكنك بناء مشروعك الخاص بأي طريقة تفضلها. يتم التكامل مع OsmAnd API باستخدام نوعين من الأهداف: صامت أو مرئي. الهدف الصامت لا يبقي OsmAnd مفتوحًا، بينما الهدف المرئي يجلب OsmAnd إلى شاشة معينة. هناك خطط لإضافة الاتصال بين عمليات Android في المستقبل. يرجى إلقاء نظرة على الكود المصدري لمشروع OsmAnd API.

<Admonition type="caution" icon="🛠️&nbsp;" title="أمثلة">
  <p>
    تصفح الكود المصدري على GitHub وقم بتثبيت العرض التوضيحي من Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">جوجل بلاي</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">جيت هاب</button></a>
  </div>
</Admonition>  

اقرأ **[الوثائق الفنية](../technical/osmand-api-sdk/index.md)** لمزيد من التفاصيل.

### الترخيص (API) {#license-api}

نظرًا لعدم وجود استخدام مباشر للكود من مشروع OsmAnd الأساسي، يختلف الترخيص لـ OsmAnd API عن مشروع OsmAnd Core. على الأرجح، سيتم كتابة التطبيقات التي تستخدم OsmAnd API من الصفر ولن يتم استخدام هذا التطبيق المقدم كمثال على الإطلاق. بالنسبة لـ OsmAnd API، يتم استخدام الترخيص الأقل تقييدًا، وهو ترخيص MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## استخدام OsmAnd SDK {#use-osmand-sdk}

يمثل OsmAnd Sample إمكانية بناء تطبيق فوق نواة OsmAnd. يوفر OsmAnd مكتبة Java مع العديد من الوظائف المضمنة. [يرجى إلقاء نظرة على الكود المصدري](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample ليس حالة استخدام لواجهة برمجة التطبيقات (API) وترخيص OsmAnd Sample هو نفسه ترخيص تطبيق OsmAnd نفسه. يوفر إمكانية تجميع وتوزيع التطبيق بشكل مستقل عن OsmAnd.


### بدء التطوير (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="أمثلة">
  <p>
    تصفح الكود المصدري على GitHub وقم بتثبيت ملف APK التجريبي.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">تنزيل APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">جيت هاب</button></a>
  </div>
</Admonition>  

اقرأ **[الوثائق الفنية](../technical/osmand-api-sdk/index.md)** لمزيد من التفاصيل.


### الترخيص (SDK) {#license-sdk}

[ترخيص](https://github.com/osmandapp/Osmand/blob/master/LICENSE) تطبيق OsmAnd كبير نوعًا ما. هناك نقطتان مهمتان: يستخدم OsmAnd كود طرف ثالث فقط بتراخيص متساهلة مثل (LGPL، MIT، Apache) وكود OsmAnd نفسه المحمي بحقوق الطبع والنشر لشركة OsmAnd BV يتم توزيعه بموجب ترخيص GPLv2 باستثناء توزيعه في أسواق Google Play دون إذن. وهذا يوفر إمكانية بناء أي تطبيق للاستخدام الشخصي أو بناء تطبيق مفتوح المصدر بموجب ترخيص GPLv2 (لأن OsmAnd ليس منصة ويجب أيضًا ترخيص جميع الأكواد المبنية فوق النواة بترخيص GPL).

إذا كنت ترغب في بناء تطبيق للاستخدام الداخلي، يرجى الاتصال بـ <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>، في بعض الحالات يتم توفير استثناءات من كود GPLv2 المحمي بحقوق الطبع والنشر لشركة OsmAnd BV. بالنسبة لبقية الكود، يرجى التحقق مرة أخرى من القائمة من [الترخيص](https://github.com/osmandapp/Osmand/blob/master/LICENSE) والتي تتكون فقط من تراخيص متساهلة (LGPL، MIT، Apache).

في حال وجود أي سؤال، يرجى عدم التردد في الاتصال بـ <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. يسعدنا أيضًا تقديم المساعدة من مطوري OsmAnd ذوي الخبرة لبناء تطبيق لأغراض خاصة.


## اتصل بنا للتطوير {#contact-us-for-development}

في حال لم تكن متأكدًا من الحالة التي تناسبك أكثر أو ترغب في طلب المساعدة من المطورين الذين لديهم خبرة في بناء تطبيقات متكاملة مع OsmAnd، يرجى عدم التردد في الاتصال بنا على <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!