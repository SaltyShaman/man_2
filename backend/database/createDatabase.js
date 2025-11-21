import db from './connection.js';


// backend/database/createDatabase.js



const deleteMode = process.argv.includes('delete');

if (deleteMode) {
    db.exec(`DROP TABLE IF EXISTS users;`);
}

// DDL
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT CHECK( role IN ('ADMIN', 'STAFF', 'USER') ) DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);


//seeding
if (deleteMode) {
    db.run(`INSERT INTO users (username, role) VALUES ('Kristoffer', 'STAFF');`);
}

console.log("Database initialized.");
process.exit();