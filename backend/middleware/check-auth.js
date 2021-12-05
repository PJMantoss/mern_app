module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' '); // Authorization: 'Bearer TOKEN'
};