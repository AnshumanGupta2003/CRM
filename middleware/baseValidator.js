
const baseValidator = (req, res, next) => {

    const apiKey = req.headers["x-api-key"];

    const actualApiKey = process.env.API_KEY;

    if (!apiKey || apiKey !== actualApiKey) {
        return res.status(401).json({ message: "Unauthorized: Invalid API Key" });
    }
   
    next();

}
export default baseValidator;