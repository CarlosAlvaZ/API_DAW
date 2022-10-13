const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const games = require('../Ejemplo.json');

router.get('/', (req, res) =>{
    res.send(games);
});

router.post('/', (req,res) =>{
    const {Nombre, Plataforma, Desarrolladora, Lanzado, Estilo} = req.body;

    if(Nombre && Plataforma && Desarrolladora && Lanzado && Estilo){
        const ID = games.length + 1;
        const AgregarJuego = {ID, ...req.body };
        games.push(AgregarJuego);
        res.json(games);
    }else{
        res.send("Falta uno o más datos por enviar!");
    }
});

router.delete('/:ID', (req, res) =>{
    const { ID } = req.params;
    _.each(games, (game, i) =>{
        if(game.ID == ID){
            games.splice(i, 1);
            console.log(i);
        }
    });
    res.send(games);
});

router.put('/:ID', (req, res) =>{
    const{ID} = req.params;
    const {Nombre, Plataforma, Desarrolladora, Lanzado, Estilo} = req.body;
    if(Nombre && Plataforma && Desarrolladora && Lanzado && Estilo){
        _.each(games, (game, i) =>{
            if(game.ID == ID){
                game.Nombre = Nombre;
                game.Plataforma = Plataforma;
                game.Desarrolladora = Desarrolladora;
                game.Lanzado = Lanzado;
                game.Estilo = Estilo;
            }
        });
        res.json(games);
    }else{
        res.send("Falta uno o más datos por enviar!");
    }

});

module.exports = router; 