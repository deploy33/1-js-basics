// 1.
// Создайте две переменные firstName и lastName со значениями вашего имени и фамилии, 
// а также переменную age с вашим возрастом. Используйте интерполяцию строк


const firstName = "Аскар";
const lastName = "Айдархан";
let age; 
age = 38;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет.`); 


// 2.
//Создайте переменную city с названием вашего города. 
// Выведите в консоль сообщение без использования интерполяции строк (не используйте `text ${variable}`)
   
let city = 'Алматы';
console.log("Я родом из " + city); 
    
// 3.  
// Затем создайте переменную `hasAccess`, которая будет хранить логическое значение: 
// `true`, если `password` не пустая строка, и `false`, если строка пуста. Выведите в консоль значения обеих переменных.                                                                                                                                     **[10 баллов]**


let password = 'qwerty123'; //Создается переменная `password` и ей присваивается строковое значение.
let hasAccess = !!password; // implicit coercion into boolean

if(password.length !== 0) {
    hasAccess = true;
} else {
    hasAccess = false; 
}
console.log(`Password: ${password}`);
console.log(`Has access: ${hasAccess}`); 


// 4. Создайте переменную `isMember` со значением `false`. 
// Преобразуйте её в строку с помощью метода `toString()` и выведите результат в консоль значение и тип данных этой переменной.                                                                                                                                       **[5 баллов]**

const isMember = false;
const strIsMember = isMember.toString();
console.log(typeof strIsMember, strIsMember);



// 5. Создайте переменную `cartItems` cо значением `0`. 
// Преобразуйте её в логическое значение, чтобы проверить, пустая корзина или нет. 
// Выведите результат в консоль и объясните, почему корзина считается пустой или нет. 


const cartItems = 0;
const checkCartItems = !!cartItems;
console.log(checkCartItems); // при пустой строке '', при null, undefined, NaN, и при значении 0, как в данном конкретном случае, !!variable вернет false



// 6. Создайте переменную `averageScore` и присвойте ей значение `89.75695`. 
// Затем переопределите значение этой переменной, округлив число до одного знака после запятой и выведите ее в консоль.   

let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);
console.log(averageScore);


// 7. Создайте переменную `greetingMessage` со значением `"      Приветствуем вас в мире программирования!        "`.

let greetingMessage = "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage);
//     - Удалите пробелы в начале и в конце строки.
greetingMessage = greetingMessage.trim();
console.log(greetingMessage);
//     - Преобразуйте строку в верхний регистр.
greetingMessage = greetingMessage.toUpperCase();
console.log(greetingMessage);
//     - Проверьте, содержит ли строка слова `"программирования"`.
greetingMessage = greetingMessage.includes("программирования");
console.log(greetingMessage); //вернет false, потому что значение переменной 
// было переназначено на верхний регистр//



// 8. Попросите пользователя ввести возраст через `prompt()`. Обработайте следующие случаи:

const input = prompt("Укажите ваш возраст");
const isEmpty = input.length === 0;

const num = Number(input);

const isNotNumber = isNaN(num);
const isAdolescent = +num < 18;


if (isEmpty) {
    //     - если ввод пустой — покажите сообщение о необходимости ввести данные
    alert('Enter data')}

    //     - если введено не число — предупредите о недопустимом формате
    else if (isNotNumber) {
        alert('Enter valid format')
    }
    //     - если возраст меньше 18 — сообщите, что доступ ограничен
    else if (isAdolescent) {
        alert('Only for adults')
    }
    //     - иначе — покажите приветствие 
    else {
        alert('Welcome')
    }





// 9. Сохраните в переменную некое число (например, 7). Попросите пользователя ввести число от 1 до 10 через `prompt()`. Выведите сообщение:

const guessNumber = 7;
const input2 = prompt("Введите число от нуля до десяти");

const isNotNum = isNaN(input2);

const userAdded = +input2;

// - если меньше — сообщение, что число слишком мало
if  (isNotNum || input2 === null || input2.trim() === '') {
    alert('Введите числовое значение');
}
    else if (userAdded < guessNumber) {
    alert('Введенное число слишком мало')}
    // - если число больше — сообщение, что число слишком велико
    else if (userAdded > guessNumber) {
        alert('Введенное число слишком велико')} 
        //     - если пользователь угадал — поздравление
    else {
    alert('Вы угадали');
}




// 10. Создайте приложение, которое помогает пользователю выбрать напиток в зависимости от времени суток.

//     - Запросите у пользователя время суток (утро, день, вечер) через `prompt`.
const value = prompt("Введите одно из значений: утро, день или вечер");

const MORNING = 'утро';
const AFTERNOON = 'день';
const EVENING = 'вечер';



//     - Проверьте, что пользователь ввел строку (используйте `typeof`) и что она не пустая (проверка на пустую строку) и если пользователь ввел некорректные данные, выведите сообщение через `alert` с указанием ошибки.
if (value === null || value.trim() === '') { // typeof str === "string" && str.length === 0 не проверит нажатие Esc или отправку пробела(-ов)
    alert('Введённое значение пустое')
    //     - Если это утро, предложите кофе. Если день — чай, а если вечер — горячий шоколад.
} else if (value === MORNING){
    alert('Предлагаю кофе')
} else if (value === AFTERNOON){
    alert('Предлагаю чай')
} else if (value === EVENING){
    alert('Предлагаю горячий шоколад')
} else alert('Ошибка. Попробуйте снова');

