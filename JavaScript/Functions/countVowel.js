function countVowel(str) {
    var count = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {

        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            // increament vowel count
            count++;
        }
    }

    return count;
}
console.log(countVowel("Hello"));
console.log(countVowel("umbrella"));