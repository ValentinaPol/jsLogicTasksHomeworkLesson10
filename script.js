
//1. 1.	Напишите функцию, которая переупорядочивает цифры каждого числового элемента в массиве в порядке возрастания (asc) или убывания (desc).
//reorderNums([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
//reorderNums ([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
//reorderNums ([63251, 78221], "asc") ➞ [12356, 12278]
//reorderNums ([63251, 78221], "desc") ➞ [65321, 87221]
//reorderNums ([1, 2, 3, 4], "asc") ➞ [1, 2, 3, 4]
//reorderNums ([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]


function reorderNums(arr, order){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        if (order === 'asc'){
            arrResult.push(+(String(arr[i]).split('').sort(compareNumbersAsk)).join(''));
        } else {
            arrResult.push(+(String(arr[i]).split('').sort(compareNumbersDesc)).join(''));
        }
    }
    return arrResult;

}

function compareNumbersAsk(a, b){
    return a - b;
}

function compareNumbersDesc(a, b){
    return b - a;
}

console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
console.log(reorderNums ([515, 341, 98, 44, 211], "desc"));
console.log(reorderNums ([63251, 78221], "asc"));
console.log(reorderNums ([63251, 78221], "desc"));
console.log(reorderNums ([1, 2, 3, 4], "asc"));
console.log(reorderNums ([1, 2, 3, 4], "desc"));


//2. Напишите функцию, которая принимает закодированную строку и возвращает объект в соответствии со следующим примером:
//parseCode("John000Doe000123") ➞ {  firstName: "John",  lastName: "Doe",  id: "123"}
//parseCode("michael0smith004331") ➞ {  firstName: "michael",  lastName: "smith",  id: "4331"}
//parseCode("Thomas00LEE0000043") ➞ {  firstName: "Thomas",  lastName: "LEE",  id: "43"}


function parseCode(str){
    var obj = {};
    var arrStr = str.split('0');
    arrStr = arrStr.filter(function(elem){
        return elem !== '';
    });
    obj.firstName = arrStr[0];
    obj.lastName = arrStr[1];
    obj.id = arrStr[2];
    return obj;
}

console.log(parseCode("John000Doe000123"));
console.log(parseCode("michael0smith004331"));
console.log(parseCode("Thomas00LEE0000043"));