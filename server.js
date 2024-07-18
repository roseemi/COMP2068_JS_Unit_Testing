const connect = require('connect')
const url = require('url')
var createError = require('http-errors');

const app = connect();

function calculate(x, y, operator) {
    switch(operator) {
        case "add":
            return x + y
        case "subtract":
            return x - y
        case "multiply":
            return x * y
        case "divide":
            return x / y
        default:
            return createError(400)
    }
}

app.listen(3000);
console.log('App running on http://localhost:3000');

function logger(req, res, next) {
    console.log("Received request to path: " + req.url);
    next(); // call next in order for the server to know that another middleware function must be executed
}

function calculator(req, res, next) {
    res.writeHead(200, 'text-html');
    res.write('<h1>Calculator</h1>');

    // GET data from the url
    let queryString = url.parse(req.url, true).query;

    // Convert x and y to numbers
    let x = Number(queryString.x);
    let y = Number(queryString.y);
    let operator = queryString.method;
    
    let result = calculate(x, y, operator)

    // Shows if invalid operations were shown
    if(isNaN(x) || isNaN(y)) {
        res.write('<h1>'.concat('Invalid operation.').concat('</h1>'))
    }
    else {
        res.write('<h3>Subtotal: '.concat(x).concat(' ').concat(operator).concat(' ').concat(y).concat('</h3>'));
        res.write('<h4>Total: '.concat(result).concat('</h4>'));
    }
    // end response
    res.end();
}

// Shows if an incorrect path was chosen
function notFound(req, res, next) {
    res.write('<h1>'.concat('This section doesn\'t exist').concat('</h1>'));
    res.end();
}

// Lab 2 because that's what the example URLs use
// app.use(logger);
app.use('/', calculator); 
app.use('/lab2', calculator); 
app.use('/lab3', calculator); 
app.use(notFound);