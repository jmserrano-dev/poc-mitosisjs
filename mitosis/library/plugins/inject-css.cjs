const fs = require("fs");
const path = require("path");

function pascalToKebab(name) {
  return name
    .split('')
    .map((letter, index) => {
      if (index === 0) {
        return letter.toLowerCase();
      }
      if (letter.toUpperCase() === letter) {
        return `-${letter.toLowerCase()}`;
      }
      return letter;
    })
    .join('');
}

function injectCssPlugin(basePath) {
  return () => ({
    json: {
      pre(definition) {
        const componentName = pascalToKebab(definition.name);

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
