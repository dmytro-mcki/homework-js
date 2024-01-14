// Number: age
const currentYear = new Date().getFullYear();

const userAge = prompt('Введіть свій вік:');
const birthYear = currentYear - parseInt(userAge);

if (!isNaN(birthYear) && userAge !== null) {
  alert(`Ваш рік народження: ${birthYear}`);
} else {
  alert('Некоректне введення. Будь ласка, введіть правильний вік.');
}

// Number: temperature
const celsiusTemperature = prompt('Введіть температуру в градусах Цельсія:');

const celsius = parseFloat(celsiusTemperature);
const fahrenheit = (celsius * 9/5) + 32;

if (!isNaN(celsius) && celsiusTemperature !== null) {
  alert(`Температура в градусах Фаренгейта: ${fahrenheit.toFixed(2)}`);
} else {
  alert('Некоректне введення. Будь ласка, введіть правильну температуру.');
}

// Number: divide

function returnMathFloor() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let divideElement = document.getElementById("divide");
    const result = Math.floor(num1 / num2);
    divideElement.value = result;
}


// Number: currency
const rate = 37;
const UAH = prompt('Курс USD/UAH 37');
let currency = alert(`${(UAH * rate).toFixed(2)} ₴`)


// Number: RGB
const redDecimal = parseInt(prompt('Введіть значення red (десяткова система):'));
const greenDecimal = parseInt(prompt('Введіть значення green (десяткова система):'));
const blueDecimal = parseInt(prompt('Введіть значення blue (десяткова система):'));

const redHex = redDecimal.toString(16).padStart(2, '0');
const greenHex = greenDecimal.toString(16).padStart(2, '0');
const blueHex = blueDecimal.toString(16).padStart(2, '0');

if (!isNaN(redDecimal) && !isNaN(greenDecimal) && !isNaN(blueDecimal)) {
  const cssColor = `#${redHex}${greenHex}${blueHex}`;
  alert(`CSS-колір: ${cssColor}`);
} else {
  alert('Некоректне введення. Будь ласка, введіть правильні значення.');
}

// Number: flats
const totalFloors = parseInt(prompt('Введіть кількість поверхів у будинку:'));
const flatsPerFloor = parseInt(prompt('Введіть кількість квартир на поверсі:'));
const targetFlatNumber = parseInt(prompt('Введіть номер квартири:'));


if (!isNaN(totalFloors) && !isNaN(flatsPerFloor) && !isNaN(targetFlatNumber)) {
  const flatsPerEntrance = Math.ceil((totalFloors * flatsPerFloor));

  const entranceNumber = Math.ceil(targetFlatNumber / flatsPerEntrance);
  const floorInEntrance = Math.ceil((targetFlatNumber % flatsPerEntrance) / flatsPerFloor);

  alert(`Квартира №${targetFlatNumber} знаходиться у ${entranceNumber}-му під'їзді та ${floorInEntrance}-му поверсі.`);
} else {
  alert('Некоректне введення. Будь ласка, введіть правильні значення.');
}
