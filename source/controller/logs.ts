import { Request, Response, NextFunction } from 'express';
import mysql from "mysql2/promise";


// getting all logs
const getLogs = async (req: Request, res: Response, next: NextFunction) => {
  console.log("LogController - getLogs()");
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password1!",
    database: "logs"
  });
  const queryString = `SELECT * FROM logs.logs;`;
  db.execute(queryString).then(data => {
    res.send(data[0])
  });
};

// adding a log
const addLogs = async (req: Request, res: Response, next: NextFunction) => {
  console.log("LogController - addLogs()");
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password1!",
    database: "logs"
  });

  req.body.books.forEach((log: any)=> {
    const queryString = `INSERT INTO logs.logs (title, author, genres) VALUES ('${log.title}', '${log.author}', '${log.genres}');`;
    db.query(queryString);
  });
};

export default { getLogs, addLogs };