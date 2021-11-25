const multer = require('multer');

const MIME_TYPE_MAP = {};

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({});
});

module.exports = fileUpload;