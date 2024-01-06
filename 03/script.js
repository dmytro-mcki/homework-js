//String: greeting
{
    let userName = prompt('Task 1: Greeting\n\nEnter your name:');
    let greeting = 'Hello, ' + userName + '!';
    alert(greeting);
}

//String: gopni4ek
{
    let userInput = prompt('Task 2: String Manipulation\n\nEnter a string with coma :');
    let modifiedString = userInput.split(',').join(' блін, ');
    alert(modifiedString);
}

//String: capitalize
{
    let str = "cANBerRa";
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);
}
//String: word count

    let inputString = prompt('Task 4: Word Count\n\nEnter a string:');
    let wordsArray = inputString.split(' ');
    let wordCount = wordsArray.length;
    alert('Number of words: ' + wordCount);

//String: credentials
{
    let firstName = prompt('Task 5: Full Name Processing\n\nEnter your first name:');
    let lastName = prompt('Enter your last name:');
    let middleName = prompt('Enter your middle name:');
    let formattedFirstName = capitalize(firstName.trim().toLowerCase());
    let formattedLastName = capitalize(lastName.trim().toLowerCase());
    let formattedMiddleName = capitalize(middleName.trim().toLowerCase());
    let fullName = `${formattedLastName} ${formattedFirstName} ${formattedMiddleName}`;
    alert('Formatted Full Name: ' + fullName);

    function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
{//String: beer
    let newStr = "Було жарко. Василь пив пиво вприкуску з креветками";
    let newResult = newStr.split(' ').map(word => word === 'пиво' ? 'чай' : word).join(' ');
    console.log(newResult);
}
{//String: no tag
    let originalString = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let tagStartIndex = originalString.indexOf('<');
    let tagEndIndex = originalString.indexOf('>', tagStartIndex);

    if (tagStartIndex !== -1 && tagEndIndex !== -1) {
    let stringWithoutTag = originalString.slice(0, tagStartIndex) + originalString.slice(tagEndIndex + 1);
    console.log(stringWithoutTag);
    } else {
    console.log("Tag not found in the string.");
    }
}
{//String: big tag
    let originalText = "якийсь текст у якому є один тег <br /> і всяке інше";
    let startTagIndex = originalText.indexOf('<');
    let endTagIndex = originalText.indexOf('>', startTagIndex);

    if (startTagIndex !== -1 && endTagIndex !== -1) {
    let tagToReplace = originalText.slice(startTagIndex, endTagIndex + 1);
    let uppercasedTag = tagToReplace.toUpperCase();
    let modifiedText = originalText.slice(0, startTagIndex) + uppercasedTag + originalText.slice(endTagIndex + 1);
    console.log(modifiedText);
    } else {
    console.log("Tag not found in the string.");
    }

}
{//String: new line

    let userInput = prompt('Task 9: Next Line\n\nEnter a string with \\n as the newline marker. You can include multiple lines: new line');

    if (userInput) {
        let multiLineString = userInput.split('\\n').join('\n');
        alert(multiLineString);
    } else {
        console.log("Invalid input. Please try again with a string containing '\\n' as the newline marker.");
    }

}
{//String: youtube

    const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    
    let userTextWithYoutubeLink = prompt('Task 10: Youtube\n\nEnter a text with a YouTube link:');

    if (userTextWithYoutubeLink) {
    let youtubeMatch = userTextWithYoutubeLink.match(youtubeLinkRegex);
    
    if (youtubeMatch && youtubeMatch[1]) {
        let videoId = youtubeMatch[1];
        let embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        
        document.write(embedCode);
    } else {
        console.log("YouTube video link not found in the entered text.");
    }
    } else {
    console.log("Invalid input. Please try again with a text containing a YouTube link.");
    }
}