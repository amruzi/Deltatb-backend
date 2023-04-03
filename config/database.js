import Seq from "sequelize";

const db = new Seq('deltatb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;