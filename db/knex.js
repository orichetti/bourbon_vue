const knex = require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: './server/routes/Bourbon.db',
        useNullAsDefault: true
    }
});
module.exports = connectedKnex;