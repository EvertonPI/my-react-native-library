const path = require("path");
const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, "../src"),
];

config.resolver = {
  ...config.resolver,
  sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs", "mjs"],
  nodeModulesPaths: [
    path.resolve(__dirname, "node_modules"),
    path.resolve(__dirname, "../node_modules"),
  ],
};
config.resolver.resolveRequest = (context, realModuleName, platform) => {
  if (realModuleName.startsWith("my-react-native-library")) {
    return {
      filePath: path.resolve(__dirname, "../src/index.ts"),
      type: "sourceFile",
    };
  }
  return context.resolveRequest(context, realModuleName, platform);
};
config.resolver.extraNodeModules = {
  "my-react-native-library": path.resolve(__dirname, "../src"),
};

module.exports = config;
