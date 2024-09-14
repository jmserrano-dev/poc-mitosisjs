const fs = require("fs");
const path = require("path");

function injectCssPlugin(basePath) {
  return () => ({
    json: {
      pre(definition) {
        const componentName = definition.name.toLowerCase();

        const importCssLocalPath = path.basename(
          definition.meta?.useMetadata?.importCSS
        );

        const importCssPath = `${process.cwd()}/${basePath}/${componentName}/${importCssLocalPath}`;

        if (fs.existsSync(importCssPath)) {
          const cssContent = fs.readFileSync(importCssPath, "utf8");
          definition.style = cssContent;
        }
        return definition;
      },
    },
  });
}

module.exports = injectCssPlugin;
