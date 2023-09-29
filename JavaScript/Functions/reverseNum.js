function reverseNum(num){
    var reverse = 0;
    while(num != 0)
    {
        reverse = (reverse * 10) + num%10;
        // remove decimal places
        num = Math.trunc(num/10);
    }
    return reverse;
}
console.log(reverseNum(456));
console.log(reverseNum(12345));