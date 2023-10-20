function reverseWords(sentence) {
    
    const words = sentence.split(' ');

    
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// for example as the we can also edit with our own words
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
const numbersArray = [5, 2, 9, 1, 5, 6];

console.log("Reversed Sentence:", reversedSentence); // Output: "shiT si a ynnus yad"
console.log("Sorted Array in Descending Order:", sortArrayDescending(numbersArray)); // Output: [9, 6, 5, 5, 2, 1]
