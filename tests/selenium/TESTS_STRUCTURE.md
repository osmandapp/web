# Selenium Tests Structure

Tests are organized into categories for better maintainability:

## Directory Structure

```
src/tests/
├── base/           # Basic tests (login, load site, account management)
├── tracks/         # Track management (upload, rename, delete, etc.)
├── navigation/     # Navigation and routing tests
├── favorites/      # Favorites and waypoints tests
├── weather/        # Weather functionality tests
├── search/         # Search and POI tests
├── map/            # Map context menu and marker tests
├── purchases/      # Purchase-related tests
└── plan-route/     # Route planning tests
```

## Running Tests

### All tests
```bash
yarn test                # Local server
yarn test:test           # Test server
yarn test:main           # Production server
```

### By category (pass folder name as argument)
```bash
yarn test base           # Run all base tests
yarn test tracks         # Run all tracks tests
yarn test navigation     # Run all navigation tests
yarn test favorites      # Run all favorites tests
yarn test weather        # Run all weather tests
yarn test search         # Run all search tests
yarn test map            # Run all map tests
yarn test purchases      # Run all purchases tests
yarn test plan-route     # Run all plan-route tests
```

### Custom selection
```bash
yarn test 70-75                      # Run tests 70 through 75
yarn test *wiki*                     # Run tests matching 'wiki'
yarn test base/00-load-site.mjs      # Run specific test
```

### Options
```bash
yarn test weather --headless         # Run in headless mode
yarn test --mobile                   # Run in mobile emulation
yarn test --stop                     # Stop after first failure
yarn test --longtimeout              # Use 5 minute timeout
yarn test --list                     # List all tests
yarn test --help                     # Show help
```

## Test Categories

### base/ (8 tests)
- Site loading and basic functionality
- Login/logout tests
- Account management
- Menu navigation

### tracks/ (21 tests)
- GPX/KMZ upload and download
- Track management (rename, delete, duplicate)
- Folder operations
- Cloud sync and backup
- Track visibility and info display

### navigation/ (4 tests)
- Route calculation
- Navigation by GPX
- Route info display

### favorites/ (10 tests)
- Favorite points management
- Favorite groups
- Map markers
- Configure map settings for favorites

### weather/ (4 tests)
- Weather forecast display
- Weather actions
- Weather data visualization

### search/ (8 tests)
- Global search
- Category search
- Brand search
- POI display
- Wikipedia photos

### map/ (2 tests)
- Context menu
- Marker selection

### purchases/ (1 test)
- Purchase flow

### plan-route/ (1 test)
- Route planning with SRTM

## Development

To add a new test:
1. Create `.mjs` file in appropriate category directory
2. Number it appropriately (use next available number)
3. Test will be automatically discovered

To add a new category:
1. Create new directory in `src/tests/`
2. Add tests to the directory
3. Add script to `package.json` (optional):
   ```json
   "test:mycategory": "node src/main.mjs 'http://localhost:3000/map/#17/50.45009/30.52340' mycategory"
   ```

