
//reverse string

function revstr(str){
    let rev=''; 
      for(let i =0; i<str.length;i++){
      rev=str[i]+rev;   
        }
    return rev
    }
  
  
  
  function unique(str){
    let blackarr=[]
    let strarr=str.split(" ");
  //     console.log(strarr);
    for(let i =0; i<strarr.length;i++){
      if(strarr[i]===revstr(strarr[i])){
  //       console.log(strarr[i])
        if(!blackarr.includes(strarr[i])){
         blackarr.push(strarr[i])
      
      }
  
    }
    
  
  }
      return blackarr;
  }
  
  console.log(unique("nitin knows malayalam and nitin dont know hindi"));




//   another method


function unique(str){
    let blackarr=[]
    let strarr=str.split(" ");
  //   console.log(strarr);
    for(let i =0; i<strarr.length;i++){
         let revstr= strarr[i].split('').reverse().join('');
  //      console.log(revstr);
     if(revstr===strarr[i] && !blackarr.includes(strarr[i]) ){
       blackarr.push(strarr[i]);
  //           console.log(blackarr);
  
     }
      
    }
    return "Unique palindrome string is: " + blackarr.join(" ");
     
  }
  
  console.log(unique("nitin knows malayalam and nitin dont know hindi"));