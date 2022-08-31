---
sidebar_position: 3
---
# How order layers, text and symbols
In OsmAnd using `order` property (`order` in the style and `baseOrder` in the code) for set on what level object will render. Is mean that a name of street is showing over the road, some icon is covering the building, shield is showing over the road.  

Lower number of the order mean that object will show above. Therefore e.g. text with order 200 will be lower of icon with order 5.  

Also OsmAnd is using negative number of the order in main for layers. Range orders for layes can be from -1200000 to 0. Therefore objects from map data are lower than objects from layers. But here present small exclude for icons and road shields. We decrease order for [icons](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2869) and road [shields](https://github.com/osmandapp/OsmAnd-core/blob/41388a1ea569c98af029a60db7ebe0db7aa34e50/src/Map/MapPrimitiviser_P.cpp#L2720) for show their above.  

There are are 2 main source of order for any objects: from style and from layer order/index.  
[Default OsmAnd style](https://github.com/osmandapp/OsmAnd-resources/blob/652b38e6d5d291f8932eb7946ded9ce787cff579/rendering_styles/default.render.xml#L3166) contains section `<order>` for set order for text, icons, line etc. from map data.  
[Layer order/index](./list-of-layers.md) is use for set order for objects that used inside this layer.

