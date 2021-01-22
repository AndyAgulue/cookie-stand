'use strict'
console.log('javascript loading')
// Credit to you Matt, Ted and Fizzo for all your help
var targetEl = document.getElementById('content');
var table = document.createElement('table');
targetEl.appendChild(table);
var tableHead = document.createElement('thead');
table.appendChild(tableHead);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);


var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total'];
var tableTopLine = document.createElement('th');
tableTopLine.textContent = " ";
tableHead.appendChild(tableTopLine);

// var tableBody = document.createElement('tbody');
// table.appendChild(tableBody);

for (var i=0; i < hours.length; i++){
  var tableTopLine = document.createElement('th');
  tableTopLine.textContent = hours[i];
  tableHead.appendChild(tableTopLine);
}  
Stores.prototype.printTable = function(){
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  tableBody.appendChild(row);
  nameCell.textContent = this.name;
  row.append(nameCell);
}
var createElement = document.getElementById('content');
var table = document.createElement('table');
targetEl.appendChild(table);
var tableTopLine = document.createElement('thead');
table.appendChild(tableTopLine);


function Stores(name, minCust, maxCust, cookiesPerSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.custPerHr = [];
  this.totalCookiesPerDay = 0;
  this.arrayOfCookies = [];
}
Stores.prototype.custPerHr = function() {
  for (var j = 0; j < hours.length; j++){
    var cookiesThisHour = Math.floor((math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgCookies);
    this.totalCookiesPerDay += cookiesPerSale;
    this.arrayOfHourlyCookies.push(cookiesThisHour);
 }
 this.arrayOfCookies.push(totalCookiesPerDay);
}

var seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.custPerHr();
seattle.printTable();
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.custPerHr();
tokyo.printTable();
var dubai = new Stores('Dubai', 11, 38, 3.7);
dubai.custPerHr();
var paris = new Stores('Paris', 2, 16, 4.6);
paris.CustPerHr();
paris.printTable();
var lima = new Stores('Lima', 2, 16, 4.6);
lima.custPerHr();
lima.printTable();










// var seattle = {
//   name: 'Seattle' ,
//   minCust: 23 ,
//   maxCust: 65 ,
//   avgCookie: 6.3 ,
//   avgCookiePerHr: [] ,
//   perHour: function () {
//     var randCookie = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     //this.avgCookiePerHr.push (randCookie);
//     console.log(this.avgCookiePerHr);
//   //console.log(randCookie);
//     return randCookie;
//   },
//   totalPerHr: function(){
//     for (var i = 0; i < hourly.length; i++) {
//       this.avgCookiePerHr.push(this.perHour())
//       //this.agvCust.push (randCust);
//       //console.log(randCookie)
//      }

//   }
  
// }
// seattle.totalPerHr()
// console.log(seattle);

// var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = seattle.name;
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);

// for (var j = 0; j < hourly.length; j++){
//   var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = seattle.avgCookiePerHr[j];
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);
// }


// var tokyo = {
//   name: 'Tokyo' ,
//   minCust: 3 ,
//   maxCust: 24 ,
//   avgCookie: 1.2 ,
//   avgCookiePerHr: [] ,
//   perHour: function (avgPerHr) {
//     var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     //this.agvCust = randCust
//     return randCust;
//   },
//   totalPerHr: function(){
//    for (var i = 0; i < hourly.length; i++){ 
//     this.avgCookiePerHr.push(this.perHour())
//   } 
//  }
// }
// tokyo.totalPerHr()
// console.log(tokyo);

// var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = tokyo.name;
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);

// for (var j = 0; j < hourly.length; j++){
//   var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = tokyo.avgCookiePerHr[j];
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);
// }




// var dubai = {
//   name: 'Dubai' ,
//   minCust: 11 ,
//   maxCust: 38 ,
//   avgCookie: 3.7 ,
//   avgCookiePerHr: [] ,
//   perHour: function (avgPerHr) {
//     var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     return randCust;
//   },
//   totalPerHr: function(){
//   for (var i = 0; i < hourly.length; i++) {
//     this.avgCookiePerHr.push(this.perHour())
    
//   }
//  } 
// }  
// dubai.totalPerHr()
// console.log(dubai);

// var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = dubai.name;
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);

// for (var j = 0; j < hourly.length; j++){
//   var divElement = document.createElement('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = dubai.avgCookiePerHr[j];
// divElement.appendChild(h2Element);
// var  storeName = document.getElementById('content');
// storeName.appendChild(divElement);
// }


// var paris = {
//   name: 'Paris' ,
//   minCust: 20 ,
//   maxCust: 38 ,
//   avgCookie: 2.3 ,
//   avgCookiePerHr: [] ,
//   perHour: function (avgPerHr) {
//     var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     return randCust;
//   },
//     totalPerHr: function(){
//     for (var i = 0; i < hourly.length; i++) {
//      this.avgCookiePerHr.push(this.perHour())
//   } 
//    }
// }
//    paris.totalPerHr()
//    console.log(paris);

//    var divElement = document.createElement('div');
//    var h2Element = document.createElement('h2');
//    h2Element.textContent = paris.name;
//    divElement.appendChild(h2Element);
//    var  storeName = document.getElementById('content');
//    storeName.appendChild(divElement);
   
//    for (var j = 0; j < hourly.length; j++){
//    var divElement = document.createElement('div');
//    var h2Element = document.createElement('h2');
//    h2Element.textContent = paris.avgCookiePerHr[j];
//    divElement.appendChild(h2Element);
//    var  storeName = document.getElementById('content');
//    storeName.appendChild(divElement);
//    }



// var lima = {
//   name: 'Lima' ,
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   avgCookiePerHr: [],
//   perHour: function (avgPerHr) {
//     var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//     return randCust;
//   },
//   totalPerHr: function(){
//      for (var i = 0; i < hourly.length; i++) {
//       this.avgCookiePerHr.push(this.perHour())
//   } 
//    }
// }
//   lima.totalPerHr()
//   console.log(lima)
  
// var divElement = document.createElement('div');
//    var h2Element = document.createElement('h2');
//    h2Element.textContent = lima.name;
//    divElement.appendChild(h2Element);
//    var  storeName = document.getElementById('content');
//    storeName.appendChild(divElement);
   
//    for (var j = 0; j < hourly.length; j++){
//    var divElement = document.createElement('div');
//    var h2Element = document.createElement('h2');
//    h2Element.textContent = lima.avgCookiePerHr[j];
//    divElement.appendChild(h2Element);
//    var  storeName = document.getElementById('content');
//    storeName.appendChild(divElement);
//    }

 
