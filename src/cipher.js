window.cipher = {
  encode: (offset,password) => {
    let ascii;
    let result="";
    //let letra="";
    for (let i=0; i<password.length;i++){
      console.log(password.chartCodeAt(i));
      ascii=password.chartCodeAt(i);
      result+= String.fromCharCode(ascii + offset);
      //let nuevo=(ascii - 65 + offset)%26 + 65;
      //nuevo= función fórmula para nuevo asccii con el desplazamiento de michelle
      //en nuevo usar offset entregado
      //letra=nuevo.fromCharCodeAt();
      //result+=letra
    }
    return result

  },
  decode: (offset,password) => {
    let ascii;
    let result_decodificar="";
    for (var i=0; i<result.length;i++){
      
      //let letra="";
      result_decodificar += String.fromCharCode(ascii - offset);
    }
    return result_decodificar

  }
  return result_decodificar
  
};
