// largest in arry
function largest(arr){
arr2= arr.sort().reverse();

return arr2[0]


}
console.log("Highest Integer is: " +  largest([10,50, 5, 89, 15]));

//lowest value

function lowest(arrl){
    arrl2=arrl.sort();
    return arrl2[0]
}
console.log("Lowest integer is: "+  lowest([10,50, 5, 89, 15]));



    function largestmatch(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max) {
        //  console.log(arr[i])
            max=arr[i];
                }

    }
    return max

    }
    console.log("Highest Integer is: " +  largestmatch([10,50, 5, 89, 15]));

        function smallestmatch(arr){
            let min=arr[0]
            for(let i=0;i<arr.length;i++){
                if(arr[i]<min) {
                //  console.log(arr[i])
                    min=arr[i]
                        }

            }
            return min

            }
            console.log("Smallest Integer is: " +  smallestmatch([10,50, 5, -89, 15]));



