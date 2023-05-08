"use strict";

// GROUP ALL OF MY FUNCTION DELCARATIONS AT THE TOP....

function parsePartCode(code){
    //  this should take the code as a string
    //  and turn it into an object that has three properties...

    // this should return a part, 
    // a part will have a supplierCode, 
    // a productNumber, and a size.

    let result = {
        supplierCode: getSupplierCode(code),
        productNumber: getProductNumber(code),
        size: getSize(code)
    }

    return result;
}

// the purpose of this is to take a code as a string,
// and return just the supplier code.
function getSupplierCode(code){
    let addressOfColon = code.indexOf(":");
    let result = code.substring(0, addressOfColon);
    return result;
}

function getProductNumber(code){
    let addressOfColon = code.indexOf(":");
    let addressOfDash = code.indexOf("-");
    let result = code.substring(addressOfColon + 1, addressOfDash);
    return result;
}

function getSize(code){
    let addressOfDash = code.indexOf("-");
    let result = code.substring(addressOfDash + 1);
    return result;
}

function displayPart(part){
    console.log(`SupplierCode: ${part.supplierCode}` )
    console.log(`ProductNumber: ${part.productNumber}`)
    console.log(`Size: ${part.size}`)
}


// BEGIN ACTUAL PROGRAM (the code that consumes the above functions) BELOW

let code1 = "ACME:123-L";
let part1 = parsePartCode(code1);
displayPart(part1);

let code2 = "DI:12345-M";
let code3 = "ACE:1-12";


let part2 = parsePartCode(code2);

displayPart(part2);

