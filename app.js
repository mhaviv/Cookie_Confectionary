let oreo = 0;
let chocolate_chip = 0;
let ginger_bread = 0;
let totalCookies = document.getElementsByClassName('totalCount');
let oreoCount = document.getElementsByClassName("oreoClickCount");
let ccCount = document.getElementsByClassName("chocochipClickCount");
let gbCount = document.getElementsByClassName("gingerbreadClickCount");




var NAME_KEY = 'name-field';
var storedName = Cookies.get(NAME_KEY);


function oreoCounter() {
  oreo++;
  oreo += "";
  Cookies.set("oreocookie", oreo);
  oreoCount[0].innerHTML=`<div>Count: ${oreo}</div>`
  cookieCount()
}

function chocoChipCounter() {
  chocolate_chip++;
  chocolate_chip += "";
  Cookies.set("chocolatechipcookie", chocolate_chip);
  ccCount[0].innerHTML=`<div>Count: ${chocolate_chip}</div>`
  cookieCount()
}

function gbCookieCounter() {
  ginger_bread++;
  ginger_bread += "";
  Cookies.set("gingerbreadcookie", ginger_bread);
  gbCount[0].innerHTML=`<div>Count: ${ginger_bread}</div>`
  cookieCount()
}

if (typeof Cookies.get("oreocookie") == "string") {
  oreo = Cookies.get("oreocookie");
}

if (typeof Cookies.get("chocolatechipcookie") == "string") {
  chocolate_chip = Cookies.get("chocolatechipcookie");
}

if (typeof Cookies.get("gingerbreadcookie") == "string") {
  ginger_bread = Cookies.get("gingerbreadcookie");
}

function cookieCount() {
  let cookiestotal = Number(oreo) + Number(chocolate_chip) + Number(ginger_bread);
  totalCookies[0].innerHTML=`<div>Count: ${cookiestotal}</div>`
  // console.log(totalCookies[0]);
}


// function cookieStorage() {
//   totalCookies.addEventListener('click', function(e) {
    
//   });
// }

function reset() {
  Cookies.set("oreocookie", 0);
  Cookies.set("chocolatechipcookie", 0);
  Cookies.set("gingerbreadcookie", 0);
  oreo = 0;
  chocolate_chip = 0;
  ginger_bread = 0;
  cookiestotal = 0;
  totalCookies[0].innerHTML=`<div>Count: 0</div>`
  oreoCount[0].innerHTML=`<div>Count: 0</div>`
  ccCount[0].innerHTML=`<div>Count: 0</div>`
  gbCount[0].innerHTML=`<div>Count: 0</div>`
  console.log('reset');
}
