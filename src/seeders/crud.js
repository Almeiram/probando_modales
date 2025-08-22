import { pool } from "../database/conexion_db.js";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json);

app.get("/modals", async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM modals`);

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
});

app.get("/modals/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(`SELECT * FROM modals WHERE id = ?`, [id]);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
});

app.post("/modals", async (req, res) => {
  try {
    const { id, nombre, identificacion, historial } = req.body;

    const query = `INSERT INTO modals
        (id,nombre,identificacion,historial) VALUES (?,?,?,?)`;

    const values = {
      id,
      nombre,
      identificacion,
      historial,
    };

    const [result] = await pool.query(query, values);
    res.status(201).json({
      mensaje: "esta en estado exitoso",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
});
app.listen(3000, () => {
    console.log("servidor prepado correctamente en http://localhost:3000");
});