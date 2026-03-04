import pool from '../config/db.js';

export const createUser = async(firstName, lastName, email, dob, passwordHash, role) => {
    const result = await pool.query(
        `INSERT INTO users (first_name, last_name, email, dob, password_hash),
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [firstName, lastName, email, dob, passwordHash, role]
    );
    return result.rows[0];
};

export const findUserByEmail = async(email) => {
    const result = pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );
    return result.rows[0];
};

export const updateLastLogin = async(userId) => {
    const result = pool.query(
        `UPDATE users SET last_login = CURRENT_TIMESTAMP
        WHERE user_id=$1`,
        [userId]
    );
};

export const findUserById = async(userId) => {
    const result = pool.query(
        `SELECT first_name, last_name, email, dob, role, created_at, last_login
        FROM users WHERE user_id = $1`,
        [userId]
    );
    return result.rows[0];
};

export const deleteUser = async(userId) => {
    const result = pool.query(
        `DELETE FROM users WHERE user_id = $1`,
        [userId]
    );
    return result.rows[0];
};

export const findUsersByIds = async(userId) => {
    const result = pool.query(
        `SELECT user_id, first_name, last_name, email, role
        FROM users WHERE user_id = $1`,
        [userId]
    );
    return result.rows;
};