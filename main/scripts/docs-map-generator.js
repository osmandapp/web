const fs = require("fs-extra");

module.exports = OsmAndDocMapGenerator;

const BASE_URL = "/docs/"; // relative or absolute URL to include into JSON docmap

const DOC_PATH = "./docs/"; // path to docs files when yarn build started
const JSON_DOCMAP = "./build/docmap.json"; // output JSON file with the Documentation Map
const BUILD_DIR_READY_TRIGGER = "./build/assets"; // trigger file/dir that indicates that build dir is ready

async function OsmAndDocMapGenerator(props) {
  const items = await props.defaultSidebarItemsGenerator(props);

  const docmap = [];
  traverseItems(docmap, items);
  flushDocMapIntoBuildDir(docmap);
  // docmap.forEach((i) => console.log(i)); // debug

  return items;
}

// Docusaurus cleanups the ./build dir instantly after this module called.
// That is the reason why flushing JSON docmap file immediately is a wrong way.
// Docusaurus does not have API to connect custom sidebar generator with the later-on build process.
// As a result, cycle of setTimeout() is used to wait for "trigger" file in the build dir to assure that build is started.
function flushDocMapIntoBuildDir(docmap) {
  const prettyJSON = (smth) => JSON.stringify(smth, null, 2);
  function flush() {
    if (fs.existsSync(BUILD_DIR_READY_TRIGGER)) {
      fs.writeFileSync(JSON_DOCMAP, prettyJSON(docmap), { encoding: "utf8" });
      return;
    }
    setTimeout(flush, 1000);
  }
  setTimeout(flush, 1000);
}

// traverse items array
function traverseItems(docmap, items, level = 1) {
  items.forEach((i) => {
    i && dumpItem(docmap, i, level); // dump current item
    i && i.items && traverseItems(docmap, i.items, level + 1); // recurse
  });
}

// dump one category/article
function dumpItem(docmap, item, level) {
  const { id } = item.link ?? item; // categories get { id } from `item.link` but articles get from `item` directly

  if (id === undefined) {
    return; // some categories might not have dedicated page/id
  }

  const type = item.type;
  const file = DOC_PATH + id + ".md";
  const label = item.label ?? readTitle(file, id); // label might be not available, so read it from the file
  const url = (BASE_URL + id).replace(/\/index$/, ""); // remove extra /index from the tail (uri/index -> uri)

  docmap.push({
    level,
    type,
    label,
    url,
  });
}

// read on title
function readTitle(file, id) {
  fs.existsSync(file) || (file += 'x'); // .md -> .mdx
  const input = fs.readFileSync(file, { encoding: "utf8" });
  const headings = input.split(/[\r\n]/).filter((l) => l.match(/^(title:|#) /));
  const title = (headings && headings.length > 0 && headings[0]) ?? id;
  return title.replace(/^.*? +/, ''); // cleanup title:|# and spaces
}
