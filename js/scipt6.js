//control statement**********
//selection / condition satatemnt
//if,if-else, if-else-if, switch\
let a = 15;
if (a < 20) {
      console.log('hello...');
}
//-------
let b = 5;
if (b == 15) {
      console.log('wowww')
} else {
      console.log('weew')
}
//-------------
let c = 99

if (c > 100) {
      console.log('hi')

} else if (c > 80) {
      console.log('hey')

} else if (c > 50) {
      console.log('hello')

} else if (c > 0) {
      console.log('hum')

} else { //ไม่จำเป็นต้องมี if แปลว่ามี if ไม่ผิด 
      console.log('555')
}
//----------------

let d = 5
switch (d) {
      case 2: console.log('aaa')
            break
      case 4: console.log('bbb')
            break
      case 5: console.log('ccc')
            break
      case 9: console.log('ddd')
            break
      case 12: console.log('eee')
            break
      default: console.log('fff')

}

//loop/iteration statement
//whil,do-while,for,for-in,for-of
let i = 1

while (i <= 5) {
      console.log('SAU')
      ++i //i++ ,i=i+1,i+=1
}
//-----------------
let j = 1
do {
      console.log('IOT')
      ++j //i++ ,i=i+1,i+=1
} while (j <= 5)
//---------------
for (let k = 1; k <= 5; k++) {
      console.log('DTH')
}

console.log(i)
console.log(j)
//console.log(k)
