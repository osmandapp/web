---
sidebar_position: 3
---

# Trace Address Search Issues

## Issue: street or house is found in another city 

Examples when address was find in another city: [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).

These issues are related to the algorithm of connecting cities to its boundaries in OpenStreetMap. It can be seen if you search for STREET or STREET + HOUSE without a city name, then a full-text search will find a house from another city.

How to OsmAnd is finding a boundary (relation) to a specific city:
- Boundary Relation should have following tags **boundary** (*administrative*, *postal_code*) and **place**.
  - Boundary should have a relation member **label**, **admin_centre** or **admin_center** pointing to a place-node.
  - Boundary should have **exact same name** as place-node
  - Otherwise boundary relation is not used as a city boundary
- Among boundaries the biggest is selected 
- Ways of relation are the boundaries. Inner / outer ways are supported.

### Exact name matching
For OsmAnd Maps processing is important that street name exactly matches with or without diacritic symbols, with or without prefixes ([10036](https://github.com/osmandapp/OsmAnd/issues/10036): Rue André Chenier must be Rue André Chénier). The mismatch could lead that house will be 
associated to another street or there will be street duplications in the city.

### Possible causes

In OpenStreetMap:
- The city's boundaries are broken. How to fix [here](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
- The city has no borders ([example](https://github.com/osmandapp/OsmAnd/issues/10699)).
- City boundaries don't overlap correctly. OsmAnd must include the street in both cities. You can fix it in OpenStreetMap.
- No required tags for relation (**boundary admin type** or **place**) - [4](https://github.com/osmandapp/OsmAnd/issues/10921), [Erfstadt](https://github.com/osmandapp/OsmAnd/issues/12548).

In OsmAnd
- The address begins to belong to the neighboring city. These cities are often villages, suburbs, districts. Or belong to the general area. Github: [1](https://github.com/osmandapp/OsmAnd/issues/10559),[2](https://github.com/osmandapp/OsmAnd/issues/10679),[3](https://github.com/osmandapp/OsmAnd/issues/10730)

### Examples

Using only OSM: You found - Wolności 223 Zabrze

- Open OSM maps and write Zabrze in search. Select a search result starting with the administrative boundary.
- You will see a map with the boundaries of the selected city.

Using Nominatim: You found - Wolności 223 Zabrze

- Enter the street with the house number without specifying the city. The search results will show the desired address belonging to another city. Enter the found name of the locality in nominatim, and its type will be indicated in the Address Rank line.
- You will see Wolności Maciejów in the search results.
- Open nominatim and write Maciejów in search. Select a search result with administrative
- You will see 20 (suburb / hamlet) in the Address Rank line.
Be careful when choosing a locality in the search results. There may be duplicates or similar cities in other regions and countries.


