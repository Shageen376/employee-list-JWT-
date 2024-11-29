const jwt = require('jsonwebtoken');

function extractToken(req) {
	const authHeader = req.headers["authorization"];
	if (authHeader && authHeader.startsWith("Bearer "))
		return authHeader.split(" ")[1];
	return null;
}

const verifyToken = (req, res, next) => {
		const token = extractToken(req)
		if (!token)
			return res.status(400).json({ success: false, message: "No token found", data: null })
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.id = decoded.id
			next()
		} catch (err) {
			return res.status(400).json({ success: false, message: "Invalid token", data: null });
		}
};
module.exports = { verifyToken };
