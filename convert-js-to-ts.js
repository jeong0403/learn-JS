const fs = require("fs");
const path = require("path");

const baseDir = "workspace/ts-refactoring";
const chapters = ["ch01", "ch02", "ch03", "ch04"];

chapters.forEach((chapter) => {
  const dirPath = path.join(baseDir, chapter);
  const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".js"));

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const tsFilePath = path.join(dirPath, file.replace(/\.js$/, ".ts"));

    const originalCode = fs.readFileSync(filePath, "utf8");
    const wrappedCode = `(() => {\n${originalCode}\n})();\n`;

    fs.writeFileSync(tsFilePath, wrappedCode, "utf8");

    console.log(`Converted: ${filePath} → ${tsFilePath}`);
  });
});
