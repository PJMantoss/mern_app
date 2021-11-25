const multer = require('multer');
const {v4: uuidv4} = require('uuid');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
};

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({}),
    filename: (req, file, cb) => {}
});

module.exports = fileUpload;