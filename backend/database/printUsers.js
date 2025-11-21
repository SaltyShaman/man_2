import db from "./connection.js";

async function main() {
    try {
        const rows = await db.all("SELECT id, username, password_hash, role FROM users");

        if (rows.length === 0) {
            console.log("No users found in the database.");
        } else {
            console.log("Users in database:");
            console.table(rows);
        }
    } catch (err) {
        console.error("Error reading database:", err);
    } finally {
        process.exit();
    }
}

await main();