const fs = require('fs');

const crearArchivo = async( num, bool,lim ) =>{
    
    try {

        let salida = '';
        if(lim){
            
            for(let i = 1; i <= lim; i++){
            salida += `${num} x ${i} = ${num * i} \n`;
        } 
        }else{
            for(let i = 1; i <= 10; i++){
            salida += `${num} x ${i} = ${num * i} \n`;
        }


    } 
        if(bool){
                
            console.log('=============');
            console.log(`Tabla del`, num);
            console.log('=============');
            console.log(salida);
        }
        
            fs.writeFileSync(`./salida/tabla-${ num }.txt`, salida);
            return `tabla-${num}.txt`;
        
  
 }    catch (error) {
    throw error;
    }
}

module.exports ={
    crearArchivo
}











