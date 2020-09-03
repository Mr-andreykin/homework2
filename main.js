//1-ое
// var a = 1, b = 1, c, d;

// c = ++a; alert(c);           // с = 2, a = 2; так как ++a(префиксная форма), то инкремирование сразу произошло и присваиваем значение с и печатаем с;
// d = b++; alert(d);           // d = 1, b = 2; так как b++(постфиксная форма) => сначала возвращаем значение, присваиваем его d, а потом увеличиваем на единицу b и печатаем d;
// c = (2+ ++a); alert(c);      // с = 5, a = 3; так как (2 + 3) = 5. Выполняем инкремирование a. Далее к 2-ке прибавляем новое значение a и получаем сумму и конечно же печатаем c;
// d = (2+ b++); alert(d);      // d = 4, b = 3; так как (2 + 2) = 4. Сначала используем значение b = 2, выполняем операцию сложения, потом инкремируем b  и получаем b = 3 и печать d;
// alert(a);                    // a = 3; Все просто выводим получившееся знач a;
// alert(b);                    // b = 3; аналогично предыдущему пункту;



//2-ое
// let a = 2;
// let x = 1 + (a *= 2);
// x = 1 + (a = a * 2); // присвоение с умножением;
// x = 5;



//3-е
//Это когда вводим в коде
// const  a = 10;
// const b = 5;
// а тут более удобненький вариант на мой взгляд
// const a = parseInt(prompt('Введите значение а: '));
// const b = parseInt(prompt('Введите значение b: '));
// let result;


// // Это, еси а и b положительные
// if (a >= 0 && b >= 0) {   
//     result = a - b;
//     console.log(`а и b положительные - Выходит что так: ${result}`);
// } else {
//     console.log('а и b положительные - Не удовлетворяет условию');
// }

// // Это, еси а и b отрицательные
// if (a < 0 && b < 0) {
//     result = a * b;
//     console.log(`а и b отрицательные -Выходит что так: ${result}`);
// } else {
//     console.log(' а и b отрицательные - Всё-таки положительные');
// }

// // Это, еси а и b разных знаков
// if (a >=0 && b < 0 || a < 0 && b >= 0) {
//     result = a + b;
//     console.log(`Это вопрос о разных знаках и тут Выходит что так: ${result}`);
// } else {
//     console.log('Это вопрос о разных знаках и тут не удовлетворило условию');
// }



// 4 - ое 
// let a = parseInt(prompt('вв')); //Все как обычно предоставим ввод числа пользователю и допилим, если он ошибся default(Специально alert -м сделал его) не пойму почему не срабатывает document.write вместо console.log
// // let a = 5;
// switch (a) {
//     case 0:
//         console.log("0");
//     case 1:
//         console.log("1");
//     case 2:
//         console.log("2");
//     case 3:
//         console.log("3");
//     case 4:
//         console.log("4");
//     case 5:
//         console.log("5");
//     case 6:
//         console.log("6");
//     case 7:
//         console.log("7");
//     case 8:
//         console.log("8");
//     case 9:
//         console.log("9");
//     case 10:
//         console.log("10");
//     case 11:
//         console.log("11");
//     case 12:
//         console.log("12");
//     case 13:
//         console.log("13");
//     case 14:
//         console.log("14");
//     case 15:
//         console.log("15");
//         break;
//         default:
//            alert('Ошибочка вышла');
//     }  



//5-ое
// let a = 2;
// let b = 3;

// function operationArifmeticalSum(a, b) {  
//     return a + b;
// }
// console.log(operationArifmeticalSum(a, b));// это с предложенными значениями


// function operationArifmeticalDif(a, b) { 
//     return a - b;
// }
// console.log(operationArifmeticalDif(10, 5));// это сам добавил при вызове фонкции значениями


// function operationArifmeticalDel(a, b) {
//     return a / b;
// }
// console.log(operationArifmeticalDel(10, 5))

// function operationArifmeticalMul(a, b) {
//     return a * b;
// } 
// console.log(operationArifmeticalMul(10, 5))



//6-ое
// function mathOperation(arg1, arg2, operation){
//     switch(operation){
//         case 'сложение':
//             return arg1 + arg2;
//             break;
//         case 'вычитание':
//             return arg1 - arg2;
//             break;
//         case 'деление':
//             return arg1 / arg2;
//             break;
//         case 'умножение':
//             return arg1 * arg2;
//             break;
//     }
// }


//7-ое
//null – тип данных, 0 –  это число 0.
// alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true не знаю почему так


//8-ое
// const power = (val, pow) => {
//     if (pow != 1) {
//         return val * power(val, pow - 1);
//     } else if (pow <= 0) {
//         alert("Введите число большее или равное 1");
//     } else {
//         return val;
//     }
// }  // это я проконсультировался у товарища одного сам нефига не понял как сделать ее 