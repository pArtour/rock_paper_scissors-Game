// made by p_Artour

//Кэшируем DOM
let userScore = 0,
	  compScore = 0,
	  userScore_span = document.getElementById('user-score'),
	  compScore_span = document.getElementById('comp-score'),
	  scoreBoard_div = document.querySelector('.score-board'),
	  result_p = document.querySelector('.result > p'),
	  rock_div = document.getElementById('r'),
	  paper_div = document.getElementById('p'),
	  scissors_div = document.getElementById('s');

//Функция выбора компьютера
function getComputerChoice() {
	const choices = ["r", "p", "s"],
		  randomNumber = Math.floor(Math.random() * 3 );
	return choices[randomNumber];
};

// Функкия конвертирования в слова значений p,r,s
function convertWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

// Функуиция победы
function win(userChoice,computerChoice) {
	const smallUserWord = "user".fontsize(3).sub(),
		  smallCompWord = "comp".fontsize(3).sub(),
		  userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(computerChoice)}${smallCompWord}. You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 200);
}

// Функция поражения
function lose(userChoice,computerChoice) {
	const smallUserWord = "user".fontsize(3).sub(),
		  smallCompWord = "comp".fontsize(3).sub(),
		  userChoice_div = document.getElementById(userChoice);
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} loses to ${convertWord(computerChoice)}${smallCompWord}. You lost...`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 200);
}

// Функуия нечьи
function draw(userChoice,computerChoice) {
	const smallUserWord = "user".fontsize(3).sub(),
		  smallCompWord = "comp".fontsize(3).sub(),
		  userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} equals ${convertWord(computerChoice)}${smallCompWord}. It's a draw.`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 200);

}

// Основная функция игры
function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
				break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
				break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
				break;	
	}
};

// Функуция инициализации игры
function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click', () => game("s"));
};

// Инициализация игры 
main();

