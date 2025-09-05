const fs = require("fs-extra");

module.exports = OsmAndHelpStructureGenerator;

const BASE_URL = "/docs/"; // relative or absolute URL to include into JSON articles

const DOC_PATH = "./docs/"; // path to docs files when yarn build started
const JSON_OUTPUT_FILE = "./static/help-structure.json"; // JSON file with the Help Structure

// repository-maintained files with help links
const IOS_LINKS_JSON = "./static/help-links-ios.json";
const ANDROID_LINKS_JSON = "./static/help-links-android.json";

/**
 * Helper function to recursively filter sidebar items.
 * - Removes 'doc' items if their ID is in unlistedDocIds.
 * - Recursively filters items for 'category' type.
 * - Prunes categories that become empty AND ( (do not have a link) OR (their link is to an unlisted doc) ).
 * @param {Array<Object>} itemsToFilter - The array of sidebar items to filter.
 * @param {Set<string>} unlistedDocIds - A Set of document IDs that are unlisted.
 * @returns {Array<Object>} The filtered array of sidebar items.
 */
function filterUnlistedSidebarItems(itemsToFilter, unlistedDocIds) {
  if (!itemsToFilter) {
    return [];
  }
  return itemsToFilter
    .map(item => {
      if (item.type === 'doc' && unlistedDocIds.has(item.id)) {
        return null; // Mark doc for removal
      }

      if (item.type === 'category') {
        const newSubItems = filterUnlistedSidebarItems(item.items, unlistedDocIds);

        // Prune category if it becomes empty of children AND
        // (it has no link OR its link is to an unlisted doc)
        if (newSubItems.length === 0) {
          if (!item.link || (item.link.type === 'doc' && unlistedDocIds.has(item.link.id))) {
            return null; // Prune category
          }
        }

        // If it has listed children, keep it.
        return { ...item, items: newSubItems };
      }
      return item;
    })
    .filter(Boolean);
}

async function OsmAndHelpStructureGenerator(props) {
  let isTranslatedDocs = false;
  const unlistedDocIds = new Set();
  const items = await props.defaultSidebarItemsGenerator(props);

  if (props.docs) {
    props.docs.forEach(doc => {
      if (doc.source && doc.source.includes('/i18n/')) {
        isTranslatedDocs = true;
      }
      if (doc.frontMatter && doc.frontMatter.unlisted === true) {
        unlistedDocIds.add(doc.id);
      }
    });
  }

  if (isTranslatedDocs) {
    return items; // avoid the translated help-structure.json
  }

  const languages = new Set(['en']);
  await fetchLanguagesFromConfig(languages);

  const articles = [];
  const filteredItems = filterUnlistedSidebarItems(items, unlistedDocIds);
  traverseItems(articles, filteredItems);

  flushArticlesIntoStaticDir(articles, languages);
  // articles.forEach((i) => console.log(i)); // debug

  return items;
}

async function fetchLanguagesFromConfig(languages) {
  const { i18n } = await require('../docusaurus.config')();
  i18n.locales.forEach(locale => { languages.add(locale); });
}

function flushArticlesIntoStaticDir(articles, languagesSet) {
  const prettyJSON = (smth) => JSON.stringify(smth, null, 2);

  const ios = JSON.parse(fs.readFileSync(IOS_LINKS_JSON, { encoding: "utf8" }));
  const android = JSON.parse(fs.readFileSync(ANDROID_LINKS_JSON, { encoding: "utf8" }));

  const helpStructure = {
    languages: Array.from(languagesSet.keys()),
    articles,
    android,
    ios,
  };

  fs.writeFileSync(JSON_OUTPUT_FILE, prettyJSON(helpStructure), { encoding: "utf8" });
}

// traverse items array
function traverseItems(articles, items, level = 1) {
  items.forEach((i) => {
    i && dumpItem(articles, i, level); // dump current item
    i && i.items && traverseItems(articles, i.items, level + 1); // recurse
  });
}

// dump one category/article
function dumpItem(articles, item, level) {
  const { id } = item.link ?? item; // categories get { id } from `item.link` but articles get from `item` directly

  if (id === undefined) {
    const emptyArticle = {
      level,
      type: item.type,
      label: item.label
    };
    articles.push(emptyArticle);
    return; // some categories might not have dedicated page/id
  }

  const type = item.type;
  const file = DOC_PATH + id + ".md";
  const { title, ios, android } = readTitleAndOsFlags(file, id);
  const label = item.label ?? title; // label might be not available, so read it from the file
  const url = (BASE_URL + id).replace(/\/index$/, ""); // remove extra /index from the tail (uri/index -> uri)

  const article = {
    level,
    type,
    label,
    url,
  };

  // allow flags (android|ios): (true|false) in md-files
  android !== undefined && (article.android = android);
  ios !== undefined && (article.ios = ios);

  articles.push(article);
}

// read Title and OS-flags from md/mdx
function readTitleAndOsFlags(file, id) {
  fs.existsSync(file) || (file += "x"); // .md -> .mdx
  const input = fs.readFileSync(file, { encoding: "utf8" });

  const headings = input.split(/[\r\n]/).filter((l) => l.match(/^(title:|#) /));

  const flags = {
    android: undefined,
    ios: undefined,
  };

  const hasHeadings = headings && headings.length > 0;
  const title = hasHeadings ? headings[0] : id;

  if (!hasHeadings) {
    flags.android = flags.ios = false; // hide headless files on both platforms
  }

  input.split(/[\r\n]/).forEach((l) => {
    const fields = l.match(/^(android|ios)\s*:\s*(true|false)/i);
    if (fields && fields.length === 3) {
      flags[fields[1]] = fields[2].toLowerCase === "true";
    }
  });

  return {
    title: title // cleanup title:|#, spaces, and quotes
      .replace(/^.*? +/, "")
      .replace(/^"/, "")
      .replace(/"$/, ""),
    android: flags.android,
    ios: flags.ios,
  };
}
