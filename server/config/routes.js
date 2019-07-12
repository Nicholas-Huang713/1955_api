const peoples = require('../controllers/peoples');

module.exports = (app) => {
    app.get("/", peoples.index)
    app.get('/new/:name', peoples.addName)
    app.get("/remove/:name", peoples.removeName)
    app.get('/:name', peoples.details)
};