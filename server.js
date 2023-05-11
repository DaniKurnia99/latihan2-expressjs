var express = require('express');
var app = express();

// import module .env
require('dotenv').config();

const port = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

// GET request
app.get('/biodata', function(req, res){
    const nama = req.query.nama;
    const tempatLahir = req.query.tempatLahir;
    const tanggalLahir = req.query.tanggalLahir;
    const alamat = req.query.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    })
})


// POST request
app.post('/biodata/', function(req, res){
    const nama = req.body.nama;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    })
})

app.listen(port);
console.log('Running on ' + port);