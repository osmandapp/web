import Admonition from '@theme/Admonition';

# Build with OsmAnd 

Read **[Technical documentation](../technical/osmand-api-sdk/)** how to integrate with OsmAnd.

## Use OsmAnd API
OsmAnd API allows you to control the installed OsmAnd app. Starting development via the API is easy and straightforward and can be embedded in any application, **without licensing requirements** of the target app. The only drawback is that the user should have OsmAnd already installed.

**OsmAnd API features:**
* Adding favorites and markers to the map
* Navigation between locations
* Creating audio, video and photo notes
* Starting and stopping GPX track recording
* Importing GPX tracks into OsmAnd and navigatin along them
* Many other features are already present or can be implemented by request

### Start development
You can build your own project in any way your like. Integration with OsmAnd API is done using two types of intents: silent or visible. A silent intent doesn't keep OsmAnd open, whereas a visible intent brings OsmAnd to a specific screen. There are plans to add Android Interprocess Communication in future. Please take a look at source code of the OsmAnd API project.

<Admonition type="caution" icon="🛠️&nbsp;" title="Examples">
  <p>
    Browse Github source code and Install Demo from Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Read **[Technical documentation](../technical/osmand-api-sdk/)** for more details.

### License
Since there is no direct code usage from the core OsmAnd project, the License is different for the OsmAnd API and for the OsmAnd Core project. Most likely application using OsmAnd API will be written from scratch and this application provided as an example won't be used at all. For OsmAnd API the least restrictive license is used, MIT license.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Use OsmAnd SDK
OsmAnd Sample represents a possiblity to built an application on top of OsmAnd core. OsmAnd provides an java library with lots of functions included. [Please take a look at the source code](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample is not an API use case and the LICENSE of OsmAnd Sample is the same as the OsmAnd application itself. It provides a possiblity to package and distribute it independently from OsmAnd.


### Start development

<Admonition type="caution" icon="🛠️&nbsp;" title="Examples">
  <p>
    Browse Github source code and Install Demo APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAndCore-sample-armv7.apk"><button class="button button--primary">Google Play</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Read **[Technical documentation](../technical/osmand-api-sdk/)** for more details.


### License
The [license](https://github.com/osmandapp/Osmand/blob/master/LICENSE) for the OsmAnd application is rather big. There are 2 important things: OsmAnd uses third-party code only with permissive licenses like (LGPL, MIT, Apache) and OsmAnd code itself copyrighted by OsmAnd BV is distributed under GPLv2 license with exception of distributing it on Google Play markets without permission. That provides a possibility to build any application for personal usage or build an opensource application under GPLv2 license (cause OsmAnd is not a platform and all the code built on top of the core must be also licensed as GPL).

If you want to build an application for internal usage, please contact <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, in some cases exemption from GPLv2 cody copyrighted by OsmAnd BV are provided. For the rest of the code please double check the list from the [LICENSE](https://github.com/osmandapp/Osmand/blob/master/LICENSE) which consists only of permissive licenses (LGPL, MIT, Apache).

In case of any question, please don't hesitate to contact <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. We also will be happy to provide help from experienced OsmAnd developers to build a special purpose app.


## Contact us for development
In case you have are not sure which case fits you the most or you would like to ask help from developers who has experience in building application integrated with OsmAnd, please don't hesitate to contact us <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!
