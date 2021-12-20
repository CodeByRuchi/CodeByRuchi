function prefix(arr){
   let strprefix='';
   
        for(let i=0;i<arr[0].length;i++){
            let firstArr=arr[0][i];
           
            for(let j=0;j<arr.length;j++){
                // console.log(arr[j][i])
                if (arr[0][i] !== arr[j][i]) {
                    // If not, return the string up to and including the previous character
                    return arr[0].slice(0, i);
                }
                
            }
        }
// console.log(firstArr)
        return arr[0]
        
    }
    console.log(prefix(['exit','wwexample','exist','execute']));
  