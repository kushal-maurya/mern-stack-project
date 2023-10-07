import User from "../models/userModel.js";
import Jwt  from "jsonwebtoken";

const protectRoute = async ( req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({message: "Unauthorized "});

        const decode = Jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.userId).select("-password");

        req.user = user;

        next();
    } catch (err) {
        res.status(400).json({ message: err.message});
        console.log("Error in protectRoute: ", err.message);
    }
}

export default protectRoute;