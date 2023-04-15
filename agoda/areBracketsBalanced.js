
// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	
	// Using ArrayDeque is faster
	// than using Stack class
	let stack = [];

	// Traversing the Expression
	for(let i = 0; i < expr.length; i++)   //"([{}])"
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}

		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

// Driver code
let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr))
	document.write("Balanced ");
else
	document.write("Not Balanced ");

// This code is contributed by rag2127

// </script>



function areBracketsBalanced(s) {
	let i = -1;
	let stack = [];
	for (let ch of s) {
		if (ch === '(' || ch === '{' || ch === '[') {
			stack.push(ch);
			i++;
		} else {
			if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
				stack.pop();
				i--;
			} else {
				return false;
			}
		}
	}
	return i === -1;
}

