---
sidebar_position: 5
---
import IncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

# Routing Configuration - .routing.xml

<IncompleteArticle/>

Routing.xml is a configuration file that stores multiple routing profiles. Each profile is independent and has only base OsmAnd profile as a reference that's why it's not possible to create a hierarchy of profiles and you will need to copy all rule sections. Each is fully configurable via routing.xml, it means there is no any constants in the code and all penalties are calculated using this configuration.

In the application you can use multiple custom routing.xml files and profiles you can select them in Settings -> Profile -> Navigation Settings -> Routing Settings.

Please check the documentation inside routing.xml:
- https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L24
- Other examples https://github.com/osmandapp/OsmAnd-resources/tree/master/routing


