import db from './connection.js';
import bcrypt from 'bcrypt';

const deleteMode = process.argv.includes('delete');

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users;`);
}

// DDL
await db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT CHECK(role IN ('ADMIN', 'STAFF', 'USER')) DEFAULT 'USER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

// Seeding
if (deleteMode) {
    const hashed = await bcrypt.hash('123', 10);
    await db.run(
        `INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)`,
        ['Kristoffer', 'krgi0001@example.com', hashed, 'ADMIN']
    );
}

process.exit();