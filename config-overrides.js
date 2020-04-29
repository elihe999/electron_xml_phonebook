const {
    override,
    fixBabelImports,
    addDecoratorsLegacy,
    // addLessLoader,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
} = require("customize-cra");
const path = require("path");


module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
    }),
);
