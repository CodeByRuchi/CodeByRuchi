function palin(str){
    var str2="";
    // console.log(str.length)
        for(let i=0;i<str.length;i++){

            // str2=str2+str[str.length-1-i];
            // console.log(i)
            str2=str[i]+str2;
        }
        console.log(str)
        console.log(str2)

        if(str2===str){
        return true;
        }else{
        return  false
        }
    
    }
    console.log(palin("madamaa"));
    console.log(palin("nitin"));