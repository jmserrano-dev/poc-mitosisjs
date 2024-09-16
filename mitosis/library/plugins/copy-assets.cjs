const fs = require("fs");
const path = require("path");

function copyAssetsPlugin(options = {}) {
  return () => ({
    code: {
      post: (code, _context) => {
        const { source, destination } = options;

        if (!source || !destination) {
          console.warn(
            "Source or destination not specified for copy-assets-plugin"
          );
          return code;
        }

        const copyFile = (src, dest) => {
          const destDir = path.dirname(dest);
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          fs.copyFileSync(src, dest);
        };

        const copyDir = (src, dest) => {
          if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
          }
          const entries = fs.readdirSync(src, { withFileTypes: true });
          for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              copyFile(srcPath, destPath);
            }
          }
        };

        if (fs.existsSync(source)) {
          if (fs.lstatSync(source).isDirectory()) {
            copyDir(source, destination);
          } else {
            copyFile(source, destination);
          }
          console.log(`Assets copied from ${source} to ${destination}`);
        } else {
          console.warn(`Source path ${source} does not exist`);
        }

        return code;
      },
    },
  });
}

module.exports = copyAssetsPlugin;
