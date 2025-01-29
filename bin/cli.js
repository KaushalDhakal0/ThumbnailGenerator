#!/usr/bin/env node

const { generateThumbnail } = require("../src/index");
const path = require("path");

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Usage: thumbnail-gen <file-path>");
  process.exit(1);
}

const filePath = path.resolve(args[0]);
generateThumbnail(filePath)
  .then((thumbnailPath) => console.log("Thumbnail saved at:", thumbnailPath))
  .catch((err) => console.error("Error:", err));
