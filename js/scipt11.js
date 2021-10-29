let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancal = document.getElementById('btnCancal');
let result = document.getElementById('result');


//ลองทดสอบตัวแปรที่อ้างไว่ข้างต้นว่าไปยังคอนเทนต์ในเอกสาร html เรยบร้อยมั้ย

btnCal.addEventListener('click',()=> {
      //alert(money.value)
      //Result.innerHTML = 'www www www'
      if( money.value.trim() .length == 0){
            alert('ป้อนเงินด้วย')
      }else if( person.value trim().length == 0){
            alert('ป้อนคนด้วย')
      }else{
            let moneyshare =Number(money.value) / Number(person.value)
            result.innerHTML = moneyshare.toFixed(2)
            //พร้อมคำนวณ
      }
})

//event click ของปุ่ม btnCancle
//btnCancal.addEventListener('click',()=> {
      //alert(person.value)
     // money.value=''
     // person.value=''
     // result.innerHTML='0.00'
//})
btnCancal.addEventListener('click',()=> 

function clearScreen(0){

      //alert(person.value)
      money.value=''
      person.value=''
      result.innerHTML='0.00'
}
