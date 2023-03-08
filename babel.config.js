module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  // add the below line
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
  ],
  // this should be always last line
};
