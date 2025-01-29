const { exec } = require("child_process");
const path = require("path");

/**
 * Convert a document (PDF, DOCX, XLS, etc.) to PNG using LibreOffice.
 * @param {string} inputPath - Path to the input document.
 * @param {string} outputDir - Output directory for converted images.
 * @returns {Promise<string>} - Path to the generated PNG.
 */
const convertToImage = (inputPath, outputDir) => {
  return new Promise((resolve, reject) => {
    const command = `libreoffice --headless --convert-to png --outdir "${outputDir}" "${inputPath}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) return reject(`LibreOffice conversion error: ${stderr}`);
      const fileName = path.basename(inputPath, path.extname(inputPath)) + ".png";
      resolve(path.join(outputDir, fileName));
    });
  });
};

module.exports = { convertToImage };
