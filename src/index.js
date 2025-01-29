const fs = require("fs");
const path = require("path");
const { convertToImage } = require("./converter");

/**
 * Generate thumbnails for documents and images.
 * @param {string} filePath - Path to input file (PDF, DOCX, XLS, Image).
 * @param {string} outputDir - Directory to save the output thumbnails.
 * @returns {Promise<string>} - Path to the generated thumbnail.
 */
const generateThumbnail = async (filePath, outputDir = "thumbnails") => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  try {
    const pngPath = await convertToImage(filePath, outputDir);
    console.log(`✅ Thumbnail generated: ${pngPath}`);
    return pngPath;
  } catch (error) {
    console.error("❌ Error generating thumbnail:", error);
    throw error;
  }
};

module.exports = { generateThumbnail };
