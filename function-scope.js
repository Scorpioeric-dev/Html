//Global Scope (convertfunction- temp - temp2)

let convertFarenheitToCelsius = function(temp){
    
    //local scope ( temp , celsius)
    //local scope (isFreezing)
    let celsius = (temp - 32 ) * 5/9

    if(celsius <= 0 ){
        let isFreezing = true
    }
    return celsius
}
//call a couple of times (32 -> 0 )(68 -> 0)
let temp = convertFarenheitToCelsius(32)
let temp2 = convertFarenheitToCelsius(68)

console.log(temp)
console.log(temp2)
