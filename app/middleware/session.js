module.exports = (app) => {
    const object = {};

    object.check = (req, res) => {
        if (!req.session.user) {
            res.redirect('/');
        }
    }

    object.set = (req, id) => {
        req.session.user = id;
    }

    return object;
}