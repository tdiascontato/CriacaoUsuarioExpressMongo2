exports.globalMiddleware=(req, res, next )=>{
    console.log('Middleware Global');
    next();
};

exports.checkCsrfError = (err, req, res, next) =>{
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.send('ERRO 404');
    }
};
exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
};