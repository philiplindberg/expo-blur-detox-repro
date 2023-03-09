/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/expoblurdetoxrepro.app',
      build: 'RCT_NO_LAUNCH_PACKAGER=1 xcodebuild -workspace ios/expoblurdetoxrepro.xcworkspace -scheme expoblurdetoxrepro -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/expoblurdetoxrepro.app',
      build: 'RCT_NO_LAUNCH_PACKAGER=1 xcodebuild -workspace ios/expoblurdetoxrepro.xcworkspace -scheme expoblurdetoxrepro -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14 Pro'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5_API_32'
      }
    }
  },
  configurations: {
    'ios.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
