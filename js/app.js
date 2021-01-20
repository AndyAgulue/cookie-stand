'use strict'
console.log('javascript loading')

var hourly =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','total']
var seattle = {
  name: 'Seattle' ,
  minCust: 23 ,
  maxCust: 65 ,
  avgCookie: 6.3 ,
  avgCookiePerHr: [] ,
  perHour: function () {
    var randCookie = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    //this.avgCookiePerHr.push (randCookie);
    console.log(this.avgCookiePerHr);
  //console.log(randCookie);
    return randCookie;
  },
  totalPerHr: function(){
    for (var i = 0; i < hourly.length; i++) {
      this.avgCookiePerHr.push(this.perHour())
      //this.agvCust.push (randCust);
      //console.log(randCookie)
     }

  }
  
}
seattle.totalPerHr()
console.log(seattle);

var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = seattle.name;
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);

for (var j = 0; j < hourly.length; j++){
  var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = seattle.avgCookiePerHr[j];
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);
}


var tokyo = {
  name: 'Tokyo' ,
  minCust: 3 ,
  maxCust: 24 ,
  avgCookie: 1.2 ,
  avgCookiePerHr: [] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    //this.agvCust = randCust
    return randCust;
  },
  totalPerHr: function(){
   for (var i = 0; i < hourly.length; i++){ 
    this.avgCookiePerHr.push(this.perHour())
  } 
 }
}
tokyo.totalPerHr()
console.log(tokyo);

var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = tokyo.name;
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);

for (var j = 0; j < hourly.length; j++){
  var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = tokyo.avgCookiePerHr[j];
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);
}




var dubai = {
  name: 'Dubai' ,
  minCust: 11 ,
  maxCust: 38 ,
  avgCookie: 3.7 ,
  avgCookiePerHr: [] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    return randCust;
  },
  totalPerHr: function(){
  for (var i = 0; i < hourly.length; i++) {
    this.avgCookiePerHr.push(this.perHour())
    
  }
 } 
}  
dubai.totalPerHr()
console.log(dubai);

var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = dubai.name;
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);

for (var j = 0; j < hourly.length; j++){
  var divElement = document.createElement('div');
var h2Element = document.createElement('h2');
h2Element.textContent = dubai.avgCookiePerHr[j];
divElement.appendChild(h2Element);
var  storeName = document.getElementById('content');
storeName.appendChild(divElement);
}


var paris = {
  name: 'Paris' ,
  minCust: 20 ,
  maxCust: 38 ,
  avgCookie: 2.3 ,
  avgCookiePerHr: [] ,
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    return randCust;
  },
    totalPerHr: function(){
    for (var i = 0; i < hourly.length; i++) {
     this.avgCookiePerHr.push(this.perHour())
  } 
   }
}
   paris.totalPerHr()
   console.log(paris);

   var divElement = document.createElement('div');
   var h2Element = document.createElement('h2');
   h2Element.textContent = paris.name;
   divElement.appendChild(h2Element);
   var  storeName = document.getElementById('content');
   storeName.appendChild(divElement);
   
   for (var j = 0; j < hourly.length; j++){
   var divElement = document.createElement('div');
   var h2Element = document.createElement('h2');
   h2Element.textContent = paris.avgCookiePerHr[j];
   divElement.appendChild(h2Element);
   var  storeName = document.getElementById('content');
   storeName.appendChild(divElement);
   }



var lima = {
  name: 'Lima' ,
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  avgCookiePerHr: [],
  perHour: function (avgPerHr) {
    var randCust = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    return randCust;
  },
  totalPerHr: function(){
     for (var i = 0; i < hourly.length; i++) {
      this.avgCookiePerHr.push(this.perHour())
  } 
   }
}
  lima.totalPerHr()
  console.log(lima)
  
var divElement = document.createElement('div');
   var h2Element = document.createElement('h2');
   h2Element.textContent = lima.name;
   divElement.appendChild(h2Element);
   var  storeName = document.getElementById('content');
   storeName.appendChild(divElement);
   
   for (var j = 0; j < hourly.length; j++){
   var divElement = document.createElement('div');
   var h2Element = document.createElement('h2');
   h2Element.textContent = lima.avgCookiePerHr[j];
   divElement.appendChild(h2Element);
   var  storeName = document.getElementById('content');
   storeName.appendChild(divElement);
   }

// function store(name, minCust, maxCust, cookiesPerSale, hourly, custPerHour)
