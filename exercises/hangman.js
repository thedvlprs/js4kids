let words = ['программа', 'макака', 'прекрасный', 'оладушек'];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < words.length; i++) {
    answerArray[i] = '_';
}

let remainingLetters = word.length;

let guess = prompt('Угадайте букву или нажмите «Отмена» для выхода из игры.');

if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert('Пожалуйста, введите только одну букву.');
} else {
    // Обновляем состояние игры
    for (let j = 0; j < words.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
