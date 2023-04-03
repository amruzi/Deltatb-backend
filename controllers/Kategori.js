import kategori from "../models/KategoriModel.js";

export const getKategori = async(req, res) => {
    try {
        const response = await kategori.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKategoriId = async(req, res) => {
    try {
        const response = await kategori.findOne({
            where:{
                id: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKategori = async(req, res) => {
    try {
        await kategori.create(req.body);
        res.status(201).json({msg: "Kategori berhasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKategori = async(req, res) => {
    try {
        await kategori.update(req.body, { where: {id: req.params.id} });
        res.status(200).json({msg: "Kategori berhasil diperbarui"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKategori = async(req, res) => {
    try {
        await kategori.destroy({ where: {id: req.params.id} });
        res.status(200).json({msg: "Kategori berhasil dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}