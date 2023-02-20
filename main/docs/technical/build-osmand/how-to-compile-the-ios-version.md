---
sidebar_position: 6
---

# How to Compile the iOS Version

1. First setup the **[development environment](setup-the-dev-environment.md)**.
2. Install XCode from AppStore (Last tested 14.2)
3. Install XCode command-line tools
  ```
  $ xcode-select --install
  ```
  Or in case of errors try to download and install it from Apple site: <https://developer.apple.com/download/all/?q=xcode>.
4. Log in into XCode account (optional)
  In case if you don't have Apple Developer account. Open XCode and go to preferences (via top menu)
  ```
  Preferences -> Accounts 
  ```
  Press `+` button. You can log in with your AppleID (login and password from your iOS/macOS devices). Follow XCode instructions.
  For OsmAnd team members: send your AppleID login, so you will be added to to developers list. When you'll get email with invite message activate it.
  Close XCode.
5. Install command-line tools- cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  $ brew install svn
  $ sudo gem install cocoapods
  $ brew install cmake # tested on 3.25.2, 3.19, 3.11
  ```
6. Run prepare.sh to compile QT library and download external dependencies
  ```
  $ cd ios
  $ ./prepare.sh
  ```
  
  Error: `Xcode not set up properly. You may need to confirm the license...`.
  Solution: switch XCodeCommandLineTools to XCode app, confirm the license and switch it back.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```
  
  Solution 2: check if xcrun is available: ``` /usr/bin/xcrun -find xcrun ```. If you've got: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Then open Xcode > Preferences > Locations and in field "Command Line Tools" select your command line tools "Xcode XX.X" And run `$ ./prepare.sh` again.
  
  Solution 3: If you've got error like this: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Then download dmg installer from CMake web site and perfom manual instalation. And run `$ ./prepare.sh` again.
  ```
  https://cmake.org/download/
  ```
  
7. Open osmand.xcworkspace in XCode
8. First build.
  Set the build target to `OsmAnd Maps`. (Near play/stop buttons). Select as target your device or as one of IOS simulators. But don't use default 'Any IOS Device (arm64)'. Build the project (play button).
9. Troubleshooting.
  - In case of build errors you can press in XCode: ```Product -> Clean build folder```
  - Close XCode.  Delete `baked` and `binaries` folders in `OsmAnd` directory (if it already exists). 
  - Delete XCode DerivedData folder: ``` sudo rm -R ~/Library/Developer/Xcode/DerivedData/* ```
  - Check that all repositories are up to date and on correct branches.
  - Restart your computer. (Yes, it can help). 
  - Then run `$ ./prepare.sh` and try to build the project again.
  
10. Troubleshooting (m1 mac)
  - In case of ```ld: library not found for -lOsmAndCore_static_standalone``` add ```arm64``` to **Excluded Architectures** of ```OsmAnd_projects```. 

11. Debug QT (optional). If you want to see QT values in debug mode run this:
  ```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit
  ```
After set this parameters reboot your computer.
