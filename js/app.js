'use strict'
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

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Stores = [];

var tableE1 = document.createElement('table');

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

// function footer() {
//     var trE3 = document.createElement('tr');
//     tableE1.appendChild(trE3);
//     var tdE4 = document.createElement('td');
//     trE3.appendChild(tdE4);
//     tdE4.textContent ='Totals';
//     var add =0;
//     var final=0;
//     for (var i = 0; i < hours.length; i++) {
//         var tdE5 = document.createElement('td');
//     trE3.appendChild(tdE5);
//     var count=0;
//     for (var j=0; j<Stores.length; j++){
//         count+=Stores[j].cookies[i];
//     }
//     count++
//     final+=count;
//     tdE5.textContent=count;
//     }
//     var tdE3 = document.createElement('td');
//     trE3.appendChild(tdE3);
//     tdE3.textContent = final;

// }

// footer();


function headertable() {
    var headerE1 = document.createElement('tr');
    tableE1.appendChild(headerE1);
    var thE1 = document.createElement('th');
    headerE1.appendChild(thE1);
    thE1.textContent = 'location';

    for (var i = 0; i < hours.length; i++) {
        var th2 = document.createElement('th');
        headerE1.appendChild(th2);
        th2.textContent = hours[i];


    }

    var th3 = document.createElement('th');
    headerE1.appendChild(th3);
    th3.textContent = 'Daily Location Total';



}

headertable();

Store.prototype.render = function () {
    var container = document.getElementById('cities');

    container.appendChild(tableE1);


    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);


    var td1 = document.createElement('td');
    td1.textContent = this.location;
    trE1.appendChild(td1);


    //you can use hours array instead of cookies array.
    for (var i = 0; i < this.cookies.length; i++) {

        var td = document.createElement('td');
        td.textContent = this.cookies[i];
        trE1.appendChild(td);

    }

    var td5 = document.createElement('td');
    td5.textContent = this.sum;
    trE1.appendChild(td5);

}

function lastColomn() {

    for (var s = 0; s < Stores.length; s++) {


        var trE1 = document.createElement('tr');
        tableE1.appendChild(trE1);

        var td4 = document.createElement('td');
        td4.textContent = this.sum;
        trE1.appendChild(td4);

    }
}

function footerTable() {

    var tr = document.createElement('tr');
    tableE1.appendChild(tr);

    var td2 = document.createElement('td');
    td2.textContent = "Totals";
    tr.appendChild(td2);
    var totalOFTotal = 0;
    for (var i = 0; i < hours.length; i++) {
        var tdE5 = document.createElement('td');
        tr.appendChild(tdE5);
        var count = 0;
        for (var j = 0; j < Stores.length; j++) {
            count += Stores[j].cookies[i];
        }

        totalOFTotal += count;
        tdE5.textContent = count;
    }
    var td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = totalOFTotal;

}


// Store.prototype.tabledata = function () {

//     for (var k=0; k<Stores.length; k++){
//         var trE2 = document.createElement('tr');
//         tableE1.appendChild(trE2);
//         var tdE1 =document.createElement('td');
//         tableE1.appendChild(tdE1);
//         tdE1.textContent= Stores[k].location;
//      for(var z=0; z< hours.length; z++){
//        var tdE3=document.createElement('td');
//        tableE1.appendChild(tdE3);
//        tdE3.textContent= Stores[k].cookies[z];
//    }
//    var tdE4=document.createElement('td');
//        tableE1.appendChild(tdE4);
//        tdE4.textContent= Stores[k].sum;
// }
// }
// // console.log(Store.prototype.tabledata());

// seattle.tabledata();

// // console.log(Store.tableData());


// function tableData() {

//     for (var g = 0; g < Stores.length; g++) {
//         var trE2 = document.createElement('tr');
//         tableE1.appendChild(trE2);
//         var tdE1 = document.createElement('td');
//         tableE1.appendChild(tdE1);
//         tdE1.textContent = Stores[g].location;
//         for (var h = 0; h < hours.length; h++) {
//             var tdE3 = document.createElement('td');
//             tableE1.appendChild(tdE3);
//             tdE3.textContent = Stores[g].cookies[h];
//         }
//         var tdE4 = document.createElement('td');
//         tableE1.appendChild(tdE4);
//         tdE4.textContent = Stores[g].sum;
//     }

// }

// tableData();
// console.log(tableData());


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

    Stores[i].avgCustomers();
    Stores[i].cookiesPurchased();
    Stores[i].cookiesSum();
    Stores[i].render();
    // Stores[i].lastColomn();
}




var myForm = document.getElementById('infoform');
myForm.addEventListener('submit', function (event,Stores) {
    console.log('helllooo',Stores)
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var name = event.target.name.value;
    console.log(name);
    var mincus = parseInt(event.target.mincus.value);
    console.log(mincus);
    var maxcus = parseInt(event.target.maxcus.value);
    console.log(maxcus);
    var avg = parseFloat(event.target.avg.value);
    console.log(avg);
    //   var imgPath = `images/${name}.jpeg`;
    // function Cat(name,likes,imagePath,goodWithKids,goodWithDogs,goodWithOtherCats,breed)
    // var StoreObject = new Store(name, mincus, maxcus, avg);
      
      
    //   Stores.push(StoreObject);
     


    if (event.target.maxcus.value < event.target.mincus.value) {
        alert("Pleasr enter a number more than the minimum! ");
      
        
    }
    else {

        tableE1.removeChild(tableE1.lastChild);
        var StoreObject = new Store(name, mincus, maxcus, avg);
        StoreObject.avgCustomers();
        StoreObject.cookiesPurchased();
        StoreObject.cookiesSum();
        
        StoreObject.render();
        footerTable();


    }

    myForm.reset();

})



footerTable();
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

