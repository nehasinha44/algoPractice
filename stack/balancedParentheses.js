class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
         return !Boolean(this.items.length); // equivalent to `!!this.items.length`
     }

     push(item) {
         this.items.splice(0, 0, item);
     }

     pop() {
         return this.items.shift();
     }

     peek() {
         return this.items[0];
     }

     size() {
         return this.items.length;
     }
}

function Parachecker(symbbolString){
    var s = new Stack();
    var balanced =true;
    var index = 0;
    var openingSymbols = ['(', '[', '{'];

    while(index < symbbolString.length && balanced ){
        var symbol = symbbolString[index]; //string value first char
        if(openingSymbols.includes(symbol)){
            s.push(symbol);
        }
        else{
            if(s.isEmpty()){
                balanced = false;
            }
            else{
                s.pop();
                if (matches(top, symbol)) {
                    balanced = false;
                }
            }
        }
        index++;
    }
    if(balanced && s.isEmpty()){
        return true
    }
    else{
        return false;

    }
}
function matches(open, close) {
    opens = ['(', '[', '{'];
    closers = [')', ']', '}'];
    return opens.indexOf(open) === closers.indexOf(close);
}

console.log(Parachecker('{{([][])}()}'));
