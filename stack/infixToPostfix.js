function infixToPostfix(infixexpr) {
    infixexpr = infixexpr.replace(/\s/g,'');
    var prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1
    };

    var opStack = new Stack();
    var postfixList = [];
    var tokenList = infixexpr.split('');

    for (var i = 0; i < tokenList.length; i++) {
        var token = tokenList[i];
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(token) || '0123456789'.includes(token)) {
            postfixList.push(token);
        }
        else if (token === '(') {
            opStack.push(token);
        }
        else if (token === ')') {
            var topToken = opStack.pop();
            while (topToken !== '(') {
                postfixList.push(topToken);
                topToken = opStack.pop();
            }
        }
        else {
            while (!opStack.isEmpty() && prec[opStack.peek()] >= prec[token]) {
                postfixList.push(opStack.pop());
            }
            opStack.push(token);
        }
    }

    while (!opStack.isEmpty()) {
        postfixList.push(opStack.pop());
    }
    return postfixList.join(' ');
}

console.log( infixToPostfix('( A + B ) * C - ( D - E ) * ( F + G )') );

console.log( infixToPostfix('A * B + C * D') );