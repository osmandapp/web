const fs = require("fs-extra");

module.exports = OsmAndHelpStructureGenerator;

const BASE_URL = "/docs/"; // relative or absolute URL to include into JSON articles

const DOC_PATH = "./docs/"; // path to docs files when yarn build started
const JSON_OUTPUT_FILE = "./build/help-structure.json"; // JSON file with the Help Structure
const BUILD_DIR_READY_TRIGGER = "./build/assets"; // trigger file/dir that indicates that build dir is ready

// repository-maintained files with help links
const IOS_LINKS_JSON = "./static/help-links-ios.json";
const ANDROID_LINKS_JSON = "./static/help-links-android.json";

async function OsmAndHelpStructureGenerator(props) {
  const items = await props.defaultSidebarItemsGenerator(props);

  const articles = [];
  traverseItems(articles, items);
  flushArticlesIntoBuildDir(articles);
  // articles.forEach((i) => console.log(i)); // debug

  return items;
}

// Docusaurus cleanups the ./build dir instantly after this module called.
// That is the reason why flushing JSON file into ./build/ immediately is a wrong way.
// Docusaurus does not have API to connect custom sidebar generator with the later-on build process.
// As a result, cycle of setTimeout() is used to wait for "trigger" file in the build dir to assure that build is started.
function flushArticlesIntoBuildDir(articles) {
  const prettyJSON = (smth) => JSON.stringify(smth, null, 2);

  const ios = JSON.parse(fs.readFileSync(IOS_LINKS_JSON, { encoding: "utf8" }));
  const android = JSON.parse(
    fs.readFileSync(ANDROID_LINKS_JSON, { encoding: "utf8" })
  );

  const helpStructure = {
    articles,
    android,
    ios,
  };

  function flush() {
    if (fs.existsSync(BUILD_DIR_READY_TRIGGER)) {
      fs.writeFileSync(JSON_OUTPUT_FILE, prettyJSON(helpStructure), {
        encoding: "utf8",
      });
      return;
    }
    setTimeout(flush, 1000);
  }
  setTimeout(flush, 1000);
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
  const title = (headings && headings.length > 0 && headings[0]) ?? id;

  const flags = {
    android: undefined,
    ios: undefined,
  };

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
