import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// backend/database/connection.js


const connection = await open({
    filename: "users.db",
    driver: sqlite3.Database
});

export default connection;