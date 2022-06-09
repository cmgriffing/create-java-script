#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const argv = require("yargs")(process.argv.slice(2))
  .scriptName("create-java-script")
  .usage("$0 [args]")
  .help().argv;

const scriptContents = `package ${argv.package || "myJavaScript"};

public class Main {
    public static void main(String[] args) {

    }
}
`;

const mainFilePath = path.resolve(
  process.cwd(),
  argv.location || ".",
  "main.java"
);

fs.ensureFileSync(mainFilePath);

fs.writeFileSync(mainFilePath, scriptContents);

console.log(`Java Script file created at ${mainFilePath}`);
