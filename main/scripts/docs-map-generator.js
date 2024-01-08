const fs = require("fs-extra");

module.exports = OsmAndDocMapGenerator;

const PATH = "./docs/";
const URL = "https://osmand.net/docs/";
const docmapFile = "./build/docmap.json";
const buildDirReadyTrigger = "./build/assets";

async function OsmAndDocMapGenerator(props) {
  const items = await props.defaultSidebarItemsGenerator(props);

  const docmap = [];
  traverseItems(docmap, items);
  flushDocMapIntoBuildDir(docmap);
  // docmap.forEach((i) => console.log(i)); // debug

  return items;
}

// wait until ./build ready before flush
function flushDocMapIntoBuildDir(docmap) {
  const prettyJSON = (smth) => JSON.stringify(smth, null, 2);
  function flush() {
    if (fs.existsSync(buildDirReadyTrigger)) {
      fs.writeFileSync(docmapFile, prettyJSON(docmap), { encoding: "utf8" });
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
  const file = PATH + id + ".md";
  const label = item.label ?? readTitle(file, id); // label might be not available, so read it from the file
  const url = (URL + id).replace(/\/index$/, ""); // remove extra /index from the tail (uri/index -> uri)

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
