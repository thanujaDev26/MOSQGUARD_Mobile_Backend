import User from "../models/User.js";

export const getUserProfile = async (req, res) => {
    try{
        let user = await User.findAll()
        if(user!=null){
            return res.status(200).json({
                status: "success",
                data: user
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            status: "error",
            error: "Internal Server Error",
            message: err.message
        })
    }
}