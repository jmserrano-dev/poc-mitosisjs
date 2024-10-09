const fs = require("fs");
const path = require("path");

function findFile(startPath, targetFile) {
  if (!fs.existsSync(startPath)) {
    console.log("Directory not found:", startPath);
    return null;
  }

  let result = null;

  function searchDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        searchDirectory(filePath);
      } else if (stat.isFile() && file === targetFile) {
        result = filePath;
        return;
      }
    }
  }

  searchDirectory(startPath);
  return result;
}

function injectCssPlugin(basePath) {
  return () => ({
    json: {
      pre(definition) {
        const importCssLocalPath = path.basename(
          definition.meta?.useMetadata?.importCSS
        );

        const importCssPath = findFile(`${process.cwd()}/${basePath}`, importCssLocalPath)

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
