// Temperature
function convertTemperature (temperature, fromUnit, toUnit) {
  if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
    return (temperature * 1.8 + 32).toFixed(1) + ' °F'
  } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
    return ((temperature - 32) / 1.8).toFixed(1) + ' °C'
  } else {
    return 'Invalid conversion'
  }
}

const celsiusTemperature = -22
const convertedTemperature = convertTemperature(
  celsiusTemperature,
  'Celsius',
  'Fahrenheit'
)
console.log(convertedTemperature)

//RGB
function NumberToRGB (r, g, b) {
  const convertToHex = decimalColor => {
    const hexColor = decimalColor.toString(16).toUpperCase()
    return hexColor.length === 1 ? '0' + hexColor : hexColor
  }

  const hexRed = convertToHex(r)
  const hexGreen = convertToHex(g)
  const hexBlue = convertToHex(b)

  return `#${hexRed}${hexGreen}${hexBlue}`
}

const resultColor = NumberToRGB(255, 0, 128)
console.log(resultColor)

////Flats
function calculateApartmentLocation (
  totalFloors,
  apartmentsPerFloor,
  apartmentNumber
) {
  const totalApartments = totalFloors * apartmentsPerFloor
  const apartmentsPerEntrance = Math.ceil(totalApartments / 3)

  const entrance = Math.ceil(apartmentNumber / apartmentsPerEntrance)
  const floorInEntrance = Math.ceil(
    (apartmentNumber % apartmentsPerEntrance) / apartmentsPerFloor
  )

  return { entrance, floor: floorInEntrance }
}

const apartmentInfo = calculateApartmentLocation(9, 4, 81)
console.log(apartmentInfo)

//Credentials
String.prototype.capitalize = function () {
  return this.replace(/\b\w/g, char => char.toUpperCase())
}

function credentials () {
  //const name = prompt("Enter your name:");
  const name = 'name'
  //const surname = prompt("Enter your surname:");
  const surname = 'surname'
  //const fatherName = prompt("Enter your father's name:");
  const fatherName = 'fathername'

  const formattedName = name.trim().capitalize()
  const formattedSurname = surname.trim().capitalize()
  const formattedFatherName = fatherName.trim().capitalize()

  const fullName = `${formattedName} ${formattedSurname} ${formattedFatherName}`

  return {
    name: formattedName,
    surname: formattedSurname,
    fatherName: formattedFatherName,
    fullName: fullName
  }
}

const userCredentials = credentials()
console.log(userCredentials)

//New line
function convertToMultiline (inputString) {
  const multilineString = inputString.split('\\n').join('\n')
  return multilineString
}
const userInput = 'Enter a string use \\n for newline'
const result = convertToMultiline(userInput)

console.log('Multiline String:')
console.log(result)

{
  /// Prompt OR
  const promptWithDefault = (message, defaultValue) =>
    prompt(message) || defaultValue

  const userInput = promptWithDefault(
    'Please enter something:',
    'Default Value'
  )
  console.log(`User input: ${userInput}`)
}

//Login passsword
function loginAndPassword (correctLogin, correctPassword) {
  const enteredLogin = prompt('Enter your login:')

  if (enteredLogin === correctLogin) {
    const enteredPassword = prompt('Enter your password:')

    if (enteredPassword === correctPassword) {
      alert('Welcome, ' + correctLogin + '!')
      return true
    } else {
      alert('Incorrect password. Please try again.')
      return false
    }
  } else {
    alert('Incorrect login. Please try again.')
    return false
  }
}

const isSuccessfulLogin = loginAndPassword('admin', 'qwerty')
console.log('Login attempt result:', isSuccessfulLogin)

// For Table
function createMultiplyTable (arr) {
  let tableHTML = '<table border="1">'

  for (let i = 0; i < arr.length; i++) {
    tableHTML += '<tr>'

    for (let j = 0; j < arr[i].length; j++) {
      tableHTML += `<td>${arr[i][j]}</td>`
    }

    tableHTML += '</tr>'
  }

  tableHTML += '</table>'
  return tableHTML
}

const multiplyTableHTML = createMultiplyTable([
  [0, 0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4, 5],
  [0, 2, 4, 6, 8, 10],
  [0, 3, 6, 9, 12, 15],
  [0, 4, 8, 12, 16, 20],
  [0, 5, 10, 15, 20, 25]
])

const multiplyTable = document.getElementById('multiplyTable')
multiplyTable.innerHTML = multiplyTableHTML

{
  // Filter Lexics
  function filterLexics (inputString, forbiddenWords) {
    let wordsArray = inputString.split(' ')

    let filteredArray = wordsArray.filter(
      word => !forbiddenWords.includes(word.toLowerCase())
    )
    let resultString = filteredArray.join(' ')

    return resultString
  }

  const userInput = prompt('Enter a sentence:')

  if (userInput !== null && userInput.trim() !== '') {
    const forbiddenWords = ['bad', 'inappropriate', 'offensive']

    const filteredResult = filterLexics(userInput, forbiddenWords)
    console.log(filteredResult)
  } else {
    console.log('No input provided. Continue with other scripts.')
  }
}

{
  //Currency Table
  function displayCurrencyTable () {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        const currencyList = Object.keys(data.rates)
        const exchangeRatesTable = createExchangeRatesTable(currencyList, data)

        // Display the exchange rates table
        displayTable(
          'exchangeRatesTable',
          'Currency',
          currencyList,
          exchangeRatesTable
        )
      })
      .catch(error => {
        console.error('Error fetching currency exchange rates:', error)
      })
  }

  function createExchangeRatesTable (currencyList, data) {
    const exchangeRatesTable = []

    for (let i = 0; i < currencyList.length; i++) {
      exchangeRatesTable[i] = new Array(currencyList.length).fill(0)
    }

    for (let i = 0; i < currencyList.length; i++) {
      for (let j = 0; j < currencyList.length; j++) {
        if (i !== j) {
          const crossRate =
            data.rates[currencyList[j]] / data.rates[currencyList[i]]
          exchangeRatesTable[i][j] = crossRate
        } else {
          exchangeRatesTable[i][j] = 1 // The rate of a currency to itself is always 1
        }
      }
    }

    return exchangeRatesTable
  }

  function displayTable (tableId, headerTitle, headerData, tableData) {
    const table = document.getElementById(tableId)
    const headerRow = table.insertRow()
    const headerCell = headerRow.insertCell()
    headerCell.textContent = headerTitle

    for (let i = 0; i < headerData.length; i++) {
      const headerCell = headerRow.insertCell()
      headerCell.textContent = headerData[i]
    }

    for (let i = 0; i < headerData.length; i++) {
      const row = table.insertRow()
      const cell = row.insertCell()
      cell.textContent = headerData[i]

      for (let j = 0; j < headerData.length; j++) {
        const cell = row.insertCell()
        cell.textContent = tableData[i][j].toFixed(2)
      }
    }
  }

  displayCurrencyTable()
}

{
  /// Form Function
  function createForm (object) {
    const form = document.createElement('form')

    for (const key in object) {
      const label = document.createElement('label')
      label.textContent = `${key}: `

      const input = document.createElement('input')
      input.name = key

      switch (typeof object[key]) {
        case 'number':
          input.type = 'number'
          input.value = object[key]
          break
        case 'string':
          input.type = 'text'
          input.value = object[key]
          break
        case 'boolean':
          input.type = 'checkbox'
          input.checked = object[key]
          break
        default:
          break
      }

      label.appendChild(input)
      form.appendChild(label)
    }

    document.body.appendChild(form)
  }

  // Sample Car Objects
  const car1 = {
    Name: 'chevrolet chevelle malibu',
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: 'USA',
    In_Production: true
  }

  const car2 = {
    Name: 'chevrvelle malibu',
    Cylinders: 18,
    Displacement: 32107,
    Horsepower: 120,
    Weight_in_lbs: 3304,
    Origin: 'UUU'
  }

  createForm(car1)
  createForm(car2)
}

{
  //Array of objects sort
  function sort (array, field, ascending = true) {
    if (!field) {
      console.error('Field parameter is required')
      return
    }

    array.sort((a, b) => {
      const aValue = a[field]
      const bValue = b[field]

      if (typeof aValue === 'undefined' || typeof bValue === 'undefined') {
        console.error(`Field "${field}" not found in one or more objects`)
        return 0
      }

      const comparison = ascending ? 1 : -1

      if (aValue > bValue) {
        return comparison
      } else if (aValue < bValue) {
        return -comparison
      }

      return 0
    })
  }

  var persons = [
    { name: 'Іван', age: 17 },
    { name: 'Марія', age: 35 },
    { name: 'Олексій', age: 73 },
    { name: 'Яків', age: 12 }
  ]

  sort(persons, 'age', false)
  console.log(persons)

  sort(persons, 'name', false)
  console.log(persons)
}

{
  // Array of objects sort 2
  function sort (array, field, ascending = true) {
    if (!field) {
      console.error('Field parameter is required')
      return
    }

    array.sort((a, b) => {
      const aValue = a[field]
      const bValue = b[field]

      if (typeof aValue === 'undefined' || typeof bValue === 'undefined') {
        console.error(`Field "${field}" not found in one or more objects`)
        return 0
      }

      const comparison = ascending ? 1 : -1

      if (aValue > bValue) {
        return comparison
      } else if (aValue < bValue) {
        return -comparison
      }

      return 0
    })
  }

  var persons = [
    { name: 'Іван', age: 17 },
    { name: 'Марія', age: 35 },
    { name: 'Олексій', age: 73 },
    { name: 'Яків', age: 12 }
  ]

  function displayArray (array) {
    console.log(JSON.stringify(array, null, 2))
  }

  sort(persons, 'age', false)
  console.log('Sorted by age:')
  displayArray(persons)

  sort(persons, 'name', false)
  console.log('Sorted by name:')
  displayArray(persons)
}

{
  // Table function
  function createTable (array, sortBy, sortOrder) {
    const sortedArray = [...array]
    sort(sortedArray, sortBy, sortOrder === 'desc')

    const columns = []
    for (const item of sortedArray) {
      for (const key in item) {
        if (!columns.includes(key)) {
          columns.push(key)
        }
      }
    }

    const tableHeader = `<tr>${columns
      .map(column => `<th>${column}</th>`)
      .join('')}</tr>`

    const tableRows = sortedArray.map(item => {
      return `<tr>${columns
        .map(column => `<td>${item[column]}</td>`)
        .join('')}</tr>`
    })

    const tableHTML = `<table id="sortedTable" border="1">${tableHeader}${tableRows.join(
      ''
    )}</table>`

    const existingContent = document.body.innerHTML
    document.body.innerHTML = existingContent + tableHTML
  }

  const persons = [
    {
      name: 'Maria',
      fatherName: 'Ivanivna',
      surname: 'Ivanova',
      sex: 'female'
    },
    {
      name: 'Mykola',
      fatherName: 'Ivanovich',
      surname: 'Ivanov',
      age: 15
    },
    {
      name: 'Petro',
      fatherName: 'Ivanovich',
      surname: 'Ivanov',
      married: true
    }
  ]

  createTable(persons, 'name', 'asc')
}
{
  // Divide
  const calcResult = () => {
    const firstNumberValue = parseFloat(firstNumber.value)
    const secondNumberValue = parseFloat(secondNumber.value)

    if (
      !isNaN(firstNumberValue) &&
      !isNaN(secondNumberValue) &&
      secondNumberValue !== 0
    ) {
      const result = Math.floor(firstNumberValue / secondNumberValue)
      divisionResult.innerHTML = `Division Result: ${result}`
    } else {
      divisionResult.innerHTML = 'Invalid data for calculation'
    }
  }

  firstNumber.oninput = secondNumber.oninput = calcResult
}

{
  function calculateTotal () {
    let product1Price =
      parseFloat(document.getElementById('tomatoInput').value) || 0
    let product2Price =
      parseFloat(document.getElementById('fishInput').value) || 0
    let product3Price =
      parseFloat(document.getElementById('cucumberInput').value) || 0
    let totalAmount = product1Price + product2Price + product3Price

    let results = {
      product1Price: product1Price.toFixed(2),
      product2Price: product2Price.toFixed(2),
      product3Price: product3Price.toFixed(2),
      totalAmount: totalAmount.toFixed(2)
    }

    document.getElementById('output').innerHTML = `
            Price for Tomato: $${results.product1Price}<br>
            Price for Fish: $${results.product2Price}<br>
            Price for Cucumber: $${results.product3Price}<br><br>
            Total Amount: $${results.totalAmount}
        `
  }
}
