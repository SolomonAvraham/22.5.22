function printRandomNumber() {
  var num = Math.floor(Math.random() * 10);
  return num;
}
printRandomNumber();

function randomNumber(num) {
  var rnd = Math.round(Math.random() * num);
    return rnd;
}


// function randonNumberOne(num) {
//     var rnd = Math.round(Math.random() * 10);
//     return rnd;
    
// }
// var a=randonNumberOne(prompt());
// console.log(a);


function popRandomArray() {
    var rndArray = [];
    for (var i = 0; i <10; i++){
        rndArray.push(Math.floor(Math.random()*10));

    }
    console.log(rndArray);
}
popRandomArray();


function getRandomNumFromUser() {

  var userNum = +prompt();
  var rnd = Math.floor(Math.random() * 10)
  if (userNum == rnd) {
    alert("Good Job!");
  }
  else {
    alert("Wrong");
  }

}

var sum = getRandomNumFromUser();
console.log(sum);