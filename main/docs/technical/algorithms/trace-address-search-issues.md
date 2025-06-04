---
sidebar_position: 3
---

# Trace Address Search Issues {#trace-address-search-issues}

## Address Found in the Wrong City {#address-found-in-the-wrong-city}

In some cases, an address search in OsmAnd may return results for a different city than expected. These issues arise due to how city boundaries are defined and processed in OpenStreetMap (OSM). If a user searches for a **street name** or a **street with a house number** without specifying a city, the **full-text search algorithm** may return a match from another city.

### Related Issues {#related-issues}

Instances of incorrect city assignments have been reported in the following GitHub issues:
[10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10677](https://github.com/osmandapp/OsmAnd/issues/10677), [10699](https://github.com/osmandapp/OsmAnd/issues/10699), [10921](https://github.com/osmandapp/OsmAnd/issues/10921).


## How OsmAnd Identifies City Boundaries {#how-osmand-identifies-city-boundaries}

OsmAnd determines a city’s boundary using its **administrative relation** in OpenStreetMap. For a boundary to be considered valid, it must meet the following criteria:

- The **boundary relation** must include the tags:
  - **boundary** = *administrative* or *postal_code*
  - **place** = *[city, town, village, hamlet, etc.]*

- The boundary relation must contain a **relation member**:
  - **label**
  - **admin_centre** or **admin_center**
  
- The **name of the boundary relation** must exactly match the **place-node name**.

- If these conditions are not met, the boundary relation is not recognized as a city boundary.

- Among overlapping boundaries, OsmAnd selects the **largest boundary**.

- The **relation ways** define the boundary. OsmAnd supports both **inner** and **outer** ways.


## Exact Name Matching {#exact-name-matching}

For accurate address processing, **street names must match exactly**, including:

- Differences in **diacritic marks** (e.g., *Rue André Chenier* vs. *Rue André Chénier*).
- Variations in **prefixes and abbreviations**.

If a mismatch occurs, one of the following issues may arise:

- The house is **assigned to the wrong street**.
- The **same street appears multiple times** in different city boundaries.  

See GitHub issue [10036](https://github.com/osmandapp/OsmAnd/issues/10036) for an example.


## Possible Causes of Incorrect City Assignments {#possible-causes-of-incorrect-city-assignments}

### Issues in OpenStreetMap {#issues-in-openstreetmap}

1. **Broken or missing city boundaries.**

   - If city boundaries are incomplete, incorrect, or missing, address assignments may be unreliable.  
   - **Solution:** Follow the [OSM boundary fixing guide](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).  
   - Example: [10699](https://github.com/osmandapp/OsmAnd/issues/10699).

2. **City boundaries do not correctly overlap.**

   - If a street belongs to two cities but is mapped incorrectly, OsmAnd may not recognize the overlap.  
   - **Solution:** Adjust city boundaries in OpenStreetMap to ensure they correctly encompass shared streets.

3. **Missing required tags in the boundary relation.**

   - If a relation lacks essential tags such as **boundary=administrative** or **place=city**, it will not be used.  
   - Examples:  
     - Issue [10921](https://github.com/osmandapp/OsmAnd/issues/10921) (missing tags).  
     - Issue [12548](https://github.com/osmandapp/OsmAnd/issues/12548) (*Erfstadt* boundary issue).

### Issues in OsmAnd {#issues-in-osmand}

**Addresses assigned to neighboring cities.**

- Cities, towns, villages, or suburbs in proximity may **incorrectly inherit addresses** due to boundary overlaps or missing boundaries.
- This is common when cities are divided into administrative areas but lack clearly defined OSM relations.  
- See related reports: [10559](https://github.com/osmandapp/OsmAnd/issues/10559), [10679](https://github.com/osmandapp/OsmAnd/issues/10679), [10730](https://github.com/osmandapp/OsmAnd/issues/10730).


## Verification Methods {#verification-methods}

To verify and troubleshoot city boundary issues, compare results from different map tools.

### Using OpenStreetMap {#using-openstreetmap}

**Example:** Address searched: *Wolności 223, Zabrze*  

1. Open OpenStreetMap (OSM).
2. Search for **Zabrze** and select the result associated with an **administrative boundary**.  
3. View the city boundary to confirm whether the address is correctly assigned.

### Using Nominatim {#using-nominatim}

**Example:** Address searched: *Wolności 223, Zabrze*  

1. Search for the **street and house number** without specifying the city.  
2. If the search result places the address in another city, note the suggested city name.  
3. Enter the **found city name** in Nominatim.  
4. Check the **Address Rank** value:
   - Example: *Wolności, Maciejów*
   - If Maciejów is listed as *suburb/hamlet (rank 20)*, it is a smaller administrative division of another city.

**Important:** Be cautious when selecting search results, as cities with similar names may exist in different regions or countries.


## US Address Search and TIGER Data {#us-address-search-and-tiger-data}

OsmAnd uses OpenStreetMap data for address searches, with additional data sources such as **TIGER (Topologically Integrated Geographic Encoding and Referencing System)** from the U.S. Census Bureau. This dataset is range-based and does not contain precise house numbers. Some addresses may be missing or inaccurate.  

Solving issues with U.S. addresses:

1. The entered address is **split into components**: `[House Number] [Street Name]`, `[City]`, `[State]`, `[ZIP Code]`

2. The system **first checks OSM** for an exact match with house numbers and streets.

3. If **no match is found** in OSM, the system searches TIGER data, which includes:
    - Street names and classifications.
    - Interpolated house number ranges.
    - Administrative boundaries.

4. If a **house number is missing**, OsmAnd estimates its location based on nearby data.

5. **Returning results**:
    - If the address exists in OSM, an exact match is displayed.
    - If only TIGER data is available, an approximate result is provided.
    - If neither source contains the address, the search fails.


#### Types of Address Data in TIGER {#types-of-address-data-in-tiger}

| TIGER Data Type            | Usage in OsmAnd    |
|----------------------------|--------------------|
| **Street names**           | Used for name-based searches. |
| **House number ranges**    | Provides approximate address locations. |
| **ZIP Codes**              | Helps associate addresses with correct postal areas. |
| **Administrative boundaries** | Determines city and state locations. |

<br/>

#### When an Address is Found vs. Not Found {#when-an-address-is-found-vs-not-found}

| Search Scenario     | Result in OsmAnd     |
|---------------------|----------------------|
| Address exists in OSM with house number and street | ✅ Exact match |
| Address exists in TIGER but lacks house numbers | ⚠️ Approximate match using interpolation |
| Address exists in TIGER but contains incorrect data | ⚠️ Partial match with errors |
| Address is missing from both OSM and TIGER | ❌ No result |


#### Limitations of TIGER Data in OsmAnd {#limitations-of-tiger-data-in-osmand}

Several factors affect the accuracy of address searches in the TIGER-based system:

- **Missing house numbers**. Many addresses in TIGER rely on **interpolation**, leading to approximate locations.
  
- **Outdated street names**. Road names in TIGER may not reflect current naming conventions in OSM.

- **ZIP Code mismatches**. Boundaries in TIGER may be incorrect, causing incorrect ZIP code assignments.

