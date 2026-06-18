
// traversy 1 question

let example_array = [12,34,56,78,9,0]

for (let i = 0; i < example_array.length; i++) {
    const element = example_array[i];
    // console.log(element);
    
}

// Finding max 

let array_max = [12,34,54,32,12];

let max = 0

for(let i =0; i<array_max.length;i++){
    if(array_max[i] > max){
         max = array_max[i]
         
        }
    }
    
    // console.log(max);



    // find min number of the array 

    const minArr = [65,284,463,76]
    let min = minArr[0]
    for (let i = 0; i < minArr.length; i++) {
        
        if(minArr[i] < min){
            min = minArr[i]
        }
    }
    // console.log(min)


    // fibbonaci 
    const fibbonaci = (number) =>{
        if(number <= 1) return number;

        return
        fibbonaci(number -1) + fibbonaci(number -2)
    }

    console.log(
        fibbonaci(8)
    )




