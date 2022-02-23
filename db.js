const mysql = require('mysql2/promise');

const createConnection = async () => {
	return await mysql.createConnection({
		host: 'localhost',
		user: 'demo',
		password: '4321',
		database: 'whats'
	});
}

const getReply = async (keyword) => {
	const connection = await createConnection();
	const [rows] = await connection.execute('SELECT resposta FROM chatbot WHERE pergunta = ?', [keyword]);
	if (rows.length > 0) return rows[0].resposta;
	return false;
}

const getUser = async (user) => {
	const connection = await createConnection();
	const [rows] = await connection.execute('SELECT user FROM user WHERE user = ?', [user]);
	if (rows.length > 0) return rows[0].message;
	return false;
}

const setUser = async (user) => {
	const connection = await createConnection();
	const [rows] = await connection.execute('INSERT INTO user SET user = ?', [user]);
	if (rows.length > 0) return rows[0].message;
	return false;
}

module.exports = {
	createConnection,
	getReply,
	getUser,
	setUser
}