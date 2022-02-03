/* 'use strict'; */

const { lightseagreen } = require('color-name');
const { option } = require('yargs');// llamo al package.json - yargs 
const { crearArchivo } = require(`./helpers/multiplicar`);

const argv = require('./config/yargs')

console.clear();

crearArchivo( argv.n , argv.l, argv.h )
.then(nombreDelArchivo => console.log(nombreDelArchivo, `creado`))
.catch(err => console.log(err));















