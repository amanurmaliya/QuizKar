const errorHandler = async (err, req, res, next) => {
    
    // if we are production we are not going to show this as log we are just showing this in local environment
    if(process.env.NODE_ENV !== "production" )
    console.log("There was a error in the application", err);

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success : false,
        message,
        stack : process.env.NODE_ENV === "production" ? undefined : err.stack, // we do not want to show the stack in the production
    })
}

module.exports = errorHandler;