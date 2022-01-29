const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/


function calculator(str) {


    list = str.split(' ')


    let a = list[0]
    let oper = list[1]
    let b = list[2]
    let num;

     if(list.length > 3){
       return 'throws Error'
     }

    function fromRoman(rString) {
        let result = 0;
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I'];
    
        for (let i = 0; i <= decimal.length; i++) {
          while (rString.indexOf(roman[i]) === 0){
            result += decimal[i];
            rString = rString.replace(roman[i],'');
          }
        }
    
        return result;
      }

    function toRoman(dNumber) {
        let result = '';
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I'];
    
        for (let i = 0; i <= decimal.length; i++) {
          while (dNumber % decimal[i] < dNumber) {
            result += roman[i];
            dNumber -= decimal[i];
          }
        }
    
        return result;
      }

    if(pattern.test(a) == true && pattern.test(b) == true){
        a = fromRoman(a)
        b = fromRoman(b)

        num = toRoman(calcNum(a, b, oper))
 
    } else if(!isNaN(a) && !isNaN(b)){
       num = calcNum(a,b,oper)
    } else{
        return 'throws Error'
    }

 
    function calcNum(a,b,oper) { 
        result = eval(a + oper + b) 
        return result
    }

  
   
    return num.toString()
}

//console.log(num)


console.log(calculator('8 / 2')); // вернется строка '4'
console.log(calculator('10 + 2')); // вернется строка '3'
console.log(calculator('V / IV')); // вернется строка 'II'
console.log(calculator('VI / II')); // вернется строка 'III'
console.log(calculator('X - III')); // вернется строка '7'
console.log(calculator('1 + 2')); // вернется строка '3'
console.log(calculator('VI / III')); // вернется строка 'II'
console.log(calculator('VII / III')); // вернётся строка II'
console.log(calculator('I + II')); // вернется строка 'III'
console.log(calculator('I - II')); // вернётся строка '' (пустая строка) т.к. в римской системе нет отрицательных чисел
console.log(calculator('I + 1')); // вернётся исключение (ошибка) throws Error т.к. используются одновременно разные системы счисления
console.log(calculator('I')); // вернётся исключение throws Error т.к. строка не является математической операцией
console.log(calculator('1 + 1 + 1')); // вернётся исключение throws Error т.к. формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)