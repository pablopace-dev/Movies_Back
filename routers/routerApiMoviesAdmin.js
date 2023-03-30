const express = require('express');
const router = express.Router();
const { check } = require("express-validator")
const { validarInputs } = require("../middlewares/validarInputs")

const {
    getMovies,
    getMovie,
    postMovie,
    putMovie,
    deleteMovie,
    getMovieTitle } = require('../controllers/controllerApiMoviesAdmin');


//Faltan validaciones una vez que tengamos el middleware

router.get('/', getMovies);                 //Trae todas las películas

router.get('/:id', getMovie);               //Trae una película

router.get('/title/:title', getMovieTitle);               //Trae una película

router.post('/',
//     check("title","El titulo de la película es obligatorio")
//     .not()
//     .isEmpty(),
//     check("image","Se necesita una imagen para añadir a la informacion de la pelicula")
//     .not()
//     .isEmpty()
//     .isURL(),
//     check("year","Se necesita el año de creación de la película")
//     .not()
//     .isEmpty()
//     .custom((value, {req})=>{
//         if(value < 1800 || value >2023){
//             throw new Error("el año de la película no es un año que sea real")
//         }
//         return true
//     }),
//     check("directors","Debe introducir el nombre del director de la película que desea añadir")
//     .not()
//     .isEmpty(),
//     check("stars","Se debe de introducir un rating para este película valido")
//     .not()
//     .isEmpty()
//     .custom((value,{req})=>{
//         if(value<=0 || value >=5){
//             throw new Error ("el ratio deberá oscilar entre 0 y 5 puntos")
//         }
//         return true
//     }),
//     check("genres","introduzca un gener valido")
//     .not()
//     .isEmpty(),
//     check("runtimeStr","introduzca la duración de la película")
//     .isEmpty()
//     .not(),
//     check("plot","introduzca un sinopsis de la película")
//     .not()
//     .isEmpty()
//     .isLength({ min: 50, max: 250 }),
//     check("imDbRating","introduzca un ratio valido")
//     .isEmpty()
//     .not()
//     .custom((value,{req})=>{
//         if(value<=0 || value >=5){
//             throw new Error ("el ratio deberá oscilar entre 0 y 5 puntos")
//         }
//         return true
//     }),
//     validarInputs
 postMovie);                //Crea una nueva película

router.post('/', [



    //titulo de la pelicula
    check("title", "El titulo de la película es obligatorio")
        .not()
        .isEmpty(),


    //Imagen
    check("image", "Le falta por rellenar este campo con una URL valida")
        .not()
        .isEmpty()
        .isURL(),

    //año
    check("year", "Se necesita el año de creación de la película")
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value < 1800 || value > 2024) {
                throw new Error("Introduce un año valido")
            }
            return true
        }),


    //Directores 
    check("directors", "Rellenar todos los campos")
        .not()
        .isEmpty(),

    //Actores
    check("stars", "Rellenar el campo de Actores")
        .not()
        .isEmpty(),


    //Generos
    check("genres", "introduzca un genero valido")
        .not()
        .isEmpty(),


    // //Duracion
    // check("runtimeStr", "introduzca la duración de la película")
    //     .isEmpty()
    //     .not(),

    //Plot
    check("plot", "introduzca un sinopsis de la película")
        .not()
        .isEmpty(),


    //Estrellas
    // check("imDbRating", "introduzca un ratio valido")
    //     .isEmpty()
    //     .not()
    //     .custom((value, { req }) => {
    //         if (value <= 0 || value >= 5) {
    //             throw new Error("Debe estar en 0 y 5 estrellas")
    //         }
    //         return true
    //     }),

    //Opiniones
    check("opinions", "introduzca un sinopsis de la película")
        .not()
        .isEmpty(),


    // //date
    // check("dates", "Introduzca una fecha valida")
    //     .not()
    //     .isEmpty(),

    //Escritor
    check("escritor", "introduzca un sinopsis de la película")
        .not()
        .isEmpty(),


    // //Url
    // check("url", "Le falta por rellenar este campo con una URL valida")
    //     .not()
    //     .isEmpty()
    //     .isURL(),

    validarInputs

], postMovie);                //Crea una nueva película


router.put('/:id', putMovie);               //Modifica la película

router.delete('/:id', deleteMovie);         //Borra la película

module.exports = router;