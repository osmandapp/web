import Admonition from '@theme/Admonition';

# Build with OsmAnd

Read **[Technical documentation](../technical/osmand-api-sdk/index.md)** how to integrate with OsmAnd.

## Use OsmAnd API

OsmAnd API allows you to control the installed OsmAnd app. Starting development via the API is easy and straightforward and it can be embedded in any application, **without licensing requirements** of the target app. The only drawback is that you should already have OsmAnd installed.

**OsmAnd API features:**

* Adding favorites and markers to the map
* Navigation between locations
* Creating audio, video, and photo notes
* Starting and stopping GPX track recording
* Importing GPX tracks into OsmAnd and navigating along them
* Many other features are already present or can be implemented by request

### Start development (API)

You can build your own project in any way you like. Integration with OsmAnd API is done using two types of intents: silent or visible. A silent intent doesn't keep OsmAnd open, whereas a visible intent brings OsmAnd to a specific screen. There are plans to add Android Interprocess Communication in the future. Please take a look at the source code of the OsmAnd API project.

<Admonition type="caution" icon="🛠️&nbsp;" title="Examples">
  <p>
    Browse GitHub source code and install demo from Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Read **[Technical documentation](../technical/osmand-api-sdk/index.md)** for more details.

### License (API)

Since there is no direct code usage from the core OsmAnd project, the License is different for the OsmAnd API and for the OsmAnd Core project. Most likely applications using the OsmAnd API will be written from scratch and this application provided as an example won't be used at all. For the OsmAnd API the least restrictive license is used, the MIT license.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Use OsmAnd SDK

OsmAnd Sample represents a possibility to built an application on top of OsmAnd core. OsmAnd provides a Java library with lots of functions included. [Please take a look at the source code](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample is not an API use case and the LICENSE of OsmAnd Sample is the same as the OsmAnd application itself. It provides a possiblity to package and distribute it independently from OsmAnd.


### Start development (SDK)

<Admonition type="caution" icon="🛠️&nbsp;" title="Examples">
  <p>
    Browse GitHub source code and install demo APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Download APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Read the **[technical documentation](../technical/osmand-api-sdk/index.md)** for more details.


### License (SDK)

The [license](https://github.com/osmandapp/Osmand/blob/master/LICENSE) for the OsmAnd application is rather big. There are 2 important things: OsmAnd uses third-party code only with permissive licenses like (LGPL, MIT, Apache) and OsmAnd code itself copyrighted by OsmAnd BV is distributed under GPLv2 license with the exception of distributing it on Google Play markets without permission. That provides a possibility to build any application for personal usage or build an opensource application under GPLv2 license (cause OsmAnd is not a platform and all the code built on top of the core must also be licensed as GPL).

If you want to build an application for internal usage, please contact <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, in some cases exemptions from GPLv2 code copyrighted by OsmAnd BV are provided. For the rest of the code please double check the list from the [LICENSE](https://github.com/osmandapp/Osmand/blob/master/LICENSE) which consists only of permissive licenses (LGPL, MIT, Apache).

In case of any question, please don't hesitate to contact <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. We will also be happy to provide help from experienced OsmAnd developers to build a special purpose app.


## Contact us for development

In case you are not sure which case fits you the most or you would like to ask for help from developers who have experience in building application integrated with OsmAnd, please don't hesitate to contact us <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!
