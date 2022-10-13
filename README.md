Esta es la implementación de la API solicitada.

Para poder hacer uso de ella y realizar peticiones será necesario correrla de forma
local, para lo que se indican los siguientes pasos.

1 - Dentro de la carpeta .\API (el directorio del presente proyecto) y con Node.js previamente instalado,
    correr el comando:
        npm i
    Este comando instalará todas las dependencias necesarias para correr el servidor.

2 - Posterior a esto, para inicializar la API, digitar el comando:
        npm run dev
    La funcion de este comando es referenciar al script del mismo nombre declarado en el package.json 
    que inicializa el comando: nomdemon src/index.js

3 - Una vez realizado lo anterior, ya es posible realizar peticiones a la API, para lo cual se sugiere 
    abrir una pestaña en algún navegador y digitar en la barra de direcciones lo siguiente:
        http://localhost:3000
    
    Luego, para acceder a los datos, se deberá escribir lo siguiente en la barra de direcciones:
        http://localhost:3000/api/juegos