const { PrismaClient, Prisma } = require("@prisma/client");

class MahasiswaController {
    #prisma = new PrismaClient()

    create = async (req, res, next) => {
        try {
            const { nama, nim, alamat, nomorTelepon } = req.body;
            const mhs = await this.#prisma.mahasiswa.create({
                data: {
                    nama, nim, alamat, nomorTelepon
                }
            });
            return res.status(201).json({
                message: "Berhasil",
                data: mhs
            });
        } catch (err) {
            return res.status(400).json({
                message: "Error",
                data: err.message
            });
        }
    }
    findAll = async (req, res, next) => {
        try {
            const listMhs = await this.#prisma.mahasiswa.findMany();
            return res.status(200).json({
                message: "Berhasil",
                data: listMhs
            })
        } catch (err) {
            return res.status(400).json({
                message: "Error",
                data: err.message
            });
        }
    }
    findOne = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const mhs = await this.#prisma.mahasiswa.findFirstOrThrow({ where: { id } });
            return res.status(200).json({
                message: "Berhasil",
                data: mhs
            })
        } catch (err) {
            if (err instanceof Prisma.NotFoundError) {
                return res.status(404).json({
                    message: "Data tidak ditemukan.",
                });
            }
            return res.status(400).json({
                message: "Error",
                data: err.message
            });
        }
    }
    update = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            const { nama, nim, alamat, nomorTelepon } = req.body;
            const checkMhs = await this.#prisma.mahasiswa.findFirstOrThrow({ where: { id } });
            await this.#prisma.mahasiswa.update({
                where: { id },
                data: {
                    nama, nim, alamat, nomorTelepon
                }
            });
            return res.status(200).json({
                message: 'Update data berhasil',
            })
        } catch (err) {
            if (err instanceof Prisma.NotFoundError) {
                return res.status(404).json({
                    message: "Data tidak ditemukan.",
                });
            }
            return res.status(400).json({
                message: "Error",
                data: err.message
            });
        }
    }
    removeOne = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id);
            await this.#prisma.mahasiswa.delete({ where: { id } });
            return res.status(200).json({
                message: 'Hapus data berhasil'
            });
        } catch (err) {
            return res.status(400).json({
                message: "Error",
                data: err.message
            });
        }
    }
}

module.exports = new MahasiswaController()