import mysql from 'mysql';
import connection from '../db';

function addProducer(name, sex, dob, bio) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO producers (name, sex, dob, bio) VALUES (?,?,?,?)';
    const query = mysql.format(sql, [name, sex, dob, bio]);
    connection.query(query, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function listProducers() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id, name from producers';
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}
export default undefined;
export { addProducer, listProducers };
