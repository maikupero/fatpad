// ------------------ Convert A Hex String To RGB ------------------
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

const conversion = '0123456789abcdef'

function hexStringToRGB(hexString) {
    let r = hexString.toLowerCase().slice(1,3);
    let g = hexString.toLowerCase().slice(3,5);
    let b = hexString.toLowerCase().slice(5,7);
    console.log(r,g,b);

    return {r: toRGB(r), g: toRGB(g), b: toRGB(b)}
}

function toRGB(string) {
    return (conversion.indexOf(string[0]) + (conversion.indexOf(string[1]) / 16)) * 16
}
console.log(hexStringToRGB("#FF9933"), `expected {r: 255, g: 153, b: 51}`);

// When working with color values it can sometimes be useful to extract the 
// individual red, green, and blue (RGB) component values for a color. 

// Implement a function that meets these requirements:
//  • Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//  • Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} 
//    where r, g, and b range from 0 through 255
//  • Note: your implementation does not need to support shorthand form (ie "#FFF")
// Example: "#FF9933" --> {r: 255, g: 153, b: 51}