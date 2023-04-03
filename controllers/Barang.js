import barang from "../models/BarangModel.js";

export const getBarang = async(req, res) => {
    try {
        const response = await barang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBarangId = async(req, res) => {
    try {
        const response = await barang.findOne({
            where:{
                id: req.params.id,
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBarang = async(req, res) => {
    try {
        await barang.create(req.body);
        res.status(201).json({msg: "Barang berhasil ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBarang = async(req, res) => {
    try {
        await barang.update(req.body, { where: {id: req.params.id} });
        res.status(200).json({msg: "Barang berhasil diperbarui"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBarang = async(req, res) => {
    try {
        await barang.destroy({ where: {id: req.params.id} });
        res.status(200).json({msg: "Barang berhasil dihapus"});
    } catch (error) {
        console.log(error.message);
    }
}