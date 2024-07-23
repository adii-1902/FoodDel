import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//dotenv config
dotenv.config();
const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    // console.log(process.env.JWT_SECRET);
    // console.log('token: ', token);
    if (!token) {
        return res.json({ success: false, message: "Not authorized. Login again." });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export default authMiddleware;