const multer = require('multer');
const {resolve, extname} = require('path');
const crypto = require('crypto');

module.exports = (() => {
  return {
    storage: multer.diskStorage({
    destination: resolve(__dirname, 'imagens', 'uploads'),
    filename: (req, file, cb) => {
        crypto.randomBytes(16, async (err, res) => {
          if (err) return cb(err);
          const time = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}-`;
          await cb(null, String(time) + res.toString('hex') + extname(file.originalname));
        });
      },
    })
}
})();