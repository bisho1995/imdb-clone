import config from 'config';
import mysql from 'mysql';

const con = mysql.createConnection({
  host: config.get('mysql.host'),
  user: config.get('mysql.user'),
  password: config.get('mysql.password'),
  database: config.get('mysql.database'),
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql database!');
});

export default con;
