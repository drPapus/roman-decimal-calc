const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/


function calculator(str) {
    list = str.split(' ')
    let a = list[0]
    let oper = list[1]
    let b = list[2]
    let num;

     if(list.length > 3){
       return console.log('Error')
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

        num = console.log(toRoman(calcNum(a, b, oper)))
         
    } else if(!isNaN(a) && !isNaN(b)){
       num = console.log(calcNum(a,b, oper))
    } else{
        return console.log('Error')
    }
 
    function calcNum(a,b,oper) { 
        result = Math.floor(eval(a + oper + b)).toString()
        return result
    }
   
    return num
}
calculator('I + II');
calculator('1 + 1'); // вернется строка '2'
calculator('1 + 2'); // вернется строка '3'
calculator('VI / III'); // вернется строка 'II'
calculator('VII / III'); // вернётся строка II'
calculator('I + II'); // вернется строка 'III'
calculator('I - II'); // вернётся строка '' (пустая строка) т.к. в римской системе нет отрицательных чисел
calculator('I + 1'); // вернётся исключение (ошибка) throws Error т.к. используются одновременно разные системы счисления
calculator('I'); // вернётся исключение throws Error т.к. строка не является математической операцией
calculator('1 + 1 + 1'); // вернётся исключение throws Error т.к. формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)

