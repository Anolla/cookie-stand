'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var seattle = {
//     location: "Seattle",
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     customers: [],
//     avgCustomers: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
//         }
//     },
//     cookies: [],
//     cookiesPurchased: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customers[j] * this.avg));
//         }
//     },
//     sum: 0,
//     cookiesSum: function () {
//         var sumation = 0 ;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i]
//         }
//         this.sum = sumation
//     },
//     render: function () {
//         var divE1 = document.createElement('div');
//         console.log(divE1);
//         document.body.appendChild(divE1);
//         divE1.setAttribute('id','SeattleStore')
//         var container =  document.getElementById('SeattleStore');
//         var h2E1 = document.createElement('h2');
//         container.appendChild(h2E1);
//         h2E1.textContent = this.location;
//        var ulE1 = document.createElement('ul');
//        container.appendChild(ulE1);
//        for(var i =0; i<this.cookies.length ; i++) {
//            var liE1 = document.createElement('li');
//            ulE1.appendChild(liE1);
//            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
//        }

//        var liE1 = document.createElement('li');
//        ulE1.appendChild(liE1);
//        liE1.textContent = `Total: ${this.sum} cookies`;
//          console.log(container);
//     }
// }
// seattle.avgCustomers();
// seattle.cookiesPurchased();
// seattle.cookiesSum();
// seattle.render();
// console.log(seattle);

var Stores = [];

function Store(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = [];
    this.cookies = [];
    this.sum = 0;
    Stores.push(this);
    console.log('Stores Array', Stores);

}

Store.prototype.avgCustomers = function () {

    for (var i = 0; i < hours.length; i++) {
        this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    }
}


Store.prototype.cookiesPurchased = function () {

    for (var j = 0; j < hours.length; j++) {
        this.cookies.push(Math.floor(this.customers[j] * this.avg));
    }
}



Store.prototype.cookiesSum = function () {

    var sumation = 0;
    for (var i = 0; i < hours.length; i++) {
        sumation = sumation + this.cookies[i];
    }
    this.sum = sumation;
}



Store.prototype.render = function () {

    var container = document.getElementById("cities");
    // var h2E1 = document.createElement('h2');
    // container.appendChild(h2E1);


    var tableE1 = document.createElement('table');
    container.appendChild(tableE1);


    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    // var trE2 = document.createElement('tr');
    // tableE1.appendChild(trE2);
    // var trE3 = document.createElement('tr');
    // tableE1.appendChild(trE3);
    // var trE4 = document.createElement('tr');
    // tableE1.appendChild(trE4);
    // var trE5 = document.createElement('tr');
    // tableE1.appendChild(trE5);

    var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    // var thE2 = document.createElement('th');
    // trE1.appendChild(thE2);


    // var thE3 = document.createElement('th');
    // trE3.appendChild(thE3);
    // var thE4 = document.createElement('th');
    // trE4.appendChild(thE4);
    // var thE5 = document.createElement('th');
    // trE5.appendChild(thE5);
    thE1.textContent = this.location;


    // for (var j = 0; j < Stores.length; j++) {

    // var tdE1 = document.createElement('td');
    // var tdE2 = document.createElement('td');
    // var tdE3 = document.createElement('td');
    // var tdE4 = document.createElement('td');
    // var tdE5 = document.createElement('td');
    // trE2.appendChild(tdE1);
    // trE2.appendChild(tdE2);
    // trE3.appendChild(tdE3);
    // trE4.appendChild(tdE4);
    // trE5.appendChild(tdE5);

    // tdE1.textContent = this.location;
    // tdE2.textContent = this.location;
    // tdE3.textContent = this.location;
    // tdE4.textContent = this.location;
    // tdE5.textContent = this.location;



    // }
}

var container = document.getElementById("cities");
var tableE1 = document.createElement('table');
container.appendChild(tableE1);

var trE0 = document.createElement('tr');
tableE1.appendChild(trE0);
var thE0 = document.createElement('th');
trE0.appendChild(thE0);
var thE01 = document.createElement('th');
trE0.appendChild(thE01);

thE0.textContent = "";
thE01.textContent = hours[1];
// thE2.textContent= hours[0];








// for (var i = 0; i < this.cookies.length; i++) {
//     var liE1 = document.createElement('li');
//     ulE1.appendChild(liE1);
//     liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`
// }
//     var liE1 = document.createElement('li');
//     ulE1.appendChild(liE1);
//     liE1.textContent = `Total: ${this.sum} cookies`;
//     console.log(container);
// }

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

// seattle.avgCustomers();
// seattle.cookiesPurchased();
// seattle.cookiesSum();
// seattle.render();

for (var i = 0; i < Stores.length; i++) {

    //     //     Stores[i].avgCustomers();
    //     //     Stores[i].cookiesPurchased();
    //     //     Stores[i].cookiesSum();
    Stores[i].render();
}
// console.log(Store);


// var tokyo = {
//     location: "Tokyo",
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     customers: [],
//     avgCustomers: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
//         }
//     },
//     cookies: [],
//     cookiesPurchased: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customers[j] * this.avg));
//         }
//     },
//     sum: 0,
//     cookiesSum: function () {
//         var sumation = 0 ;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i]
//         }
//         this.sum = sumation;
//     },
//     render: function () {
//         var divE1 = document.createElement('div');
//         console.log(divE1);
//         document.body.appendChild(divE1);
//         divE1.setAttribute('id','TokyoStore')
//         var container =  document.getElementById('TokyoStore');
//         var h2E1 = document.createElement('h2');
//         container.appendChild(h2E1);
//         h2E1.textContent = this.location;
//        var ulE1 = document.createElement('ul');
//        container.appendChild(ulE1);
//        for(var i =0; i<this.cookies.length ; i++) {
//            var liE1 = document.createElement('li');
//            ulE1.appendChild(liE1);
//            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
//        }

//        var liE1 = document.createElement('li');
//        ulE1.appendChild(liE1);
//        liE1.textContent = `Total: ${this.sum} cookies`;
//          console.log(container);
//     }
// }
// tokyo.avgCustomers();
// tokyo.cookiesPurchased();
// tokyo.cookiesSum();
// tokyo.render();
// console.log(tokyo);
// var dubai = {
//     location: "Dubai",
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     customers: [],
//     avgCustomers: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
//         }
//     },
//     cookies: [],
//     cookiesPurchased: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customers[j] * this.avg));
//         }
//     },
//     sum: 0,
//     cookiesSum: function () {
//         var sumation = 0 ;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i]
//         }
//         this.sum = sumation
//     },
//     render: function () {
//         var divE1 = document.createElement('div');
//         console.log(divE1);
//         document.body.appendChild(divE1);
//         divE1.setAttribute('id','dubaiStore')
//         var container =  document.getElementById('dubaiStore');
//         var h2E1 = document.createElement('h2');
//         container.appendChild(h2E1);
//         h2E1.textContent = this.location;
//        var ulE1 = document.createElement('ul');
//        container.appendChild(ulE1);
//        for(var i =0; i<this.cookies.length ; i++) {
//            var liE1 = document.createElement('li');
//            ulE1.appendChild(liE1);
//            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
//        }

//        var liE1 = document.createElement('li');
//        ulE1.appendChild(liE1);
//        liE1.textContent = `Total: ${this.sum} cookies`;
//          console.log(container);
//     }
// }
// dubai.avgCustomers();
// dubai.cookiesPurchased();
// dubai.cookiesSum();
// dubai.render();
// console.log(dubai);
// var paris = {
//     location: "Paris",
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     customers: 0,
//     customers: [],
//     avgCustomers: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
//         }
//     },
//     cookies: [],
//     cookiesPurchased: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customers[j] * this.avg));
//         }
//     },
//     sum: 0,
//     cookiesSum: function () {
//         var sumation = 0 ;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i]
//         }
//         this.sum = sumation
//     },
//     render: function () {
//         var divE1 = document.createElement('div');
//         console.log(divE1);
//         document.body.appendChild(divE1);
//         divE1.setAttribute('id','parisStore')
//         var container =  document.getElementById('parisStore');
//         var h2E1 = document.createElement('h2');
//         container.appendChild(h2E1);
//         h2E1.textContent = this.location;
//        var ulE1 = document.createElement('ul');
//        container.appendChild(ulE1);
//        for(var i =0; i<this.cookies.length ; i++) {
//            var liE1 = document.createElement('li');
//            ulE1.appendChild(liE1);
//            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
//        }

//        var liE1 = document.createElement('li');
//        ulE1.appendChild(liE1);
//        liE1.textContent = `Total: ${this.sum} cookies`;
//          console.log(container);
//     }
// }
// paris.avgCustomers();
// paris.cookiesPurchased();
// paris.cookiesSum();
// paris.render();
// console.log(paris);
// var lima = {
//     location: "Lima",
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     customers: [],
//     avgCustomers: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
//         }
//     },
//     cookies: [],
//     cookiesPurchased: function () {
//         for (var j = 0; j < hours.length; j++) {
//             this.cookies.push(Math.floor(this.customers[j] * this.avg));
//         }
//     },
//     sum: 0,
//     cookiesSum: function () {
//         var sumation = 0 ;
//         for (var i = 0; i < this.cookies.length; i++) {
//             sumation = sumation + this.cookies[i]
//         }
//         this.sum = sumation
//     },
//     render: function () {
//         var divE1 = document.createElement('div');
//         console.log(divE1);
//         document.body.appendChild(divE1);
//         divE1.setAttribute('id','limaStore')
//         var container =  document.getElementById('limaStore');
//         var h2E1 = document.createElement('h2');
//         container.appendChild(h2E1);
//         h2E1.textContent = this.location;
//        var ulE1 = document.createElement('ul');
//        container.appendChild(ulE1);
//        for(var i =0; i<this.cookies.length ; i++) {
//            var liE1 = document.createElement('li');
//            ulE1.appendChild(liE1);
//            liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
//        }

//        var liE1 = document.createElement('li');
//        ulE1.appendChild(liE1);
//        liE1.textContent = `Total: ${this.sum} cookies`;
//          console.log(container);
//     }

// }
// lima.avgCustomers();
// lima.cookiesPurchased();
// lima.cookiesSum();
// lima.render();
// console.log(lima);