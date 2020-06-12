// @ts-nocheck
// TODO: Упражнения из книги "JavaScript для детей" Самоучитель

//? #1 Новые дразнилки (стр 69)
//* Сделайте генератор случайных дразнилок со своим набором слов.

/* let randomBodyParts = ['глаза', 'руки', 'ноги'];
let randomAdjectives = ['красивые', 'длинные', 'умные'];
let randomWords = ['панду 🐼', 'лисичку 🦊', 'коалу 🐨', 'кошку 🐈'];
// Выбор случайной части тела из массива randomBodyParts:
let randomBodyPart =
    randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:

let randomCompliment = [
    'У тебя',
    randomAdjective,
    randomBodyPart,
    'и ты похожа на',
    randomWord,
].join(' ');
console.log(randomCompliment); */

//? #2 Изощренные дразнилки (стр 69)
//* Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа: «У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]». Подсказка: нужно будет создать еще один массив.

/* let randomHumanBodyParts = ['👂🏻', '👃🏻', '👀'];
let randomAdjectives = ['косые', 'кривые', 'уродливые'];
let randomAnimalBodyParts = ['морда', 'лапы', 'хвост', 'щупальцы'];
let randomAnimals = ['🦅', '🐙', '🕷', '🐸', '🐍', '🐒', '🐊'];
// Выбор случайной части тела из массива randomBodyParts:
let randomHumanBodyPart =
    randomHumanBodyParts[
        Math.floor(Math.random() * randomHumanBodyParts.length)
    ];
// Выбор случайной части тела из массива randomAnimalBodyParts:
let randomAnimalBodyPart =
    randomAnimalBodyParts[
        Math.floor(Math.random() * randomAnimalBodyParts.length)
    ];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomAnimal =
    randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// Соединяем случайные строки в предложение:

let randomCompliment = [
    'У тебя',
    randomHumanBodyPart,
    'еще более',
    randomAdjective,
    'чем',
    randomAnimalBodyPart,
    'у',
    randomAnimal,
].join(' ');
console.log(randomCompliment); */

//? #3 Оператор + или join? (стр 69)
//* Сделайте две версии своего генератора дразнилок: одна пусть использует для составления дразнилки оператор +, а другая соз- дает массив со словами и соединяет их через пробел с помощью join. Какой вариант вам больше нравится и почему?

//! 1-я версия дразнилок
/* let randomHumanBodyParts = ['👂🏻', '👃🏻', '👀'];
let randomAdjectives = ['косые', 'кривые', 'уродливые'];
let randomAnimalBodyParts = ['морда', 'лапы', 'хвост', 'щупальцы'];
let randomAnimals = ['🦅', '🐙', '🕷', '🐸', '🐍', '🐒', '🐊'];
// Выбор случайной части тела из массива randomBodyParts:
let randomHumanBodyPart =
    randomHumanBodyParts[
        Math.floor(Math.random() * randomHumanBodyParts.length)
    ];
// Выбор случайной части тела из массива randomAnimalBodyParts:
let randomAnimalBodyPart =
    randomAnimalBodyParts[
        Math.floor(Math.random() * randomAnimalBodyParts.length)
    ];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomAnimal =
    randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// Соединяем случайные строки в предложение:

let randomCompliment =
    'У тебя ' +
    randomHumanBodyPart +
    ' еще более ' +
    randomAdjective +
    ' чем ' +
    randomAnimalBodyPart +
    ' у ' +
    randomAnimal;
console.log(randomCompliment); */

//! 2-я версия дразнилок - более удобная 😄
/* let randomHumanBodyParts = ['👂🏻', '👃🏻', '👀'];
let randomAdjectives = ['косые', 'кривые', 'уродливые'];
let randomAnimalBodyParts = ['морда', 'лапы', 'хвост', 'щупальцы'];
let randomAnimals = ['🦅', '🐙', '🕷', '🐸', '🐍', '🐒', '🐊'];
// Выбор случайной части тела из массива randomBodyParts:
let randomHumanBodyPart =
    randomHumanBodyParts[
        Math.floor(Math.random() * randomHumanBodyParts.length)
    ];
// Выбор случайной части тела из массива randomAnimalBodyParts:
let randomAnimalBodyPart =
    randomAnimalBodyParts[
        Math.floor(Math.random() * randomAnimalBodyParts.length)
    ];
// Выбор случайного прилагательного из массива randomAdjectives:
let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
let randomAnimal =
    randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// Соединяем случайные строки в предложение:

let randomCompliment = [
    'У тебя',
    randomHumanBodyPart,
    'еще более',
    randomAdjective,
    'чем',
    randomAnimalBodyPart,
    'у',
    randomAnimal,
].join(' ');
console.log(randomCompliment); */

//? #4 Новые дразнилки (стр 69)
//* Как с помощью метода join превратить массив [3,2,1] в строку "3 больше, чем 2 больше, чем 1"?

/* let arr = [3, 2, 1];
let str = arr.join(' больше, чем ');
console.log(str); */

//? #1 Подсчет очков (стр 82)
//* Представьте, что вы играете в какую-нибудь игру со своими друзь- ями и вам нужно вести счет. Создайте для этого объект и назовите его scores. Пусть ключами будут имена ваших друзей, а значе- ниями — набранные ими очки (0 или больше). Счет игроков надо будет увеличивать по мере того, как они зарабатывают новые очки. Как вы будете менять счет игрока, хранящийся в объекте scores?

/* let scores = {
    Homer: 1,
    Marge: 10,
    Lisa: 20,
    Bart: 15,
};
// Увеличиваем счёт на +1 очко
scores.Homer += 1;
// Увеличиваем счёт на +4 очка
scores.Marge += 4;
// Увеличиваем счёт на +10 очков
scores.Lisa += 10;
// Увеличиваем счёт на +9 очков
scores.Bart += 9;
// Показать общий счёт игроков
console.log(scores); */

//? #2 Вглубь объектов массивов (стр 82)
//* Пускай у вас есть такой объект:
//* Как одной строкой JavaScript-кода извлечь из этого объекта число 123? Проверьте свое решение, запустив его в консоли.

/* let myCrazyObject = {
    name: 'Нелепый объект',
    'some array': [7, 9, { purpose: 'путаница', number: 123 }, 3.3],
    'random animal': 'Банановая акула',
};

console.log(myCrazyObject['some array'][2].number);
 */

//? #1 Прекрасные животные (стр 108)
let animals = ['Кот', 'Рыба', 'Лямур', 'Комодский варан'];

//! 1-й вариант
/* animals[0] = animals[0] + ' - прекрасное животное';
animals[1] = animals[1] + ' - прекрасное животное';
animals[2] = animals[2] + ' - прекрасное животное';
animals[3] = animals[3] + ' - прекрасное животное';
console.log(animals); */

//! 2-й вариант
/* for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + ' - прекрасное животное';
}

console.log(animals); */

//? #2. Генератор случайных строк (стр 108)
/* let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
let stringLength = 5;

while (randomString.length < stringLength) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString); */

//? #3. h4ck3r sp34k (стр 109)
/* let input = 'javascript is awesome';
let output = '';

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += '4';
    } else if (input[i] === 'e') {
        output += '3';
    } else if (input[i] === 'i') {
        output += '1';
    } else if (input[i] === 'o') {
        output += '0';
    } else {
        output += input[i];
    }
}

console.log(output); */

//? Переписываем дразнилку с помощью функции pickRandomWord (стр 135)
/* let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

generateRandomInsult = function () {
    let randomBodyParts = ['глаз', 'нос', 'череп'];
    let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
    let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
    // Соединяем случайные строки в предложение:
    let randomString =
        'У тебя ' +
        pickRandomWord(randomBodyParts) +
        ' словно ' +
        pickRandomWord(randomAdjectives) +
        ' ' +
        pickRandomWord(randomWords) +
        '!!!';

    return randomString;
};
// console.log(randomString);
console.log(generateRandomInsult()); */

//? #1. Математические расчеты и функции (cтр 140)

//! 1-й вариант с помощью функционального выражения (длинный вариант записи)
/* let add = function (a, b) {
    return a + b;
};

let multiply = function (a, b) {
    return a * b;
};

console.log(add(multiply(36325, 9824), 777)); */

//! 2-й вариант с помощью объявления функции (укороченный вариант записи)
/* function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(add(multiply(36325, 9824), 777)); */

//? #2. Совпадают ли массивы? (cтр 140)
/* let areArraysSame = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); // false */

//? #3. «Виселица» и функции (cтр 140)
// Создайте здесь свои функции
let pickWord = function () {
    // Возвращает случайно выбранное слово
    let words = ['программа', 'макака', 'прекрасный', 'оладушек'];
    return words[Math.floor(Math.random() * words.length)];
};

let setupAnswerArray = function (word) {
    // Возвращает итоговый массив для заданного слова word
    let answerArray = [];
    for (let i = 0; i < words.length; i++) {
        answerArray[i] = '_';
    }

    return answerArray;
};

let showPlayerProgress = function (answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(' '));
};

let getGuess = function () {
    // Запрашивает ответ игрока с помощью prompt
    return prompt('Угадайте букву, или нажмите Отмена для выхода из игры.');
};

let updateGameState = function (guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква quess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    let appearance = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearance++;
        }
    }

    return appearance;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
    showPlayerProgress(answerArray);
    alert('Отлично! Было загадано слово ' + answerArray.join(''));
};

// word: загаданное слово
let word = pickWord();
// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите одиночную букву.');
    } else {
        // correctGuesses: количество открытых букв
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
