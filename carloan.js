
let caremival = document.getElementById("emi-car-value")
let carprincipalval = document.getElementById("principal-amount-car-value")
let carinterestval = document.getElementById("interest-car-value")
let cartotalval = document.getElementById("total-car-value")
let carcir = document.querySelector(".car-circle")

// loan Amount  

let carloaninput = document.getElementById("loan-car-input")

let carloanslider = document.getElementById("loan-car-slider")

// rate of interest  

let carrateinput = document.getElementById("rate-car-input")

let carrateslider = document.getElementById("rate-car-slider")

// loan tenure 

let cartenureinput = document.getElementById("tenure-car-input")

let cartenureslider = document.getElementById("tenure-car-slider")


let s21 = document.getElementById("span21")
let s22 = document.getElementById("span22")
let s23 = document.getElementById("span23")

let tool21 = document.getElementById("tool21")
let tool22 = document.getElementById("tool22")
let tool23 = document.getElementById("tool23")


function handleInput(event){
    event.target.value = parseFloat(event.target.value);
 
} 

function numberWithCommas(value) {
  // Attempt to convert the value to a number
  const number = parseFloat(value);

  // Check if the conversion was successful
  if (isNaN(number)) {
    // Handle the case where the value cannot be converted to a number
    return 'Invalid number';
  }

  return number.toLocaleString('en-IN');
}


// Event Listner  

carcir.style.background = `conic-gradient(#fec700 ${297.5}deg  , #dc291a 0deg)`

carloaninput.addEventListener("input" , (e)=>{


   carloanslider.value =  e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 10000000){
       e.target.value = 10000000
      
     }

    if(e.target.value < 100000){
       
        s21.style.background = "#fae9e5"
        s21.style.color = "#eb5b3c"
        
 
        tool21.style.display = "block"
       
        carloaninput.style.background = "#fae9e5"
        carloaninput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         carloaninput.style.color = "gray"
       }
        
     }else{
 
     s21.style.background = "#ebf9f5"
     s21.style.color = "#00b386"
     tool21.style.display = "none"         
     carloaninput.style.background = "#ebf9f5"
     carloaninput.style.color = "#00b386"
 
 
    }

    if(e.target.value == 0){
      carloanslider.value = 0
     }

    // carprincipalval.innerHTML =  '₹'   +  e.target.value
    const carprice = e.target.value 
    carprincipalval.innerHTML =  '₹'   + numberWithCommas(carprice);
    
    // caremival.innerHTML =  '₹'  +  Math.round((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) 
    const caremi = Math.round((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) 
    caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

    
    // carinterestval.innerHTML =  '₹' +  Math.round((( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value))
    const carintrest = Math.round((( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value))
    carinterestval.innerHTML =  '₹' +  numberWithCommas(carintrest);

    // cartotalval.innerHTML =  '₹' +   (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value)))
    const cartotal = (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value)))
    cartotalval.innerHTML =  '₹' + numberWithCommas(cartotal);

    if(e.target.value == 0 || carrateinput.value == 0 || cartenureinput.value == 0 ){
      caremival.innerHTML = "₹" + 0
     carprincipalval.innerHTML = "₹" +  0 
      carinterestval.innerHTML = "₹" + 0    
      cartotalval.innerHTML = "₹" + 0    
  }

})


carloanslider.addEventListener("input" , (e)=>{
    
    
    //    loaninput.value =  e.target.value

    //    principalval.innerHTML =  '₹' + e.target.value

    //    emival.innerHTML =  '₹'  +  Math.round((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) 

    //    interestval.innerHTML =  '₹' +  Math.round((( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value))

    //    totalval.innerHTML =  '₹' +   (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value)))

    if(e.target.value < 100000){
       
      s21.style.background = "#fae9e5"
      s21.style.color = "#eb5b3c"
      

      tool21.style.display = "block"
     
      carloaninput.style.background = "#fae9e5"
      carloaninput.style.color = "#eb5b3c"

      if(e.target.value == 0){
       carloaninput.style.color = "gray"
     }
      
   }else{

   s21.style.background = "#ebf9f5"
   s21.style.color = "#00b386"
   tool21.style.display = "none"         
   carloaninput.style.background = "#ebf9f5"
   carloaninput.style.color = "#00b386"


  }

    carloaninput.value =  e.target.value 

    // carprincipalval.innerHTML =  '₹'   +  e.target.value
    const carprice = e.target.value
    carprincipalval.innerHTML =  '₹'   + numberWithCommas(carprice);
    
    // caremival.innerHTML =  '₹'  +  Math.round((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) 
    const caremi =  Math.round((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) 
    caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

    
    // carinterestval.innerHTML =  '₹' +  Math.round((( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value))
    const carintrest = Math.round((( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value))
    carinterestval.innerHTML =  '₹' + numberWithCommas(carintrest);

   // cartotalval.innerHTML =  '₹' +   (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value)))
   const cartotal = (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(cartenureinput.value*12)))/ (((1+(carrateinput.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - e.target.value)))
   cartotalval.innerHTML =  '₹' + numberWithCommas(cartotal);
      
    if(carloaninput.value == 0 || carrateinput.value == 0 || cartenureinput.value == 0 ){
      caremival.innerHTML = "₹" + 0
     carprincipalval.innerHTML = "₹" +  0 
      carinterestval.innerHTML = "₹" + 0    
      cartotalval.innerHTML = "₹" + 0    
  }


})


carrateinput.addEventListener("input" , (e)=>{
  
  
    carrateslider.value =  e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 30){
       e.target.value = 30
      
     }

    if(e.target.value < 1){
       
        s22.style.background = "#fae9e5"
        s22.style.color = "#eb5b3c"
        
 
        tool22.style.display = "block"
       
        carrateinput.style.background = "#fae9e5"
        carrateinput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         carrateinput.style.color = "gray"
       }
        
 
        
    }else{
 
     s22.style.background = "#ebf9f5"
     s22.style.color = "#00b386"
     tool22.style.display = "none"         
     carrateinput.style.background = "#ebf9f5"
     carrateinput.style.color = "#00b386"
 
 
    }

    if(e.target.value == 0){
        carrateslider.value = 0
     }

    

    // caremival.innerHTML =  '₹'  +  Math.round((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) 
    const caremi = Math.round((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) 
    caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

    // carinterestval.innerHTML =  '₹' +  Math.round((( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value))
    const carintrest = Math.round((( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value))
    carinterestval.innerHTML =  '₹' + numberWithCommas(carintrest);

     a11=  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))


    // cartotalval.innerHTML =  '₹' +   (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))
    const cartotal = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))
    cartotalval.innerHTML =  '₹' + numberWithCommas(cartotal);
    
      a12 = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))

    carcir.style.background = `conic-gradient(#fec700 ${((100-((a11/a12)*100))*3.6)}deg  ,#dc291a 0deg)`

    if(carloaninput.value == 0 || e.target.value == 0 || cartenureinput.value == 0 ){
      caremival.innerHTML = "₹" + 0
     carprincipalval.innerHTML = "₹" +  0 
      carinterestval.innerHTML = "₹" + 0    
      cartotalval.innerHTML = "₹" + 0    
  }else{
    carprincipalval.innerHTML =  '₹'   + numberWithCommas(carloaninput.value);
  }

})


carrateslider.addEventListener("input" , (e)=>{
    //    rateinput.value = e.target.value

    //    emival.innerHTML =  '₹'  +  Math.round((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1))  

    //    interestval.innerHTML =  '₹' +  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))

    //    a3 =  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))

    //    totalval.innerHTML =  '₹' +   (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))

    //    a4 =  (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))


    //    cir.style.background = `conic-gradient(#fec700 ${((100-((a3/a4)*100))*3.6)}deg  ,#dc291a 0deg)`

    if(e.target.value < 1){
       
      s22.style.background = "#fae9e5"
      s22.style.color = "#eb5b3c"
      

      tool22.style.display = "block"
     
      carrateinput.style.background = "#fae9e5"
      carrateinput.style.color = "#eb5b3c"

      if(e.target.value == 0){
       carrateinput.style.color = "gray"
     }
      

      
  }else{

   s22.style.background = "#ebf9f5"
   s22.style.color = "#00b386"
   tool22.style.display = "none"         
   carrateinput.style.background = "#ebf9f5"
   carrateinput.style.color = "#00b386"


  }

    carrateinput.value =  e.target.value 

    // caremival.innerHTML =  '₹'  +  Math.round((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) 
    const caremi = Math.round((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) 
    caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

    // carinterestval.innerHTML =  '₹' +  Math.round((( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value))
    const carintrest = Math.round((( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value))
    carinterestval.innerHTML =  '₹' + numberWithCommas(carintrest);

     a13 =  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))


    // cartotalval.innerHTML =  '₹' +   (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))
    const cartotal = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))
    cartotalval.innerHTML =  '₹' + numberWithCommas(cartotal);
    
      a14 = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(cartenureinput.value*12)))/ (((1+(e.target.value/1200))**(cartenureinput.value*12)) - 1)) * (cartenureinput.value*12)) - carloaninput.value)))

       carcir.style.background = `conic-gradient(#fec700 ${((100-((a13/a14)*100))*3.6)}deg  ,#dc291a 0deg)`

       if(carloaninput.value == 0 || carrateinput.value == 0 || cartenureinput.value == 0 ){
        caremival.innerHTML = "₹" + 0
       carprincipalval.innerHTML = "₹" +  0 
        carinterestval.innerHTML = "₹" + 0    
        cartotalval.innerHTML = "₹" + 0    
    }else{
      carprincipalval.innerHTML =  '₹'   + numberWithCommas( carloaninput.value);
    }

       
})


cartenureinput.addEventListener("input" , (e)=>{

 cartenureslider.value = e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 30){
       e.target.value = 30
      
     }

    if(e.target.value < 1){
       
        s23.style.background = "#fae9e5"
        s23.style.color = "#eb5b3c"
        
 
        tool23.style.display = "block"
       
        cartenureinput.style.background = "#fae9e5"
        cartenureinput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         cartenureinput.style.color = "gray"
       }
        
 
        
    }else{
 
     s23.style.background = "#ebf9f5"
     s23.style.color = "#00b386"
     tool23.style.display = "none"         
     cartenureinput.style.background = "#ebf9f5"
     cartenureinput.style.color = "#00b386"
 
 
    }

    if(e.target.value == 0){
         cartenureslider.value = 0
     }

    // caremival.innerHTML =  '₹'  +  Math.round((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1))
    const caremi = Math.round((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1))
    caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

    // carinterestval.innerHTML =  '₹' +  Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))
    const carintrest = Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))
    carinterestval.innerHTML =  '₹' + numberWithCommas(carintrest);

    a15 =  Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))


    // cartotalval.innerHTML =  '₹' +   (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))
    const cartotal = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))
    cartotalval.innerHTML =  '₹' +  numberWithCommas(cartotal);

    a16 = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))

    carcir.style.background = `conic-gradient(#fec700 ${((100-((a15/a16)*100))*3.6)}deg  ,#dc291a 0deg)`

    if(carloaninput.value == 0 || carrateinput.value == 0 || e.target.value == 0 ){
      caremival.innerHTML = "₹" + 0
     carprincipalval.innerHTML = "₹" +  0 
      carinterestval.innerHTML = "₹" + 0    
      cartotalval.innerHTML = "₹" + 0    
  }else{
    carprincipalval.innerHTML =  '₹'   +  carloaninput.value
  }

})


cartenureslider.addEventListener("input" , (e)=>{
       cartenureinput.value = e.target.value

       if(e.target.value < 1){
       
        s23.style.background = "#fae9e5"
        s23.style.color = "#eb5b3c"
        
 
        tool23.style.display = "block"
       
        cartenureinput.style.background = "#fae9e5"
        cartenureinput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         cartenureinput.style.color = "gray"
       }
        
 
        
    }else{
 
     s23.style.background = "#ebf9f5"
     s23.style.color = "#00b386"
     tool23.style.display = "none"         
     cartenureinput.style.background = "#ebf9f5"
     cartenureinput.style.color = "#00b386"
 
 
    }

       //  caremival.innerHTML =  '₹'  +  Math.round((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1))
       const caremi = Math.round((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1))
       caremival.innerHTML =  '₹'  + numberWithCommas(caremi);

       //  carinterestval.innerHTML =  '₹' +  Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))
       const carintrest =  Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))
       carinterestval.innerHTML =  '₹' + numberWithCommas(carintrest);

       a17 =   Math.round((( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value))

       //  cartotalval.innerHTML =  '₹' +   (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))
      const cartotal = (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))
      cartotalval.innerHTML =  '₹' + numberWithCommas(cartotal);

       a18 =  (Number.parseInt(carloaninput.value) +  Math.round(Number.parseInt(( ((carloaninput.value * (carrateinput.value/1200) *  ((1+(carrateinput.value/1200))**(e.target.value*12)))/ (((1+(carrateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - carloaninput.value)))

       carcir.style.background = `conic-gradient(#fec700 ${((100-((a17/a18)*100))*3.6)}deg  ,#dc291a 0deg)`

       if(carloaninput.value == 0 || carrateinput.value == 0 || cartenureinput.value == 0 ){
        caremival.innerHTML = "₹" + 0
       carprincipalval.innerHTML = "₹" +  0 
        carinterestval.innerHTML = "₹" + 0    
        cartotalval.innerHTML = "₹" + 0    
    }else{
      carprincipalval.innerHTML =  '₹'   +  carloaninput.value
    }

})



function slider() {

    valpercent = (carloanslider.value/carloanslider.max)*100
    carloanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`

     carloaninput.addEventListener("input" , (e)=>{
       valpercent = (e.target.value/carloaninput.max)*100
      carloanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`
     })

    carloanslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/carloanslider.max)*100
    carloanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`
    })
    

    valpercent = (carrateslider.value/carrateslider.max)*100
    carrateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`

    
    carrateinput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/carrateinput.max)*100
        carrateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

    carrateslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/carrateslider.max)*100
       carrateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

    valpercent = (cartenureslider.value/cartenureslider.max)*100
    cartenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    
    cartenureinput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/cartenureinput.max)*100
        cartenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

   cartenureslider.addEventListener("input" , (e)=>{
    valpercent = (e.target.value/cartenureslider.max)*100
    cartenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
   })


}

slider();











