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
export default undefined;
export { addProducer };
