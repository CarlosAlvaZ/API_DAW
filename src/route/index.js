const {Router} = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.json({"Título":"Bienvenidos a nuestra API"});
});

router.get('/prueba', (req, res) =>{
    const data = {
        "Nombre": "Eduardo",
        "Música": "Heavy Metal"
    }
    res.json({data});
});


module.exports = router;

