'use strict'

var seattle = {
  name: 'Seattle' ,
  minCust: 23 ,
  maxCust: 65 ,
  avgCookie: 6.3 ,
  avgCust: null ,
  hourly: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.agvCust = randCust
    return randCust;
  }
  
}
seattle.perHour()
//console.log(seattle.perHour())
let array = [];
for (var i = 0; i < seattle.hourly.length; i++) {
   array.push(seattle.perHour())
  }
 console.log(array)
var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = seattle.name;
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);



var tokyo = {
  name: 'Tokyo' ,
  minCust: 3 ,
  maxCust: 24 ,
  avgCookie: 1.2 ,
  avgCust: null ,
  hourly: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.agvCust = randCust
    return randCust;
  }
}
tokyo.perHour()
let array1 = [];
for (var i = 0; i < tokyo.hourly.length; i++) {
   array1.push(tokyo.perHour())
  } 
console.log(array1)


var dubai = {
  name: 'Dubai' ,
  minCust: 11 ,
  maxCust: 38 ,
  avgCookie: 3.7 ,
  avgCust: null ,
  hourly: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.agvCust = randCust
    return randCust;
  }
}
dubai.perHour()
let array2 = [];
for (var i = 0; i < dubai.hourly.length; i++) {
   array2.push(dubai.perHour())
  } 
console.log(array2)


var paris = {
  name: 'Paris' ,
  minCust: 20 ,
  maxCust: 38 ,
  avgCookie: 2.3 ,
  hourly: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.agvCust = randCust
    return randCust;
  }
}
paris.perHour()
let array3 = [];
for (var i = 0; i < paris.hourly.length; i++) {
   array3.push(paris.perHour())
  } 
console.log(array3)


var lima = {
  name: 'Lima' ,
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hourly: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.agvCust = randCust
    return randCust;
  }    
}
lima.perHour()
let array4 = [];
for (var i = 0; i < lima.hourly.length; i++) {
   array4.push(lima.perHour())
  } 
console.log(array4)