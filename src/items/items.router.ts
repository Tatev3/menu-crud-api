/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
const mysql2 = require("mysql2");
require("dotenv").config();
/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
// GET items

const db = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

itemsRouter.get('/', (req: Request, res: Response) => {
  res.json('hello-world');
});

itemsRouter.get('/items', (req: Request, res: Response) => {
  const q: string = 'SELECT * FROM table_crud3';
  db.query(q, (err: Error, data: any) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

itemsRouter.post('/items', (req: Request, res: Response) => {
  const q: string = 'INSERT INTO table_crud3 (name,price,description,cover) VALUES(?)';

  const values = [
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.cover
  ];

  db.query(q, [values], (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

itemsRouter.delete('/items/:id', (req: Request, res: Response) => {
  const bookId: string = req.params.id;
  const q: string = 'DELETE FROM table_crud3 WHERE id = ?';

  db.query(q, [bookId], (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

itemsRouter.put('/items/:id', (req: Request, res: Response) => {
  const bookId: string = req.params.id;
  const q: string = 'UPDATE items/table_crud3 SET name= ?, price= ?,description= ?, cover= ? WHERE id = ?';

  const values = [req.body.title, req.body.description, req.body.price, req.body.image_url];

  db.query(q, [...values, bookId], (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});