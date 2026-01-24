
const baseValidator = (req, res, next) => {

    const actualApiKey = req.headers["x-api-key"];
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) next();
    
    if (apiKey !== actualApiKey) {
        return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
    }
   
    next();

}
export default baseValidator;