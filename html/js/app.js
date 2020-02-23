`use strict`

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

var Seattle = {
    minCus: 23,
    maxCus: 65,
    avgCookiesPerCus: 6.3,
    cusPerhr: 0,

    RandomNumOfCus: function (min,max) {

        for (var i = 0; i < hours.length; i++) {

            this.cusPerhr [i]= getRandomIntInclusive(this.minCus,this.maxCus);
            return this.cusPerhr;
        
        }

    } ,

numOfCookies: function () {

    for (var j=0; j<hours.length ; j++)
    {
    var cookies = this.RandomNumOfCus(this.minCus,this.maxCus) * this.avgCookiesPerCus ;

    return cookies[j];

    } 

} ,

render: function () {
    var container = document.getElementById('kittenProfiles');
    // create and append article to the container
    var articleE1 = document.createElement('article');
    container.appendChild(articleE1);
    // create h2 with frankie name as textContent and append it to the article
    var h2E1 = document.createElement('h2');
    articleE1.appendChild(h2E1);
    h2E1.textContent = this.name;
   // create p with frankie age string and append it to article
   var pE1 = document.createElement('p');
   articleE1.appendChild(pE1);
   // Frankie is adorable, and is 4 months old.
   pE1.textContent = `Frankie is adorable, he is ${this.age} months old.`;
   // create ul and append it to article
   var ulE1 = document.createElement('ul');
   articleE1.appendChild(ulE1);
   // append li's to the ul containing frankie likes
   for(var i =0; i<this.likes.length ; i++) {
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = this.likes[i];
   }

}
}









// var Tokyo = {
//     minCus: 3,
//     maxCus: 24,
//     avgCperS: 1.2,

// }

// var Dubai = {
//     minCus: 11,
//     maxCus: 38,
//     avgCperS: 3.7,

// }

// var Paris = {
//     minCus: 20,
//     maxCus: 38,
//     avgCperS: 2.3,

// }

// var Lima = {
//     minCus: 2,
//     maxCus: 16,
//     avgCperS: 4.6,

// }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}