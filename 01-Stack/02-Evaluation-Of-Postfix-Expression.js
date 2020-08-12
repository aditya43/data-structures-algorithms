const Stack = require('./stack/Stack');

// Performs Postfix Evaluation on a given exp
function postFixEvaluation (exp) {
    for (let i = 0; i < exp.length; i++) {
        const c = exp[i];

        if (!isNaN(c)) { Stack.push(c - '0'); } else {
            const val1 = Stack.pop();
            const val2 = Stack.pop();

            if (val1 == 'Underflow' || val2 == 'Underflow') {
                return "Can't perform postfix evaluation";
            }

            switch (c) {
                case '+':
                    Stack.push(val2 + val1);
                    break;

                case '-':
                    Stack.push(val2 - val1);
                    break;

                case '/':
                    Stack.push(val2 / val1);
                    break;

                case '*':
                    Stack.push(val2 * val1);
                    break;
            }
        }
    }

    return Stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation('235*+8-'));

// returns postfix evaluation can't be performed
console.log(postFixEvaluation('23*+'));
