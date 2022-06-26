require("dotenv").config();
const app = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
    app.listen(process.env.PORT || 3001, async () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
});