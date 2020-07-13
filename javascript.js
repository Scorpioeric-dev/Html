// Challenge Area

// let fahrenheit = 50 //0c -273.15k
// let kelvin = (fahrenheit + 459.67) * 5/9

//what is a function ? A function - input(argument), code ,output(return value)
let convertFarenheitToCelsius = function(temp){
    let celsius = (temp - 32 ) * 5/9
    return celsius
}
//call a couple of times (32 -> 0 )(68 -> 0)
let temp = convertFarenheitToCelsius(32)
let temp2 = convertFarenheitToCelsius(68)

//Print the converted values

// console.log(temp)
// console.log(temp2)


