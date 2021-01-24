'use strict'
var storesElement = document.getElementById('store-list');
var tableElement = document.getElementById('store-table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

var stores = [];

var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  openHours: hours,
  cookieSalesPerHour: [],
  cookieTotalSales: 0,
//Only used to generate number of cookies based on the values given above
  generateCookiesAtHour: function() {
    return  Math.floor(generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie);
  },
//fills the cookie sales array with calculated cookie sales data for each hour that our store is open.
  generateCookiesPerHour: function () {
    // for every hour that the store is open
    for(var i=0; i < this.openHours.length; i++){
      // generates a number of cookies sold at that hour
      var cookieSales = this.generateCookiesAtHour();
      // adding up these totals for each store over all open hours
      this.cookieTotalSales = this.cookieTotalSales + cookieSales;
      // add that number to our cookie sales data
      this.cookieSalesPerHour.push(cookieSales);
    }
  },
// displays the store name
  displayList: function () {
    var listElement = document.createElement('ul');
    var nameElement = document.createElement('p');
    nameElement.textContent = this.name;
    listElement.appendChild(nameElement);
// creates the table for time and cookies per hour
    for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
      var itemElement = document.createElement('li');
      itemElement.textContent = `${this.openHours[i]}: ${this.cookieSalesPerHour[i]}`;// populates the list with text
      listElement.appendChild(itemElement);
    }
    // append our store total
    var itemElement = document.createElement('li');
    itemElement.textContent = `Daily Total: ${this.cookieTotalSales}`;
    listElement.appendChild(itemElement);
    storesElement.appendChild(listElement);
  }
}
function generateStoreCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
seattle.generateCookiesPerHour();
seattle.displayList();




// var seattle = {
//   name: '',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   openHours: hours,
//   cookieSalesPerHour: [],
//   cookieTotalSales: 0,
// //Only used to generate number of cookies based on the values given above
//   generateCookiesAtHour: function() {
//     return  Math.floor(generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie);
//   },
// //fills the cookie sales array with calculated cookie sales data for each hour that our store is open.
//   generateCookiesPerHour: function () {
//     // for every hour that the store is open
//     for(var i=0; i < this.openHours.length; i++){
//       // generates a number of cookies sold at that hour
//       var cookieSales = this.generateCookiesAtHour();
//       // adding up these totals for each store over all open hours
//       this.cookieTotalSales = this.cookieTotalSales + cookieSales;
//       // add that number to our cookie sales data
//       this.cookieSalesPerHour.push(cookieSales);
//     }
//   },
//   // displays the store name
//   displayList: function () {
//     var listElement = document.createElement('ul');
//     var nameElement = document.createElement('p');
//     nameElement.textContet = this.name;
//     listElement.appendChild(nameElement);
// // creates the table for time and cookies per hour
//     for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
//       var itemElement = document.createElement('li');
//       itemElement.textContent = `${this.openHours[i]}: ${this.cookieSalesPerHour[i]}`; // populates the list with text
//       listElement.appendChild(itemElement);
//     }
//     // append our store total
//     var itemElement = document.createElement('li');
//     itemElement.textContent = `Daily Total: ${this.cookieTotalSales}`;
//     listElement.appendChild(itemElement);
//     storesElement.appendChild(listElement);
//   }
// }
// function generateStoreCustomers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// seattle.generateCookiesPerHour();
// seattle.displayList();