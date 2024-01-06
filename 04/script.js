const tasksProm = prompt(`Number
String
Boolean
Boolean if
Comparison
Ternary
Prompt
Confirm or
Confirm if
Default or
Default if
Login
Currency
Scissors
Scissors black
`)

if (tasksProm === "Number") {
  //Number

  let userInput = prompt('Number: odd\n\nEnter a number:');

  if (userInput !== null) {
    let number = parseFloat(userInput);

    if (!isNaN(number)) {
      if (number % 2 === 0) {
        alert('The entered number is even.');
      } else {
        alert('The entered number is odd.');
      }
    } else {
      alert('Invalid input. Please enter a valid number.');
    }
  } else {
    alert('User canceled the prompt.');
  }

}

if (tasksProm === "String"){
  //String: lexics}

  const forbiddenWords = ['bad', 'inappropriate', 'offensive'];

  let userText = prompt('String: lexics\n\nEnter a text:');

  if (userText !== null) {
    let lowerCaseText = userText.toLowerCase();

    let containsForbiddenWords = false;
    for (let word of forbiddenWords) {
      if (lowerCaseText.includes(word)) {
        containsForbiddenWords = true;
        break;
      }
    }

    if (containsForbiddenWords) {
      alert('The text contains one or more forbidden words.');
    } else {
      alert('The text is free from forbidden words.');
    }
  } else {
    alert('User canceled the prompt.');
  }


}

if (tasksProm === "Boolean") {
  //Boolean
  let likesProgramming = confirm('Do you like programming?');
  let hasPets = confirm('Do you have any pets?');
  let enjoysCoffee = confirm('Do you enjoy drinking coffee?');

  alert(`Likes Programming: ${likesProgramming}\nHas Pets: ${hasPets}\nEnjoys Coffee: ${enjoysCoffee}`);
}


if (tasksProm === "Boolean if") {
  //Boolean Extended

  let likesProgramming = confirm('Do you like programming?');
  let hasPets = confirm('Do you have any pets?');
  let enjoysCoffee = confirm('Do you enjoy drinking coffee?');

  if (likesProgramming) {
    alert('You like programming.');
  } else {
    alert('You do not like programming.');
  }

  if (hasPets) {
    alert('You have pets.');
  } else {
    alert('You do not have any pets.');
  }

  if (enjoysCoffee) {
    alert('You enjoy drinking coffee.');
  } else {
    alert('You do not enjoy drinking coffee.');
  }
}


if (tasksProm === "Comparison") {
  //Comparison: sizes
  const sizeUSA = prompt('Enter your size (USA):');
  let internationalSize;

  if (sizeUSA <= 2) {
    internationalSize = "XS";
  } else if (sizeUSA > 2 && sizeUSA <= 6) {
    internationalSize = "S";
  } else if (sizeUSA > 6 && sizeUSA <= 10) {
    internationalSize = "M";
  } else if (sizeUSA > 10 && sizeUSA <= 14) {
    internationalSize = "L";
  } else if (sizeUSA > 14 && sizeUSA <= 17) {
    internationalSize = "XL";
  } else {
    internationalSize = "XL+";
  }

  alert(`
    Your size USA: ${sizeUSA}
    Your size UA: ${Number(sizeUSA) + 38}
    Your size international: ${internationalSize}
  `);  
}


if (tasksProm === "Ternary"){
  //Ternary
  const isMale = confirm('Are you male?');
  alert(isMale ? 'You are a man.' : 'You are a woman.');

}

if (tasksProm === "Prompt") {
  //Prompt: or
  let age = prompt('Enter your age:');

  if (!age) {
    alert('Error: Please enter your age.');
  } else {
    alert(`Your age is: ${age}`);
  }
}


if (tasksProm === "Confirm or") {
  //Confirm or this days
  let shopping = confirm('Do you want to go shopping?');
  shopping || alert('You are a bore!');
}

if (tasksProm === "Confirm if") {
  //Confirm if this days
  let shopping = confirm('Do you want to go shopping?');
  if (!shopping) {
    alert('You are a bore!');
  }
}


if (tasksProm === "Default or") {
  //Default or
  let firstName = prompt('Enter your first name:');
  firstName = firstName || 'John';

  let lastName = prompt('Enter your last name:');
  lastName = lastName || 'Doe';

  let middleName = prompt('Enter your middle name:');
  middleName = middleName || 'Ivanovych';

  alert(`Full Name: ${lastName} ${firstName} ${middleName}`);

}


if (tasksProm === "Default if") {
  //Default: if
  let firstName = prompt('Enter your first name:');
  if (!firstName) { firstName = 'John'; }

  let lastName = prompt('Enter your last name:');
  if (!lastName) { lastName = 'Doe'; }

  let middleName = prompt('Enter your middle name:');
  if (!middleName) { middleName = 'Ivanovych'; }

  alert(`Full Name: ${lastName} ${firstName} ${middleName}`);
}


if (tasksProm === "Login") {
  //Login and password
  let login = prompt('Enter your login:');

  if (login === 'admin') {
    let password = prompt('Enter your password:');

    if (password === 'qwerty') {
      alert('Welcome!');
    } else {
      alert('Error: Incorrect password.');
    }
  } else {
    alert('Error: Incorrect login.');
  }
}

if (tasksProm === "Currency exchange") {
  //Currency exchange
  let currency = prompt('Enter the currency (e.g., USD, EUR):').toUpperCase();
  let isBuying = confirm('Do you want to buy?');
  let rate;

  if (currency === 'USD') {
    rate = isBuying ? 1.2 : 1.1;
  } else if (currency === 'EUR') {
    rate = isBuying ? 1.4 : 1.3;
  } else {
    alert('Error: Unsupported currency.');
  }

  if (rate !== undefined) {
    let amount = prompt('Enter the amount for exchange:');
    let result = isBuying ? amount * rate : amount / rate;
    alert(`Result: ${result.toFixed(2)} ${isBuying ? 'EUR' : 'USD'}`);
  }
}

if (tasksProm === "Scissors") {
  //Scissors
  let userChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
  let computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
  alert(`Computer's choice: ${computerChoice}`);

  let winner;

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'User';
  } else if (
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper')
  ) {
    winner = 'Computer';
  } else {
    winner = 'Tie';
  }

  alert(`Winner: ${winner}`);
}

if (tasksProm === "Scissors black") { 
  //Scissors black
  const choices = ['rock', 'paper', 'scissors'];
  const userChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  const isTie = userChoice === computerChoice;
  const userWins = (
    (!isTie) &&
    ((userChoice === 'rock' && computerChoice === 'scissors') ||
     (userChoice === 'paper' && computerChoice === 'rock') ||
     (userChoice === 'scissors' && computerChoice === 'paper'))
  );
  const winner = isTie ? 'Tie' : (userWins ? 'User' : 'Computer');
  
  alert(`Computer's choice: ${computerChoice}`);
  alert(`Winner: ${winner}`);
}

else {
    alert('Prompt is not correct')
}


