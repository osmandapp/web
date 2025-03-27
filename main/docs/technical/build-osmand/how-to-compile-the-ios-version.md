---
sidebar_position: 6
---

# How to Compile the iOS Version

1. Set up the **[development environment](setup-the-dev-environment.md)**
2. Install Xcode from the App Store (the last tested version is `16.2`)
3. Install Command Line Tools for Xcode:
    
    ```
    $ xcode-select --install
    ```
    Or—in case of an error—try to download and install it from Apple's website: <https://developer.apple.com/download/all/?q=xcode>

4. Log in to Xcode account (optional)
    
    In case you don't have an Apple Developer account.

    1. Open Xcode and go to _Preferences_ → _Accounts_ (via the top menu)
    2. Press the `+` button. You can log in with your Apple ID (login and password from your iOS/macOS devices). Follow Xcode instructions.
    3. _For OsmAnd team members:_ send your Apple ID login, so you will be added to the list of developers. You'll get email with an invite message—activate it.
    4. Close Xcode.

5. Install command-line tools: `cmake`, `svn`, `cocoapods`:

    ```
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    $ brew install svn
    $ brew install cmake  # tested on 3.25.2, 3.19, 3.11

    # for Intel
    $ sudo gem install cocoapods

    # for Apple silicon
    $ brew install cocoapods
    ```

6. Download and install Java JDK 17
    
    - For Intel-based Macs: <https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-x64_bin.dmg>
    - For Apple silicon Macs: <https://download.oracle.com/java/17/archive/jdk-17.0.11_macos-aarch64_bin.dmg>

7. Create a new text file or update if it exists:

    ```
    $ mkdir ~/.gradle
    $ nano ~/.gradle/gradle.properties
    ```

    1. Paste this content into it:

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

        # When configured, Gradle will run in incubating parallel mode.
        # This option should only be used with decoupled projects. More details, visit
        # http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects

        org.gradle.parallel=true
        org.gradle.caching=true

        #Fri Apr 08 18:47:31 EEST 2016
        # android.useDeprecatedNdk=true
        ```

    2. Save the file
    3. Restart your computer

8. Run `prepare.sh` to compile the Qt library and download external dependencies:

    ```
    $ cd ios
    $ ./prepare.sh
    ```

    1. **Error:** `Xcode not set up properly. You may need to confirm the license...`

        **Solution 1:** switch _Command Line Tools for Xcode_ to the Xcode app, confirm the license and switch it back:

        ```
        $ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
        $ sudo xcodebuild -license accept
        $ sudo xcode-select --switch /Library/Developer/CommandLineTools
        ```

        **Solution 2:** check if `xcrun` is available:
        
        ```
        /usr/bin/xcrun -find xcrun
        ```

        If you've got `xcrun: error: unable to find utility "xcrun", not a developer tool or in PATH`: open _Xcode → Preferences → Locations_ and in field _Command Line Tools_ select your command line tools _Xcode XX.X_ and run `./prepare.sh` again.

    2. **Error:** `CMake Error ... iphoneos is not an iOS SDK`

        **Solution:** Run:
        ```
        sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
        ```

    3. **Error:** `CMake Error at CMakeLists.txt:1 (cmake_minimum_required): CMake 3.21.2 or higher is required.  You are running version 3.11.2`

        **Solution:** Download the `.dmg` installer from the CMake website and perfom a manual installation: <https://cmake.org/download/>. Then run `./prepare.sh` again.

    4. **Error:** `Failed to configure 'qtbase-ios' for 'ios.simulator.clang.static', aborting...`

        **Solution:** Go to folder `core/externals/qtbase-ios` and delete all folders starting with `upstream`.  Then run `./prepare.sh` again.


9. Open `osmand.xcworkspace` in Xcode
10. First build

    1. Set the build target to _OsmAnd Maps_ (near Play/Stop buttons)
    2. Select your device or one of iOS simulators as the target device. Don't use the default _Any iOS Device (arm64)_!
    3. Build the project (Play button)

11. In case of build errors: clean temp files

    - Select _Product_ → _Clean Build Folder..._ in Xcode
    - Close Xcode
    - Delete the `baked` and `binaries` folders in the `OsmAnd` directory (if they exist)
    - Go to folder `core/externals/qtbase-ios` and delete all folders starting with `upstream`
    - Delete the Xcode `DerivedData` folder:
        ```
        rm -rf ~/Library/Developer/Xcode/DerivedData
        ```
    - Check that all repositories are up to date and on correct branches
    - Restart your computer (yes, it can help)
    - Run `./prepare.sh`
    - Open Xcode and try to build the project again

12. **Error:** `ld: library not found for -lOsmAndCore_static_standalone` on Apple silicon Macs

    - Open _Project Navigator_ and click on *OsmAnd_projects*
    - Click on *OsmAnd_projects* under the _PROJECT_ section
    - Open _Build Settings_ → _All_ → _Architectures_ → _Excluded Architectures_ → _Debug_
    - Add a string field of type `Any IOS Simulator SDK` with the value `arm64` (you will need to add it after each `./prepare.sh` run)
    - Build the project
    - In case of errors, follow all instructions in the previous numbered step and run `./prepare.sh` again

13. Kotlin debug addon (optional)

    Install the Kotlin Native Xcode Plugin for debugging Kotlin code. Run:

    ```
    brew install xcode-kotlin
    xcode-kotlin install
    xcode-kotlin sync
    ```

15. Qt debug addon (optional)

    If you want to see Qt values in debug mode, run:

    ```
    mkdir -p ~/qtlldb
    git clone https://github.com/gbooker/lldb-qt-formatters ~/qtlldb
    touch  ~/.lldbinit
    echo "command script import ~/qtlldb/both.py" >> ~/.lldbinit
    ```

    Then reboot your computer.
