window.cipher = {
  encode: (offset,password) => {
    //let ascii='';
    let result="";
    let letra="";
    for (let i=0; i<password.length; i++){
      let ascii=password.charCodeAt(i);
      let nuevo=((ascii - 65 + (offset))%26) + 65;
      //nuevo= función fórmula para nuevo asccii con el desplazamiento de michelle
      //en nuevo usar offset entregado
      letra= String.fromCharCode(nuevo);
      result+=letra
    }
    //for (let i=0; i<password.length;i++){
    
    //  result+= String.fromCharCode(ascii + offset);
  
      return result;
    },
  
    


  decode: (offset,password) => {
    let ascii;
    let result_decodificar="";
    let letra="";
    for (let i=0; i<password.length;i++){
      
      posicion_ascii=result.charCodeAt(i);
      result_decodificar += String.fromCharCode(ascii - offset);
    }
    return result_decodificar

  
  }
  
  
}
