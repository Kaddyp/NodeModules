// User defined module
console.log("Date Module is accessed");

var myDate = function(){
    return Date();
}
console.log("Date Module is accessed 2");

var print = function(){
    console.log(Date());
}
//module.exports = myDate;
module.exports = {
    date: myDate,
    printDate: print
};