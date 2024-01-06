// {
// // Confirms
// const answers = [
//     confirm('Do you like programming?'),
//     confirm('Do you have any pets?'),
//     confirm('Do you enjoy drinking coffee?')
//     ];

//     console.log(answers);
      
// }


// {
// //Prompts
//     const promptArr = [];
//     promptArr[0] = prompt('What is your favorite color?');
//     promptArr[1] = prompt('What is your favorite movie?');
//     promptArr[2] = prompt('What is your favorite hobby?');
//     console.log(promptArr);
// }

// {
// // Item access
//     const arr = [1, 2, 'hello', 3]
//     let index = prompt('Enter index')
//     let result = alert(arr[index])
// }

// {
// // Item change
//     const arr = [];
//     let index = prompt('Enter index');
//     let value = prompt('Entervalue');
//     arr[index] = value;
//     console.log(arr)
// }

// {
// // Multiply table
//     const arr = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];

// }


{
//Multiply table slice
    const arrMultiply = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4, 5],
        [0, 2, 4, 6, 8, 10],
        [0, 3, 6, 9, 12, 15],
        [0, 4, 8, 12, 16, 20],
        [0, 5, 10, 15, 20, 25],
    ];
    
    let newArr = arrMultiply.slice(1);
    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        result[i] = newArr[i].slice(1);
    }
    console.log(result);
}

// {
// // IndexOf Word
//     let userString = prompt('Enter a string with multiple words:');
//     let targetWord = prompt('Enter the word you are looking for:');
    
//     let words = userString.split(' ');
    
//     let index = words.findIndex(word => word === targetWord);
    
//     if (index !== -1) {
//         alert(`The word "${targetWord}" is the ${index + 1}-th word in the string.`);
//     } else {
//         alert(`The word "${targetWord}" is not found in the string.`);
//     }

// }

// {
// //Reverce
//     let userArray = [];

//     for (let i = 0; i < 5; i++) {
//     let userInput = prompt(`Enter element ${i + 1}:`);
//     userArray.push(userInput);
//     }

//     let reversedArray = [];

//     while (userArray.length > 0) {
//     reversedArray.push(userArray.pop());
//     }

//     console.log("User Array:", userArray);
//     console.log("Reversed Array:", reversedArray);

// }

// {
// //Reverce 2
//     let userArray = [];

//     for (let i = 0; i < 5; i++) {
//     let userInput = prompt(`Enter element ${i + 1}:`);
//     userArray.push(userInput);
//     }

//     let reversedArray = [];

//     while (userArray.length > 0) {
//     reversedArray.push(userArray.pop());
//     }

//     console.log("User Array:", userArray);
//     console.log("Reversed Array:", reversedArray);

//     let reversedArray2 = [];

//     while (reversedArray.length > 0) {
//     reversedArray2.unshift(reversedArray.shift());
//     }

//     console.log("Reversed Array 2:", reversedArray2);
// }


// {

// //Copy
//     const arrMultiply = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];
//     const copyarrMultiply = [];
//     copyarrMultiply.push(arrMultiply)
//     console.log(copyarrMultiply)
// // Deep Copy
//     const depcopyarrMultiply = [...arrMultiply];
//     console.log(depcopyarrMultiply)
// }

// {
// // Array Equals
//     const arr = [1, 2, 3]
//     const arr2 = arr
//     arr2 === arr

// }

// {
// // Flat
//     const arrMultiply = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];

//     let arrFlat = [];
//     for (let n = 1; n < arrMultiply.length; n++) {
//         arrFlat = [...arrFlat, ...arrMultiply[n].slice(1)];
//     }

//     console.log(arrFlat);

// }

// {
// // Destruct
//     let userInput = prompt('Enter a string:');
//     let [firstLetter, , , , fifthLetter, , , , ninthLetter] = userInput;

//     console.log(`First Letter: ${firstLetter}`);
//     console.log(`Fifth Letter: ${fifthLetter}`);
//     console.log(`Ninth Letter: ${ninthLetter}`);


// }


// {

// // Destruct default
//     let userInput = prompt('Enter a string:');

//     let [secondLetter = '!', , fourthLetter = '!', fifthLetter = '!'] = userInput;

//     console.log(`Second Letter: ${secondLetter}`);
//     console.log(`Fourth Letter: ${fourthLetter}`);
//     console.log(`Fifth Letter: ${fifthLetter}`);
// }

// {
// // Multiply table rest
//     const arrMultiply = [
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 2, 3, 4, 5],
//         [0, 2, 4, 6, 8, 10],
//         [0, 3, 6, 9, 12, 15],
//         [0, 4, 8, 12, 16, 20],
//         [0, 5, 10, 15, 20, 25],
//     ];
  
//     let [, [,...row1], [,...row2], [,...row3], [,...row4]] = arrMultiply;
//     let result = [row1, row2, row3, row4].map(row => row.filter(element => element !== 0)).flat();
  
//     console.log(result)

// }


// {
// //For Alert
//     let forOf = ["John", "Paul", "George", "Ringo"];
//     for (const name of forOf) {
//         alert(`Hello, ${name}`)
//     }

// }

// {
// //For Select Option
//     const currencies = ["USD", "EUR", "GBP", "UAH"];
//     let str = "<select>";
//     for (const currency of currencies) {
//         str += `<option>${currency}</option>`;
//     }
//     str += "</select>";
//     document.write(str);

// }

// {
// //For Table Horizontal
//     const names = ["John", "Paul", "George", "Ringo"]
//     let str = "<table>"
//     for (const name of names) {
//         str += `<td>${name}</td>`
//     }
//     str += "</table>"
//     document.write(str)
// }


// {
// //For Table Vertical
//     const names = ["John", "Paul", "George", "Ringo"]
//     let str = "<table>"
//     for (const name of names) {
//         str += `
//         <tr>
//         <td>${name}</td>
//       </tr>`
//     }
//     str += "</table>"
//     document.write(str)
// }

// {
// //For Table Letters
//     const currencies = ["USD", "EUR", "GBP", "UAH"];
//     let str = "<table>";

//     for (const currency of currencies) {
//         str += "<tr>";
//         for (const letter of currency) {
//             str += `<td>${letter}</td>`
//         }
//         str += "</tr>";
//     }

//     str += "</table>";
//     document.write(str);

// }



// {
// //For Multiply Table
//     let str = "<table>";

//     for (const num of arrMultiply) {
//         str += "<tr>";
//         for (const letter of num) {
//             str += `<td>${letter}</td>`
//         }
//         str += "</tr>";
//     }

//     str += "</table>";
//     document.write(str);

// }


// {
// // Function capitalize
//     const capitalize = str => {
//         const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//         return result;
//     };

//     console.log(capitalize("cANBerRa"));

//     // Map Capitalize
//     const arrPromptString = prompt('Enter text');
//     const wordsArray = arrPromptString.split(' ');
//     const wordRes = wordsArray.map(word => capitalize(word));
//     const capitalizedString = wordRes.join(' ');
//     console.log(capitalizedString);
// }

// {
// //Filter Lexics
//     let userInput = prompt("Enter a sentence:");
//     let wordsArray = userInput.split(" ");

//     const forbiddenWords = ['bad', 'inappropriate', 'offensive'];

//     let filteredArray = wordsArray.filter(word => !forbiddenWords.includes(word.toLowerCase()));
//     let resultString = filteredArray.join(" ");

//     console.log(resultString);
// }



// {
// // Beep Lexics 
//     let userInput = prompt("Enter a sentence:");
//     let wordsArray = userInput.split(" ");

//     const forbiddenWords = ['bad', 'inappropriate', 'offensive'];

//     let replacedArray = wordsArray.map(word => forbiddenWords.includes(word.toLowerCase()) ? 'BEEP' : word);
//     let resultString = replacedArray.join(" ");

// console.log(resultString);

// }

// {
// // Reduce HTML
//     const currencies = ["USD", "EUR", "GBP", "UAH"];
//     let str = "<select>";
//     str += currencies.reduce((a, b) => a + `<option>${b}</option>`, "");
//     str += "</select>";
//     console.log(str);

//     document.write(str);
// }


{
    // For Brackets Hell Check

    const line = prompt();
    const bracketsStack = [];
    let i = 0;
    
    for (const character of line) {
        if (character === '(' || character === '[' || character === '{') {
            bracketsStack.push({ character, index: i });
        } else if (character === ')' || character === ']' || character === '}') {
            if (bracketsStack.length === 0) {
                console.log(`Error: Unmatched closing bracket at position ${i}`);
                break;
            }
    
            const lastOpeningBracket = bracketsStack.pop();
    
            if (
                (character === ')' && lastOpeningBracket.character !== '(') ||
                (character === ']' && lastOpeningBracket.character !== '[') ||
                (character === '}' && lastOpeningBracket.character !== '{')
            ) {
                console.log(`Error: Unmatched closing bracket at position ${i}`);
                break;
            }
        }
    
        i++;
    }
    
    if (bracketsStack.length === 0) {
        console.log('No bracket matching errors found. Congratulations!');
    } else {
        console.log(`Error: Unmatched opening bracket at position ${bracketsStack[0].index}`);
    }
    

}