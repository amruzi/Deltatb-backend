import Seq from "sequelize";
import db from "../config/database.js"

const Datatype = Seq;
const Kategori = db.define('kategori', {
    nama: Datatype.STRING,
},{
    freezeTableName:true,
});

export default Kategori;

(async()=>{
    await db.sync();
})();