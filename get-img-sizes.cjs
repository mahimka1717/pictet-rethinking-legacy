const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const dir = 'public/images';

fs.readdirSync(dir).forEach(file => {
  if (file.toLowerCase().endsWith('.png')) {
    try {
      const filePath = path.join(dir, file);
      const dimensions = sizeOf(filePath);
      console.log(`${file}: ${dimensions.width}x${dimensions.height}`);
    } catch (e) {
      console.log(`Ошибка с ${file}: ${e.message}`);
    }
  }
});
