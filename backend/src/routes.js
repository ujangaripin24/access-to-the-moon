module.exports = (app) =>{
    app.post('/register', (req, res)=>{
        res.send({
            message: `Selamat ${req.body.email} akun ada telah terdaftar!!silahkan login`
        })
    })
}
