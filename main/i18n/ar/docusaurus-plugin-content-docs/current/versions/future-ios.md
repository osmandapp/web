---
source-hash: 229c58068a74b06d3fc63b8f92df8a4ca008fa25b9819b9b8d8243b8790942ed
sidebar_position: 5
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

# iOS 5.4 {#ios-54}

## انضم إلى الإصدار التجريبي {#join-beta}

يتم توفير بنى iOS التجريبية (TestFlight) عادةً أسبوعيًا (بعد عرض توضيحي لـ Team Sprint). لا تحتوي على أوصاف وقد يكون لها ترقيم إصدار مستمر. يُفترض أنها مستقرة وجاهزة للاستخدام.

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">انضم إلى TestFlight</a>
</div>

<br/>


## ما الجديد {#whats-new}

- تم تحديث البحث مع تبويب **[استكشاف](https://osmand.net/docs/user/map/popular_places#explore-in-search)** جديد يعرض الأماكن الشائعة القريبة.
- إضافة **[إضافة الفلك](https://osmand.net/docs/user/plugins/astronomy)** التجريبية الجديدة مع طبقة فلكية تعرض مسارات الشمس والكواكب والنجوم.
- إضافة **[محرر لوحة الألوان](https://osmand.net/docs/user/map/tracks/appearance#color-palette-editor)** لإنشاء وتخصيص أنظمة الألوان للمسارات والتضاريس.
- تنظيم أذكى للمسارات باستخدام **[المجلدات الذكية](https://osmand.net/docs/user/personal/tracks/smart-folder)** وإحصائيات ملخص أوضح.
- تخطيط أكثر مرونة **[للويدجتات وأزرار الخريطة](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**، خاصة في الوضع الأفقي.
- تحسين **[تخطيط المسار](https://osmand.net/docs/user/plan-route/create-route)** مع رسم بياني للارتفاع وحساب الارتفاع دون اتصال ومعاملات المسار.
- إضافة مقاطع الصعود والهبوط والمسطحة إلى **[تحليل المسار](https://osmand.net/docs/user/map/tracks/track-context-menu#analyze-by-intervals)**.

<!--
- Last Uphill / Last Downhill mode for **[Trip recording widgets](https://osmand.net/docs/user/plugins/trip-recording#widgets)**, with switching between total and last ascent/descent.
- Updated **[Distance widget](https://osmand.net/docs/user/plugins/trip-recording#distance-start-stop)** with modes for total distance, last uphill/downhill distance.
- **[Max Speed widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing maximum speed for the whole trip or for the most recent uphill/downhill section.
- **[Average Slope widget](https://osmand.net/docs/user/plugins/trip-recording#max-speed--average-slope)** showing the average slope of the latest ascent or descent.
- *Show track on map* quick action added to the Trip recording widget group.
- Improvements in route selection and altitude graph integration under the updated rendering scheme.
- Elevation graph widget for navigation, displaying a compact profile along routes or GPX tracks.
- **[Popular places](https://osmand.net/docs/user/map/popular_places/)** layer updated with POI source selection and optional image previews on the map.
- New Explore section in Search with “Popular places nearby” and improved offline/no-data states.
- Enhanced POI search results with consistent city display, refined layout, and optional thumbnails.
- Default appearance settings for track folders, allowing new tracks to inherit a unified folder style.
-->


## إصلاحات الأخطاء {#bug-fixes}

- إصلاح عدم مزامنة [المجلدات الذكية](https://github.com/osmandapp/OsmAnd-iOS/issues/5358) مع OsmAnd Cloud أو ظهورها في تصدير الإعدادات.
- تحديث [قائمة سياق ويكيبيديا](https://github.com/osmandapp/OsmAnd-Issues/issues/3215) بتصميم جديد وإضافة صور عبر الإنترنت.
- إصلاح فقدان [أسماء نقاط الاهتمام](https://github.com/osmandapp/OsmAnd-iOS/issues/5253) في قائمة «ما هنا».
- إصلاح فتح [أدلة السفر](https://github.com/osmandapp/OsmAnd-Issues/issues/3212) من نتائج البحث لعرض المقالة مباشرة.
- تعديل موضع قسم [الصور عبر الإنترنت](https://github.com/osmandapp/OsmAnd-iOS/issues/5336) في قائمة سياق المنطقة.

<!--
- Faster opening of context menus when tapping POIs, Favorites, tracks and buildings.
- Correct handling of relation-based POIs on multipolygons.
- Fixed “null” appearing instead of a city name in POI search results and improved night-mode background consistency.
- Restored tappable behaviour for fitness, running and canoe routes with shields.
-->