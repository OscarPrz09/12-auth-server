const express = require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();


// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// CORS
app.use( cors() );

// Rutas
app.use( '/api/auth', require('./routes/auth') );

//Manejo demas rutas
app.get('*', (req, res ) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html'));
} )

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

