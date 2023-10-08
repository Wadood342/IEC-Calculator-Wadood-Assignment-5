
const expression = document.querySelector("#expression");
const output = document.querySelector("#answer")


// Save data to local storage
function saveData() {
    localStorage.setItem('expression', exp);
    localStorage.setItem('result', output.textContent);
}







let exp = "";
function makeExp(i) {
   
    const lastChar = exp.charAt(exp.length - 1);

    if (
        (i === '+' || i === '-' || i === '*' || i === '/') &&
        (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')
    ) {
       
        return;
    } else if (i === '.' && lastChar === '.') {
     
        return;
    }

    // Append the input to the expression
    exp = exp + i;
    expression.textContent = exp;
saveData();
}

function calculate() {
    if (exp.endsWith('+') || exp.endsWith('-') || exp.endsWith('*') || exp.endsWith('/') ) {
        output.textContent = 'Syntax Error';
        return;
    }
    const result = eval(exp);
    output.textContent = result;
    
    saveData();
}

function clearAll() {
    expression.textContent = "0";
    output.textContent = "_";
    exp = "";
}


function sqRoot() {
    const root = Math.sqrt(exp);
    output.textContent = root;

}

function backSpace() {
    exp = exp.slice(0, -1);
    expression.textContent = exp;
}

function calculatePercentage() {
    const percentage = eval(exp) / 100;
    exp = percentage; 
    output.textContent = exp; 
}

// Load data from local storage
function loadData() {
    const savedExpression = localStorage.getItem('expression');
    const savedResult = localStorage.getItem('result');
    
    if (savedExpression && savedResult) {
        exp = savedExpression;
        expression.textContent = exp;
        output.textContent = savedResult;
    }
}
