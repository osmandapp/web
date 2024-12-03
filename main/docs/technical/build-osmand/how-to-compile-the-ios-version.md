---
sidebar_position: 6
---

# How to Compile the iOS Version

1. First setup the **[development environment](setup-the-dev-environment.md)**.
2. Install Xcode from AppStore (Last tested 14.2)
3. Install Xcode command-line tools
  ```
  $ xcode-select --install
  ```
  Or in case of errors try to download and install it from Apple site: <https://developer.apple.com/download/all/?q=xcode>.
  
4. Log in into Xcode account (optional)
  In case if you don't have Apple Developer account. Open Xcode and go to preferences (via top menu)
  ```
  Preferences -> Accounts
  ```
  Press `+` button. You can log in with your AppleID (login and password from your iOS/macOS devices). Follow Xcode instructions.
  For OsmAnd team members: send your AppleID login, so you will be added to to developers list. When you'll get email with invite message activate it.
  Close Xcode.
  
5. Install command-line tools- cmake, svn, cocoapods
  ```
  $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  $ brew install svn
  $ brew install cmake # tested on 3.25.2, 3.19, 3.11

  # for intel
  $ sudo gem install cocoapods

  # for m1
  $ brew install cocoapods
  ```
6. Download and instal Java jdk 17
  ```
  # for intel
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg

  # for m1
  https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg
  ```

7. Create new text file. Or update if it exist.
  ```
  $ mkdir ~/.gradle 
  $ nano ~/.gradle/gradle.properties
  ```

  Paste this content into it. Save file and restart computer.

```
## Project-wide Gradle settings.
#
# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html
#
# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx10248m -XX:MaxMetaspaceSize=256m
# org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

org.gradle.daemon=true

org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

#
# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects

org.gradle.parallel=true
org.gradle.caching=true

#Fri Apr 08 18:47:31 EEST 2016
# android.useDeprecatedNdk=true
```

8. Run `prepare.sh` to compile Qt library and download external dependencies
  ```
  $ cd ios
  $ ./prepare.sh
  ```
  
  Error: `Xcode not set up properly. You may need to confirm the license...`.
  Solution: switch XcodeCommandLineTools to Xcode app, confirm the license and switch it back.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  $ sudo xcodebuild -license accept
  $ sudo xcode-select --switch /Library/Developer/CommandLineTools
  ```

  Solution 2: check if xcrun is available: ``` /usr/bin/xcrun -find xcrun ```. If you've got: ``` xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH ```. Then open Xcode > Preferences > Locations and in field "Command Line Tools" select your command line tools "Xcode XX.X" And run `$ ./prepare.sh` again.

  Solution 3: Error: `CMake Error ... iphoneos is not an iOS SDK`.
  ```
  $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
  ```

  Solution 4: If you've got error like this: ``` CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2 ```. Then download dmg installer from CMake web site and perfom manual instalation. And run `$ ./prepare.sh` again.
  ```
  https://cmake.org/download/
  ```

  Solution 5: If you've got error like this: ```Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...```. Go to folded ```core/external/qtbase-ios/``` and delete all folders starting with ```upstream```.  And run `$ ./prepare.sh` again.
  
  
9. Open `osmand.xcworkspace` in Xcode
10. First build.
  Set the build target to `OsmAnd Maps`. (Near play/stop buttons). Select as target your device or as one of iOS simulators. But don't use default 'Any iOS Device (arm64)'. Build the project (play button).
11. Troubleshooting - cleaning temp files.
  - In case of build errors you can press in Xcode: ```Product -> Clean build folder```
  - Close Xcode.
  - Delete `baked` and `binaries` folders in `OsmAnd` directory (if it already exists).
  - Go to folded ```core/external/qtbase-ios/``` and delete all folders starting with ```upstream```.
  - Delete Xcode DerivedData folder: ``` rm -rf ~/Library/Developer/Xcode/DerivedData ```
  - Check that all repositories are up to date and on correct branches.
  - Restart your computer. (Yes, it can help).
  - Then run `$ ./prepare.sh`
  - Open XCode and try to build the project again.
  
12. Troubleshooting (m1 mac)
  - In case of ```ld: library not found for -lOsmAndCore_static_standalone```:
  - Project Navigator -> OsmAnd_projects -> OsmAnd_projects (in Project/Targets list) -> Build settings -> All -> Architectures -> Excluded Architectures -> Debug
  - Add string field of type ```Any IOS Simulator SDK``` with value ```arm64```. (you will need to add it after each prepare.sh run)
  - Build project. In case of errors, make all instructions from ```11. Troubleshooting - cleaning temp files.``` and ```prepare.sh``` once again.

13. Kotlin debug addon (optional)
```
$ brew install xcode-kotlin
$ xcode-kotlin sync
```

15. Qt debug addon (optional). If you want to see Qt values in debug mode run this:
  ```
$ mkdir -p ~/qtlldb
$ git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
$ touch  ~/.lldbinit
$ echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit
  ```
After set this parameters reboot your computer.
