exports.home = (req, res) =>{
    res.render('index');
};
exports.respostaform = (req, res) => {
    res.send(`Beleza!<br>${req.body.nome}`);
};  