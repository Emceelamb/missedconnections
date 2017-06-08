// reference to the express code
var express = require('express');

// this os our server
var app = express();

var port = 2046;

// var port = 80;




app.listen(port,function(){
    console.log('server is running');
});

app.get('/', function(request, response,error){

    //server side
    console.log('a page has been requested');
    // client sidde
    response.send('hello World');
});

app.get('/', function(request, response, error){
    response.send("please visit /all_listings");
}

app.get('/all_listings', function(request,response,error){

    var fetched_data;
    fs.readFile('data/listings.json', function(data){
        fetched_data = JSON.parse(data);
        response.JSON(fetched_data)
    }

}

var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');

// var colList = [red]
function fetchWebpage(){
    // request url  
    var url = 'https://newyork.craigslist.org/search/mis';
    console.log('requesting url ' + url);
    request(url, function(error, response, body){
        if(error){
            console.log(error);
        }
    var $ = cheerio.load(body);        

    // looking for titles and hoods
    var titles = [];
    var areas = [];
    var url = []

    $('.result-title').each(function(index, element) {
        titles[index] = $(element).text();
        areas[index] = $(element).attr('href');
        url[index] = $url[index].slice('1','4');

        var listing = {
            'name': titles[index],
            'link': url[index],
            'hood': areas[index]
        }
    });

    // var area = $('.result-hood').text();
    var TT = 0;
    // for(var TT = 0; TT>titles.length;TT++){
    while(true){
        var x = Math.random()
        if(x>0.5){
        console.log(titles[TT].red);
       // console.log(x);
    }
        else{
            console.log(titles[TT].green);
         //   console.log(x);
    }
        TT++;

        if(TT>titles.length){
            TT=0;
        }
        sleep(500, function() {
   // executes after one second, and blocks the thread
});
    }
    // console.log(area);

    })

}

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}
fetchWebpage();