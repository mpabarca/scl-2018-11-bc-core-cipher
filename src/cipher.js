window.cipher = {
  encode: (password,offset) => {
    //let ascii='';
    let result="";
    let letra="";
    for (let i=0; i<password.length; i++){
      let ascii=password.charCodeAt(i);
      let nuevo=(ascii - 65 + parseInt(offset)) %26 +65;
      //nuevo= función fór;mula para nuevo asccii con el desplazamiento de michelle
      //en nuevo usar offset entregado
      letra= String.fromCharCode(nuevo);
      result+=letra;
    }
    //for (let i=0; i<password.length;i++){
    
    //  result+= String.fromCharCode(ascii + offset);
  
      return result;
    },
  
    


  decode: (password,offset) => {
    
    let result_d="";
    let letra_d="";
    for (let i=0; i<password.length;i++){
      let ascii_d=password.charCodeAt(i);     
      let nuevo_d=(ascii_d - 90 - parseInt(offset)) %26 +90;
      letra_d= String.fromCharCode(nuevo_d);
      result_d+=letra_d;
    }
    return result_d;

  
  },
  
  
}
