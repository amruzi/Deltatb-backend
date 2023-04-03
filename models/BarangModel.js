import Seq from "sequelize";
import db from "../config/database.js";
import kategori from "./KategoriModel.js";

const Barang = db.define('barang', {
    nama: Seq.STRING,
    tipe: Seq.STRING,
    stock: Seq.INTEGER.UNSIGNED,
    harga_beli: Seq.INTEGER.UNSIGNED,
    harga_jual: Seq.INTEGER.UNSIGNED,
},{
    freezeTableName:true,
});

kategori.hasOne(Barang);

export default Barang;

(async()=>{
    await db.sync();
})();