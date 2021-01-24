'use strict';

var storesElement = document.getElementById('store-list');
var tableElement = document.getElementById('store-table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

var stores = [];

var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  openHours: hours,
  //openHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
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
  displayList: function () {
    var listElement = document.createElement('ul');
    var nameElement = document.createElement('p');
    nameElement.textContet = this.name;
    listElement.appendChild(nameElement);

    for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
      var itemElement = document.createElement('li');
      itemElement.textContent = `${this.openHours[i]}: ${this.cookieSalesPerHour[i]}`;
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

// seattle.generateCookiesPerHour();
// seattle.displayList();

function CookieStore(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.openHours = hours;
  this.cookieSalesPerHour = [];
  this.cookieTotalSales = 0;
};

CookieStore.prototype.generateCookiesAtHour = function () {
  return Math.floor(generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie);
};

CookieStore.prototype.generateCookiesPerHour = function () {
  for (var i = 0; i < this.openHours.length -1; i++) {
    var cookieSales = this.generateCookiesAtHour();
    this.cookieTotalSales = this.cookieTotalSales + cookieSales;
    this.cookieSalesPerHour.push(cookieSales); // the push
  }
};

// modigying this for table diplay instead of a list
CookieStore.prototype.displayTable = function () {
  var rowElement = document.createElement('tr');
  var nameElement = document.createElement('td');
  nameElement.textContent = this.name;
  rowElement.appendChild(nameElement);

  for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
    var cellElement = document.createElement('td');

    cellElement.textContent = `${this.cookieSalesPerHour[i]}`;
    rowElement.appendChild(cellElement);
  }

  var totalElement = document.createElement('td');
  totalElement.textContent = `${this.cookieTotalSales}`;
  rowElement.appendChild(totalElement);

  tableElement.appendChild(rowElement);
}


// populate table header, which creates on row that display the global for each store
function displayHeader() {
   var rowElement = document.createElement('tr');
   var blankElement = document.createElement('th');
   blankElement.textContent = ' ';
   rowElement.appendChild(blankElement);
  for (var i = 0; i < hours.length; i++){
   var hoursElement = document.createElement('td');
   hoursElement.textContent = hours[i];
   rowElement.appendChild(hoursElement);
  }
  tableElement.appendChild(rowElement);
}
displayHeader();
// populate the footer row, with the totals per store, per hour (think of a loop within a loop)
// function createFooter() {

//   // first start looping throuogh our total number of hours
//   var totalOfTotals = 0;
//   var hourlyTotal = 0;
//   for (var i = 0; i < hours.length; i++) {

//     // we just need to remember to reset at each hour
//     hourlyTotal = 0;

//     for (var j = 0; j < stores.length; j++) {

//       hourlyTotal += stores[j].cookieSalesPerHour[i];
//       totalOfTotals += stores[j].cookieSalesPerHour[i];
//     }
    
//   }
  
// }

// let's create all our stores!


var seattle = new CookieStore('Seattle', 23, 65, 6.3);
seattle.generateCookiesPerHour();
stores.push(seattle);


var lima = new CookieStore('Lima', 2, 16, 4.6);
lima.generateCookiesPerHour();
stores.push(lima);

var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
tokyo.generateCookiesPerHour();
stores.push(tokyo);

var dubai = new CookieStore('Dubai', 11, 38, 3.7);
dubai.generateCookiesPerHour();
stores.push(dubai);

var paris = new CookieStore('Paris', 20, 38, 2.3);
paris.generateCookiesPerHour();
stores.push(paris);





for (var i = 0; i < stores.length; i++) {
  stores[i].displayTable();
}

var boxElement = document.getElementById('box');

var inputElement = document.getElementById('input-one');

//var store = [];


// boxElement.addEventListener('click', console.log('box was clicked')); // we cannot define the function like this because console.log does not return a function

// console.log(inputElement);

// we get information passed into our callback, FROM OUR HTML

function Store(name, minCookie, maxCookie, avgCookie) {

  this.name = name;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
  this.avgCookie = avgCookie;

}


function footerMaker(){
  var targetOldFoot = document.getElementById('table-footer');
  targetOldFoot.parentNode.removeChild(targetOldFoot);
  var tableFoot = document.createElement('tfoot');
  tableFoot.setAttribute("id", "table-footer");
  tableElement.appendChild(tableFoot);
  var footRow = document.createElement('tr');
  footRow.textContent = "Totals"
  tableFoot.appendChild(footRow);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < stores.length ; i++){
    console.log(hourlyTotal)
    hourlyTotal = 0;
    var thisStore = stores[i];
    for (var j = 0; j < thisStore.cookieSalesPerHour.length; j++){
      console.log('cookieSalesPerHour: ' + thisStore.cookieSalesPerHour)
      hourlyTotal += thisStore.cookieSalesPerHour[j];
      //hourlyTotal += stores[j].cookieSalesPerHour[i];
      var totalOfTotals = hourlyTotal;
    }
    var footCell = document.createElement('td');
    footCell.textContent = totalOfTotals;
    footRow.appendChild(footCell);
  }
}
var formElement = document.getElementById('cookie-stand');

formElement.addEventListener('submit', function (event) {
  event.preventDefault(); // we need this to stop forms from refreshing
  var name = (event.target.name.value);
  var minCookie = parseInt(event.target.minCookie.value);
  var maxCookie = parseInt(event.target.maxCookie.value);
  var avgCookie = parseInt(event.target.avgCookie.value);

  new Store(name, minCookie, maxCookie, avgCookie);
  
});

footerMaker();
