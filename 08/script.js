{
//blocks
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d
        //a=10 b=20 c=30 d=undefined
        b++
        a *= 10
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d
        //a=1-- b=21 c=50 d=undefined
        b++
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //які тут будуть значення змінних a, b, c, d
        //a=100500 b=521 c=undefined d='value'
        {
            let a = -50
            b     = 1000
            //які тут будуть значення змінних a, b, c, d
            //a=-50 b=1000 c=undefined d='value'
        }
        //які тут будуть значення змінних a, b, c, d
         //a=10500 b=1000 c=undefined d='value'
    }
    //які тут будуть значення змінних a, b, c, d
     //a=100 b=1000 c=undefined d=undefined
}
//які тут будуть значення змінних a, b, c, d
//a=100 b=undefined c=undefined d=undefined
}

//comparison if
// {
//   var age = +prompt("Скільки вам років?", "");

//   if (age < 0) {
//       alert("Негативний вік? Ви від зоряної системи?");
//   }
//   else if (age < 18) {
//       alert("школяр");
//   }
//   else if (age < 30) {
//       alert("молодь");
//   }
//   else if (age < 45) {
//       alert("зрілість");
//   }
//   else if (age < 60) {
//       alert("захід сонця");
//   }
//   else if (age >= 60) {
//       alert("як пенсія?");
//   }
//   else {
//       alert("чи кіборг, чи KERNESS");
//   }
  
// }

// //Comparison: sizes
// {
//   const sizeUSA = prompt('Enter your size (USA):');
//   let internationalSize;
  
//   switch (true) {
//     case sizeUSA <= 2:
//       internationalSize = "XS";
//       break;
//     case sizeUSA <= 6:
//       internationalSize = "S";
//       break;
//     case sizeUSA <= 10:
//       internationalSize = "M";
//       break;
//     case sizeUSA <= 14:
//       internationalSize = "L";
//       break;
//     case sizeUSA <= 17:
//       internationalSize = "XL";
//       break;
//     default:
//       internationalSize = "XL+";
//   }
  
//   alert(`
//     Your size USA: ${sizeUSA}
//     Your size UA: ${Number(sizeUSA) + 38}
//     Your size international: ${internationalSize}
//   `);
  
// }

// //switch: if
// {
//   let color = prompt("Введіть колір", "");

//   if (color === "red") {
//       document.write("<div style='background-color: red;'>червоний</div>");
//       document.write("<div style='background-color: black; color: white;'>чорний</div>");
//   } else if (color === "black") {
//       document.write("<div style='background-color: black; color: white;'>чорний</div>");
//   } else if (color === "blue") {
//       document.write("<div style='background-color: blue;'>синій</div>");
//       document.write("<div style='background-color: green;'>зелений</div>");
//   } else if (color === "green") {
//       document.write("<div style='background-color: green;'>зелений</div>");
//   } else {
//       document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
//   }
  
// }

// //noswitch
// {
//   const noSwitch = (key, cases, defaultKey = 'default') => {
//     const selectedFunction = cases[key] || cases[defaultKey];
//     return selectedFunction();
// };

// const drink = prompt("Що ви любите пити");

// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай() {
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
//     },
//     пиво: () => console.log('Добре влітку, та в міру'),
//     віскі: function () {
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
//     },
//     default() {
//         console.log('шото я не зрозумів');
//     }
// });

// }

//closure calc
// {
//   fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         const currencyContainer = document.getElementById('currency-container');
//         console.log(data);
//         for (const currency in data.rates) {
//             const button = document.createElement('button');
//             button.innerText = currency;

//             button.onclick = () => {
//                 const amount = parseFloat(prompt(`Введіть суму в ${currency}:`));
//                 if (!isNaN(amount)) {
//                     const convertedAmount = amount / data.rates[currency];
//                     alert(`Сума в ${amount} ${currency} становить приблизно ${convertedAmount.toFixed(2)} USD`);
//                 } else {
//                     alert('Введено некоректну суму');
//                 }
//             };

//             currencyContainer.appendChild(button);
//         }
//     })
//     .catch(error => console.error('Помилка при завантаженні даних:', error));

// }

//closure calc 2
{
  fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        const fromSelect = document.getElementById('from');
        const toSelect = document.getElementById('to');
        const rateDiv = document.getElementById('rate');
        const amountInput = document.getElementById('amount');
        const resultDiv = document.getElementById('result');

        for (const currency in data.rates) {
            const fromOption = document.createElement('option');
            fromOption.innerText = currency;
            fromSelect.appendChild(fromOption);

            const toOption = document.createElement('option');
            toOption.innerText = currency;
            toSelect.appendChild(toOption);
        }

        fromSelect.onchange = updateRateAndResult;
        toSelect.onchange = updateRateAndResult;
        amountInput.oninput = updateResult;

        function updateRateAndResult() {
            const fromCurrency = fromSelect.value;
            const toCurrency = toSelect.value;
            const rate = data.rates[toCurrency] / data.rates[fromCurrency];
            rateDiv.innerText = `Exchange Rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
            updateResult();
        }

        function updateResult() {
            const fromCurrency = fromSelect.value;
            const toCurrency = toSelect.value;
            const rate = data.rates[toCurrency] / data.rates[fromCurrency];
            const amount = parseFloat(amountInput.value) || 0;
            const result = amount * rate;
            resultDiv.innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
        }

        // Викликаємо один раз при завантаженні сторінки для початкового оновлення
        updateRateAndResult();
    })
    .catch(error => console.error('Помилка при завантаженні даних:', error));

}

//countries and cities 
{
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
    .then(res => res.json())
    .then(data => {
        const countriesSelect = document.getElementById('countries');
        const citiesSelect = document.getElementById('cities');

        // Наповнюємо select#countries елементами option з назвами країн
        for (const country of Object.keys(data)) {
            const option = document.createElement('option');
            option.innerText = country;
            countriesSelect.appendChild(option);
        }

        // Призначаємо обробник події onchange для select#countries
        countriesSelect.onchange = () => {
            const selectedCountry = countriesSelect.value;
            
            // Видаляємо старий контент select#cities
            citiesSelect.innerHTML = '';

            // Додаємо в select#cities елементи option з містами з обраної країни
            for (const city of data[selectedCountry]) {
                const option = document.createElement('option');
                option.innerText = city;
                citiesSelect.appendChild(option);
            }
        };
    })
    .catch(error => console.error('Помилка при завантаженні даних:', error));
}