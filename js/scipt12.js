let weight = document.querySelector('#weight')
let height = document.getElementById('height')
let calBMI = document.getElementById('caBML')
let bmiBMI = document.getElementById('bimBML')
let bmiResult = document.getElementById('bmiResult')



function calculateBMI(){
      if(weight.value.trim().length == 0){
            alert('ป้อนน้ำหนักด้วย')
      }else if(height.valeu.trim().length ==0){
            alert('ป้อนส่วนสูงด้วย')
      }else{
            let bmiValueShow = Number(weight.value)/((Number(height.value)/100)**2)
            
            bmiValue.innerHTML = bmiValueShow.toFixed(2)
            //เอาค่า bmi มาแปลผล



            if( bmiValueShow < 18.50){
                  bmiResult.innerHTML= 'น้อย / ผอม'
            }else if( bmiValueShow <= 22.90){
                  bmiValueShow.innerHTML='ปกติ /(สุขภาพดี)'
            }else if( bmiValueShow <= 24.90){
                  bmiValueShow.innerHTML='ท้วม / (โรคอ้วน 1)'
            }else if( bmiValueShow <= 29.90){
                  bmiValueShow.innerHTML='อ้วน /(โรคอ้วน 2)'
            }else{
                  bmiValueShow.innerHTML='อ้วนมาก /(โรคอ้วน 3)'
            }
      }

}
 

calBMI.addEventListener('click', calculateBMI)

calBML.add