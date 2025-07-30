---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

<div dir="rtl">

# البناء باستخدام أوزماند {#build-with-osmand}

اقرأ **[الوثائق الفنية](../technical/osmand-api-sdk/index.md)** حول كيفية التكامل مع أوزماند.

## استخدام واجهة برمجة تطبيقات أوزماند (OsmAnd API) {#use-osmand-api}

تتيح لك واجهة برمجة تطبيقات أوزماند التحكم في تطبيق أوزماند المثبت. بدء التطوير عبر واجهة برمجة التطبيقات سهل ومباشر ويمكن تضمينه في أي تطبيق، **دون متطلبات ترخيص** للتطبيق المستهدف. العيب الوحيد هو أنه يجب أن يكون لديك أوزماند مثبتًا بالفعل.

**ميزات واجهة برمجة تطبيقات أوزماند:**

*   إضافة المفضلة والعلامات إلى الخريطة
*   التنقل بين المواقع
*   إنشاء ملاحظات صوتية، فيديو، وصور
*   بدء وإيقاف تسجيل مسار GPX
*   استيراد مسارات GPX إلى أوزماند والتنقل على طولها
*   العديد من الميزات الأخرى موجودة بالفعل أو يمكن تنفيذها عند الطلب

### بدء التطوير (API) {#start-development-api}

يمكنك بناء مشروعك الخاص بأي طريقة تفضلها. يتم التكامل مع واجهة برمجة تطبيقات أوزماند باستخدام نوعين من النوايا: صامتة أو مرئية. النية الصامتة لا تبقي أوزماند مفتوحًا، بينما النية المرئية تنقل أوزماند إلى شاشة محددة. هناك خطط لإضافة اتصال Android بين العمليات في المستقبل. يرجى إلقاء نظرة على الكود المصدري لمشروع واجهة برمجة تطبيقات أوزماند.

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

نظرًا لعدم وجود استخدام مباشر للكود من مشروع أوزماند الأساسي، يختلف الترخيص لواجهة برمجة تطبيقات أوزماند عن مشروع أوزماند الأساسي. من المرجح أن يتم كتابة التطبيقات التي تستخدم واجهة برمجة تطبيقات أوزماند من الصفر ولن يتم استخدام هذا التطبيق المقدم كمثال على الإطلاق. بالنسبة لواجهة برمجة تطبيقات أوزماند، يتم استخدام الترخيص الأقل تقييدًا، وهو ترخيص MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)

## استخدام حزمة تطوير برامج أوزماند (OsmAnd SDK) {#use-osmand-sdk}

يمثل نموذج أوزماند إمكانية بناء تطبيق فوق نواة أوزماند. يوفر أوزماند مكتبة جافا تحتوي على العديد من الوظائف. [يرجى إلقاء نظرة على الكود المصدري](https://github.com/osmandapp/osmand-api-demo). نموذج أوزماند ليس حالة استخدام لواجهة برمجة التطبيقات وترخيص نموذج أوزماند هو نفسه ترخيص تطبيق أوزماند نفسه. يوفر إمكانية تجميع وتوزيع التطبيق بشكل مستقل عن أوزماند.

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

[ترخيص](https://github.com/osmandapp/Osmand/blob/master/LICENSE) تطبيق أوزماند كبير نوعًا ما. هناك نقطتان مهمتان: يستخدم أوزماند كودًا من طرف ثالث فقط بتراخيص متساهلة مثل (LGPL، MIT، Apache)، وكود أوزماند نفسه المحمي بحقوق الطبع والنشر لشركة OsmAnd BV يتم توزيعه بموجب ترخيص GPLv2 باستثناء توزيعه في أسواق Google Play بدون إذن. يوفر ذلك إمكانية بناء أي تطبيق للاستخدام الشخصي أو بناء تطبيق مفتوح المصدر بموجب ترخيص GPLv2 (لأن أوزماند ليس منصة ويجب أن يكون كل الكود المبني فوق النواة مرخصًا أيضًا بموجب GPL).

إذا كنت ترغب في بناء تطبيق للاستخدام الداخلي، يرجى الاتصال بـ <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>، في بعض الحالات يتم توفير استثناءات من كود GPLv2 المحمي بحقوق الطبع والنشر لشركة OsmAnd BV. بالنسبة لبقية الكود، يرجى التحقق مرة أخرى من القائمة من [الترخيص](https://github.com/osmandapp/Osmand/blob/master/LICENSE) والتي تتكون فقط من تراخيص متساهلة (LGPL، MIT، Apache).

في حال وجود أي سؤال، يرجى عدم التردد في الاتصال بـ <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. سنكون سعداء أيضًا بتقديم المساعدة من مطوري أوزماند ذوي الخبرة لبناء تطبيق لأغراض خاصة.

## اتصل بنا للتطوير {#contact-us-for-development}

في حال لم تكن متأكدًا من الحالة التي تناسبك أكثر أو كنت ترغب في طلب المساعدة من المطورين الذين لديهم خبرة في بناء تطبيقات متكاملة مع أوزماند، يرجى عدم التردد في الاتصال بنا على <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!

</div>