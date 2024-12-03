// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicit global variable
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new customer'; // Will throw an error
}