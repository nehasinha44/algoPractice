function baseConverter(decNumber, base) {
    var digits = '0123456789ABCDEF';

    var remstack = new Stack();

    while (decNumber > 0) {
        var rem = decNumber % base;
        remstack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    var newString = '';
    while (!remstack.isEmpty()) {
        newString = newString + digits[remstack.pop()];
    }

    return newString;
}

console.log( baseConverter(25, 2) );
console.log( baseConverter(25, 16) );