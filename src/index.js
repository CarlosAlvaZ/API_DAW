const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuración
app.set('port', process.env.PORT || 3000);//Se establece una "variable" para el número de puertos
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev')); //
app.use(express.urlencoded({extended: false}));//Para soportar formularios html
app.use(express.json());//Para soportar envíos de formato json

//Rutas
app.use(require('./route/index'));
app.use('/api/Juegos',require('./route/games'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});