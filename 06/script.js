{
//Literal
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Silver',
        fuelType: 'Petrol',
    };
//Expand
    const userKey = prompt('Enter the first property name:');
    const userValue = prompt(`Enter the value for ${userKey}:`);
    car[userKey] = userValue;
console.log(car);

//Copy
    const carCopy = { ...car }
    const userKey2 = prompt('Enter the first property name:');
    const userValue2 = prompt(`Enter the value for ${userKey2}:`);
    carCopy[userKey2] = userValue2;

console.log(carCopy);
}

{//HTML

        const htmlStructure = {
          "tagName": "body",
          "children": [
            {
              "tagName": "div",
              "children": [
                {
                  "tagName": "span",
                  "children": ["Enter a data please:"]
                },
                {
                  "tagName": "br"
                },
                {
                  "tagName": "input",
                  "attrs": {
                    "type": "text",
                    "id": "name"
                  }
                },
                {
                  "tagName": "input",
                  "attrs": {
                    "type": "text",
                    "id": "surname"
                  }
                }
              ]
            },
            {
              "tagName": "div",
              "children": [
                {
                  "tagName": "button",
                  "attrs": {
                    "id": "ok"
                  },
                  "children": ["OK"]
                },
                {
                  "tagName": "button",
                  "attrs": {
                    "id": "cancel"
                  },
                  "children": ["Cancel"]
                }
              ]
            }
          ]
        };

    const buttonText = htmlStructure.children[1].children[1].children[0];
    console.log(buttonText);

    const inputId = htmlStructure.children[0].children[3].attrs.id;
    console.log(inputId);

//Parent
    htmlStructure.children[0].parent = htmlStructure;
    htmlStructure.children[1].parent = htmlStructure;
    htmlStructure.children[0].children[0].parent = htmlStructure.children[0];
    htmlStructure.children[0].children[1].parent = htmlStructure.children[0];
    htmlStructure.children[0].children[2].parent = htmlStructure.children[0];
    htmlStructure.children[0].children[3].parent = htmlStructure.children[0];
    htmlStructure.children[1].children[0].parent = htmlStructure.children[1];
    htmlStructure.children[1].children[1].parent = htmlStructure.children[1];

// Change
    const newOkButtonId = prompt('Enter a new id for the "OK" button:');
    htmlStructure.children[1].children[0].attrs.id = newOkButtonId;
    console.log(htmlStructure.children[1].children[0].attrs.id);

// Destructurization
    const spanTxt = htmlStructure.children[0].children[0].children[0];
    console.log(spanTxt);

    const secondButtonValue = htmlStructure.children[1].children[1].children[0];
    console.log(secondButtonValue);

    const secondInputId = htmlStructure.children[0].children[3].attrs.id;
    console.log(secondInputId);

// Destruct array

    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

    let [odd1, even1, odd2, even2, odd3, ...letters] = arr;

    console.log("Odd:", odd1, odd2, odd3);
    console.log("Even:", even1, even2);
    console.log("Letters:", letters);

}

{
// Destruct string
    let arr = [1, "abc"];

    let [number, [s1, s2, s3]] = arr;
    console.log(number);
    console.log(s1);
    console.log(s2);
    console.log(s3);

}

{
// Destruct 2
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
    }

    const { children: [{ name: name1 }, { name: name2 }] } = obj;

    console.log(name1, name2);

}

{
// Destruct 3
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];
    const { 0: a, 1: b, length } = arr;
    console.log(a, b, length)
}

{
//Copy
    const car = {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Silver',
        fuelType: 'Petrol',
    };
    // Copy delete
    let dellKey = prompt('Enter Key: brand/model/year/color/fuelType');
    const { [dellKey]: _, ...rest } = car;
    console.log(rest);

}

// {
//   // Currency real rate

//   fetch('https://open.er-api.com/v6/latest/USD')
//   .then(res => res.json())
//   .then(data => {
//     const inputCurrency = prompt('Enter the input currency:').toUpperCase();
//     const outputCurrency = prompt('Enter the output currency:').toUpperCase();
//     const amount = parseFloat(prompt('Enter the amount in the input currency:'));

//     if (!data.rates[inputCurrency] || !data.rates[outputCurrency]) {
//       console.log('Invalid input or output currency.');
//       return;
//     }

//     const exchangeRate = data.rates[outputCurrency] / data.rates[inputCurrency];
//     const result = amount * exchangeRate;

//     console.log(`Converted amount: ${result.toFixed(2)} ${outputCurrency}`);
//   })
//   .catch(error => {
//     console.error('Error fetching currency exchange rates:', error);
//   });

// }


{
// Currency Dropdown
fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const currencyList = Object.keys(data.rates); // Get an array of currency codes
    let dropdownHtml = '<select id="currencyDropdown">';

    currencyList.forEach(currency => {
      dropdownHtml += `<option value="${currency}">${currency}</option>`;
    });

    dropdownHtml += '</select>';

    // Append the dropdown to the HTML body
    document.body.innerHTML += dropdownHtml;

    // Add an event listener to the dropdown to handle user selection
    document.getElementById('currencyDropdown').addEventListener('change', function () {
      const selectedCurrency = this.value;
      console.log(`Selected currency: ${selectedCurrency}`);
    });
  })
  .catch(error => {
    console.error('Error fetching currency exchange rates:', error);
  });

}

{
// Form Creation
function createForm(object) {
  const form = document.createElement('form');

  for (const key in object) {
    const label = document.createElement('label');
    label.textContent = `${key}: `;

    const input = document.createElement('input');
    input.name = key;

    switch (typeof object[key]) {
      case 'number':
        input.type = 'number';
        input.value = object[key];
        break;
      case 'string':
        input.type = 'text';
        input.value = object[key];
        break;
      case 'boolean':
        input.type = 'checkbox';
        input.checked = object[key];
        break;
      default:
        break;
    }

    label.appendChild(input);
    form.appendChild(label);
  }

  document.body.appendChild(form);
}

const car = [
  {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "In_Production": true
  },
];

createForm(car[2]);
createForm(car[3]);

}

{
// Table Creation
const persons = [
  {
    name: 'Марія',
    fatherName: 'Іванівна',
    surname: 'Іванова',
    sex: 'female'
  },
  {
    name: 'Миколай',
    fatherName: 'Іванович',
    surname: 'Іванов',
    age: 15
  },
  {
    name: 'Петро',
    fatherName: 'Іванович',
    surname: 'Іванов',
    married: true
  }
];

const columns = [];
for (const person of persons) {
  for (const key in person) {
    if (!columns.includes(key)) {
      columns.push(key);
    }
  }
}

const tableHeader = `<tr>${columns.map(column => `<th>${column}</th>`).join('')}</tr>`;

const tableRows = persons.map(person => {
  return `<tr>${columns.map(column => `<td>${person[column]}</td>`).join('')}</tr>`;
});

const tableHTML1 = `<table border="1">${tableHeader}${tableRows.join('')}</table>`;

document.body.innerHTML = tableHTML1;


}



// Currency 2
fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const currencyList = Object.keys(data.rates);
    const exchangeRatesTable = [];

    for (let i = 0; i < currencyList.length; i++) {
      exchangeRatesTable[i] = new Array(currencyList.length).fill(0);
    }

    for (let i = 0; i < currencyList.length; i++) {
      for (let j = 0; j < currencyList.length; j++) {
        if (i !== j) {
          const crossRate =
            data.rates[currencyList[j]] / data.rates[currencyList[i]];
          exchangeRatesTable[i][j] = crossRate;
        } else {
          exchangeRatesTable[i][j] = 1; // The rate of a currency to itself is always 1
        }
      }
    }
    const table = document.createElement('table');
    table.id = 'exchangeRatesTable';
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = 'Currency';

    for (let i = 0; i < currencyList.length; i++) {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = currencyList[i];
    }

    for (let i = 0; i < currencyList.length; i++) {
      const row = table.insertRow();
      const cell = row.insertCell();
      cell.textContent = currencyList[i];

      for (let j = 0; j < currencyList.length; j++) {
        const cell = row.insertCell();
        cell.textContent = exchangeRatesTable[i][j].toFixed(2);
      }
    }

    const existingContent = document.body.innerHTML;
    document.body.innerHTML = existingContent + table.outerHTML;
  })
  .catch(error => {
    console.error('Error fetching currency exchange rates:', error);
  });
