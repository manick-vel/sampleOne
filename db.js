import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'root@localhost',
  user: 'root',
  password: '',
  database: 'sampleone',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default db;