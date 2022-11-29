// Write your solution in this file!

constants
const x= 40;


// Number 1

var customerName="kamau"

// Number 2

function upperCaseCustomerName()

{
    return customerName.toUpperCase()
}

console.log(upperCaseCustomerName())

// Number 3

var bestCustomer="";

function setBestCustomer()

{
    bestCustomer='not bob'
}

setBestCustomer()

console.log(bestCustomer);

// Number 4

function overwriteBestCustomer()

{
    var bestCustomer = "New Name"

    return bestCustomer
}

console.log(overwriteBestCustomer());

// Number 5

function leastFavoriteCustomer()

{
    console.log("Value of x is:",x);
}

leastFavoriteCustomer()

// Number 6
function changeLeastFavoriteCustomer()
{

    x=50;
    
    console.log("Value of new changed x is:",x);

}

changeLeastFavoriteCustomer()
