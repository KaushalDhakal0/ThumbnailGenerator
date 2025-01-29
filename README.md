# Thumbnail Generator

A powerful CLI and programmatic tool for generating thumbnails from various document formats, including PDFs, DOCX, and images. Built with performance and design principles in mind.

## Installation

To install the package globally, run:

```sh
npm install -g .

Usage
Generate a Thumbnail Using CLI
You can generate a thumbnail from a file using the CLI:

```sh
thumbnail-gen path/to/file.pdf


Use Programmatically in Another Project
You can also use the package programmatically in your JavaScript projects:

const { generateThumbnail } = require("thumbnail-generator");

(async () => {
  const thumbnailPath = await generateThumbnail("path/to/document.pdf");
  console.log("Thumbnail created at:", thumbnailPath);
})();


Performance & Design Improvements
✅ Parallel Execution: Uses async/await for better non-blocking execution.
✅ Uses Sharp Instead of ImageMagick: Faster, optimized image processing.
✅ Modular Design: Components are well-separated (conversion, image processing, CLI).
✅ Cross-Platform: Works on Linux, macOS, and Windows (if LibreOffice is installed).
✅ Error Handling: Handles missing files, invalid formats, and failed conversions.
Future Enhancements
✅ Support for additional formats like PPTX.
✅ Option for different thumbnail sizes via CLI flags.
✅ Web API endpoint for remote document processing.


Contributing
If you’d like to contribute to this project, please fork the repository and submit a pull request. We welcome any feedback and contributions!


### Notes
1. Replace any placeholders (like `path/to/file.pdf`) with actual examples or usage scenarios that fit your package.
2. Add any additional sections (like Contributing or License) that you feel are necessary for your project.
3. Include any relevant links or documentation that users may find useful.

Let me know if you need any more adjustments!
