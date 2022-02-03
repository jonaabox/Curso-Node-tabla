const { describe } = require('yargs');

const argv = require('yargs')
            .option('n', { // establesco el alias, con el que voy a manejar el elemento
                alias: 'num', // le indico que a este elemento le pondre un alias
                type: 'number', // le indico que el dato a ingresar debe de ser de tipo numerico
                demandOption:true, // aca establesco que es requerido 
                describe:`Es la base de la tabla de multiplicar`
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                /* demandOption: true, */// no hace falta ya que tengo un valor definido por defecto
                default: false,
                describe:`Muestra la tabla por consola`
            })
            .option('h',{
                alias: 'limite',
                type: 'number',
                describe: 'Establece hasta cuanto desea iterar la operacion'
            })
            .check((argv, options)=>{
                if(isNaN ( argv.n ) ){ // si... el dato es NaN devuelvo un thorw con el error
                
                    throw 'La base ingresada es incorrecta, debe de ingresar un numero.' // debuelve el error en el caso que exista
                }
                else{
                    return true;
                }
               
            })
            .argv;

module.exports = argv;



