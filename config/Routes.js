import express from "express";
import {
    getKategori,
    getKategoriId,
    createKategori,
    updateKategori,
    deleteKategori
} from "../controllers/Kategori.js";

import {
    getBarang,
    getBarangId,
    createBarang,
    updateBarang,
    deleteBarang
} from "../controllers/Barang.js";

const router = express.Router();

//Kategori
router.get('/kategori', getKategori);
router.get('/kategori/:id', getKategoriId);
router.post('/kategori', createKategori);
router.patch('/kategori/:id', updateKategori);
router.delete('/kategori/:id', deleteKategori);

//Barang
router.get('/barang', getBarang);
router.get('/barang/:id', getBarangId);
router.post('/barang', createBarang);
router.patch('/barang/:id', updateBarang);
router.delete('/barang/:id', deleteBarang);

export default router;