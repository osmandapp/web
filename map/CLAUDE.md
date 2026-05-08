# OsmAnd Web — Agent Guide

## Project architecture

The app has two independent parts: **left menu** and **map**. They share state only via React context — menu components must never call Leaflet directly, and map layers must never render menu UI.

**Left menu** — panels in `src/menu/`. All panel components are **always mounted** simultaneously in `MainMenu.js`; visibility is toggled via `display: block/none` — panels are never unmounted. Switching panels triggers a React Router `navigate()`, but does not mount/unmount components. State is preserved through multiple layers: URL (pathname + search params, read via `useLocation`/`useSearchParams`), `lastMenuUrlsRef` (caches the last visited URL per panel so re-opening restores exact state), `AppContext.pageParams` (in-memory URL cache per menu type), and localStorage (visible tracks, sort preferences, map settings).

**InfoBlock** (`src/infoblock/`) — right-side detail panel that opens when the user selects a track, waypoint, POI, or shared file. Rendered inside `MainMenu`'s persistent Drawer; width stored in `ctx.infoBlockWidth`. Content is determined by AppContext state: `selectedGpxFile` + `currentObjectType` → `TrackContextMenu`; `selectedWpt` → `WptDetails`; `shareFile` → `ShareFileMenu`. Visibility is controlled via `showInfoBlock` bool passed from `GlobalFrame`. Closing InfoBlock clears the relevant context fields and collapses the Drawer.

**Map** — Leaflet instance in `src/map/`. Multiple layers (TrackLayer, FavoriteLayer, PoiLayer, WeatherLayer, etc.). Map reacts to context changes, not to direct calls from menu.

**Routing** — all routes nested under `/map`. Defined in `App.js`. Pattern: `/map/<section>/` with nested children. Example: `/map/account/garmin`.

## Key directories

| Path | Purpose |
|---|---|
| `src/context/` | Shared state: `AppContext.js`, `LoginContext.js`, `FavoriteStorage.js`, `LocalTrackStorage.js` |
| `src/frame/components/` | Reusable UI components — always check here before creating new ones |
| `src/manager/` | Business logic: `GlobalManager.js` (route constants, sizes), `LoginManager.js`, `TracksManager.js`, etc. |
| `src/menu/` | Left menu panels per feature (tracks, favorites, search, navigation, weather, settings…) |
| `src/map/` | Leaflet map, layers, markers |
| `src/login/` | Auth UI, account, purchases, third-party integrations (Garmin) |
| `src/dialogs/` | Modal dialogs and `dialog.module.css` |

## Contexts

- `AppContext` — app-wide state: tracks, groups, visible layers, map settings
- `LoginContext` — user, account info, login state; use `INIT_LOGIN_STATE` guard before rendering user-specific UI

## Ready-made components (src/frame/components/)

Always reuse. Never create a new component if one already exists.

## Translations

All user-visible strings must use `useTranslation`. Never hardcode display strings in JSX.

**Key resolution order — always check in this order:**

1. `src/resources/translations/en/translation.json` — shared Android/iOS keys, no namespace prefix. Use as-is: `t('shared_string_author')`.
2. `src/resources/translations/en/web-translation.json` — web-only keys, use `web:` prefix: `t('web:my_key')`.

If the key already exists in `translation.json` — use it as-is without `web:`. Only add a new key to `web-translation.json` if it does not exist in `translation.json`.

## Route constants

Defined in `src/manager/GlobalManager.js`. Always import from there, never hardcode paths.

---

# General Rules

## No timers

Never use `setTimeout`, `setInterval`, or `clearInterval` unless explicitly asked or there is absolutely no other way. Always look for a lifecycle-based alternative first (e.g. `useEffect` on the right component, callbacks, React state).

## Look for existing patterns first

Before implementing anything — rendering, styling, data passing, formatting — search the codebase for an analogous place that already solves the same problem. Use that pattern. Never invent a custom solution when one already exists.

Examples: HTML in translations → use `<Trans>`, bold text → `<strong>` in the translation key, dialog styles → copy from `ImportFavoriteDialog`, scroll layout → copy from `LoginMenu`.

# Code Style

## Component file structure

1. Imports
2. Constants
3. Exported named functions — before `export default function`
4. `export default function ComponentName()` — main component
5. Private helpers — after the component

## Hook order inside component

1. Contexts (`useContext`)
2. Translation (`useTranslation`)
3. Hooks (`useNavigate`, `useWindowSize`, `useLocation`…)
4. `useState`
5. `useCallback`, `useEffect`, `useMemo`
6. Derived values / handlers
7. `return`

## Styling

Prefer CSS modules. Put styles in the corresponding `.module.css` file.

Use `sx={{...}}` or `style={{...}}` only for dynamic runtime values (e.g. `height` from a hook).

## Minimize props, maximize encapsulation

Keep the number of props as small as possible. If a component can get data from context or derive it internally — do so instead of passing it from outside. The simpler and more self-contained a component is, the better.

## Blank line before return

If a function is longer than 2 lines, add a blank line before `return`.

## No unnecessary arrow function wrappers

Pass functions directly instead of wrapping them in arrow functions.

## No unnecessary variable aliases

Do not create a local variable just to rename a context or prop value. Use the source directly.

## Optional chaining

Use `?.` whenever a value may be `null` or `undefined`. Avoid `&&`-chains for property access.

## Avoid code duplication

Before writing anything — check if it already exists. Extract shared logic into modules, pass data that's already fetched instead of re-fetching it.

## No unnecessary refactoring

When asked to make a focused change — fix a bug, add a feature, rename something — do exactly that and nothing else. Do not restructure surrounding code, rename unrelated variables, reorder logic, or "clean up" things that weren't part of the request. Unrelated changes make diffs harder to review and can introduce bugs.

## Never remove existing comments

Do not delete inline comments or block comments that already exist in code you are editing, even if they seem obvious or redundant. Comments represent the author's intent and are part of the code's documentation.

## No 1-liner if-statements with multiple conditions

Avoid collapsing an `if`-statement to a single line when the condition contains more than one logical operator (`&&` or `||`). Always use a block body in that case. Single-condition 1-liners are fine: `if (!group) return;`.

## refs — last resort

Use `useRef` / `ref` only when the problem **cannot be solved any other way**. Always look for a solution via state, context, props, or derived values first. A `ref` is acceptable only when all other options are unsuitable (e.g. direct DOM node access, storing a value without triggering a re-render).
