
let emival = document.getElementById("emi-value")
let principalval = document.getElementById("principal-amount-value")
let interestval = document.getElementById("interest-value")
let totalval = document.getElementById("total-home-value")
let cir = document.querySelector(".home-circle")

// loan Amount  

let loaninput = document.getElementById("loan-home-input")

let loanslider = document.getElementById("loan-home-slider")

// rate of interest  

let rateinput = document.getElementById("rate-home-input")

let rateslider = document.getElementById("rate-home-slider")

// loan tenure 

let tenureinput = document.getElementById("tenure-home-input")
// let tenureinput = document.getElementById("tt-in")

let tenureslider = document.getElementById("tenure-home-slider")


// Event Listner  

cir.style.background = `conic-gradient(#fec700 ${297.5}deg  , #dc291a 0deg)`

let s11 = document.getElementById("span11")
let s12 = document.getElementById("span12")
let s13 = document.getElementById("span13")

let tool11 = document.getElementById("tool11")
let tool12 = document.getElementById("tool12")
let tool13 = document.getElementById("tool13")


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


loaninput.addEventListener("input" , (e)=>{

  
    loanslider.value =  e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 10000000){
       e.target.value = 10000000
      
     }


    if(e.target.value < 100000){
       
        s11.style.background = "#fae9e5"
        s11.style.color = "#eb5b3c"
        
 
        tool11.style.display = "block"
       
        loaninput.style.background = "#fae9e5"
        loaninput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         loaninput.style.color = "gray"
       }
        
 
        
    }else{
 
     s11.style.background = "#ebf9f5"
     s11.style.color = "#00b386"
     tool11.style.display = "none"         
     loaninput.style.background = "#ebf9f5"
     loaninput.style.color = "#00b386"
 
 
    }

    if(e.target.value == 0){
          loanslider.value = 0
    }


    const principal =  e.target.value
    principalval.innerHTML =  '₹' +  numberWithCommas(principal);
    
    // emival.innerHTML =  '₹'  +  Math.round((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) 
    const emi = Math.round((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) 
    emival.innerHTML =  '₹'  +  numberWithCommas(emi);
    
    // interestval.innerHTML =  '₹' +  Math.round((( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value))
    const interest = Math.round((( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value))
    interestval.innerHTML =  '₹' +  numberWithCommas(interest);

    // totalval.innerHTML =  '₹' +   (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value)))
    const total = (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value)))
    totalval.innerHTML =  '₹' +   numberWithCommas(total);


    if(e.target.value == 0 ||  rateinput.value == 0 || tenureinput.value == 0){
      emival.innerHTML = "₹" + 0
      principalval.innerHTML = "₹" +  0 
      interestval.innerHTML = "₹" + 0    
      totalval.innerHTML = "₹" + 0    
  }


})


loanslider.addEventListener("input" , (e)=>{
    
    
  
       loaninput.value =  e.target.value

     s11.style.background = "#ebf9f5"
     s11.style.color = "#00b386"
     tool11.style.display = "none"         
     loaninput.style.background = "#ebf9f5"
     loaninput.style.color = "#00b386"
       

       //  principalval.innerHTML =  '₹' + e.target.value
        const principal = e.target.value
        principalval.innerHTML = '₹' + numberWithCommas(principal);

       // emival.innerHTML =  '₹'  +  Math.round((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) 
        const emi = Math.round((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) 
        emival.innerHTML =  '₹'  + numberWithCommas(emi);

       // interestval.innerHTML =  '₹' +  Math.round((( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value))
       const interest = Math.round((( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value))
       interestval.innerHTML =  '₹' + numberWithCommas(interest);

       // totalval.innerHTML =  '₹' +   (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value)))
       const total = (Number.parseInt(e.target.value) +  Math.round(Number.parseInt(( ((e.target.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(tenureinput.value*12)))/ (((1+(rateinput.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - e.target.value)))
       totalval.innerHTML =  '₹' + numberWithCommas(total);

      
       if(monthlyInvestmentInput.value == 0 ||  rateinput.value == 0 || tenureinput.value == 0 ){
        emival.innerHTML = "₹" + 0
        principalval.innerHTML = "₹" +  0 
        interestval.innerHTML = "₹" + 0    
        totalval.innerHTML = "₹" + 0    
    }


})


rateinput.addEventListener("input" , (e)=>{

 
    rateslider.value =  e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 30){
       e.target.value = 30
      
     }

    if(e.target.value < 1){
       
        s12.style.background = "#fae9e5"
        s12.style.color = "#eb5b3c"
        
 
        tool12.style.display = "block"
       
        rateinput.style.background = "#fae9e5"
        rateinput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
         rateinput.style.color = "gray"
       }
        
 
        
    }else{
 
     s12.style.background = "#ebf9f5"
     s12.style.color = "#00b386"
     tool12.style.display = "none"         
     rateinput.style.background = "#ebf9f5"
     rateinput.style.color = "#00b386"
 
 
    }


    if(e.target.value == 0){
        rateslider.value = 0
  }




    // emival.innerHTML =  '₹'  +  Math.round((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) 
    const emi = Math.round((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) 
    emival.innerHTML =  '₹'  + numberWithCommas(emi);

    // interestval.innerHTML =  '₹' +  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))
    const interest = Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))
    interestval.innerHTML =  '₹' + numberWithCommas(interest);

     a1=  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))


     // totalval.innerHTML =  '₹' +   (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))
     const total = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))
     totalval.innerHTML =  '₹' + numberWithCommas(total);
    
      a2 = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))

    cir.style.background = `conic-gradient(#fec700 ${((100-((a1/a2)*100))*3.6)}deg  ,#dc291a 0deg)`

    if( loaninput.value == 0 ||  e.target.value == 0 || tenureinput.value == 0 ){
      emival.innerHTML = "₹" + 0
      principalval.innerHTML = "₹" +  0 
      interestval.innerHTML = "₹" + 0    
      totalval.innerHTML = "₹" + 0    
  }else{
    principalval.innerHTML =  '₹'   + numberWithCommas( loaninput.value);
  }

})


rateslider.addEventListener("input" , (e)=>{
       rateinput.value = e.target.value

     s12.style.background = "#ebf9f5"
     s12.style.color = "#00b386"
     tool12.style.display = "none"         
     rateinput.style.background = "#ebf9f5"
     rateinput.style.color = "#00b386"

       // emival.innerHTML =  '₹'  +  Math.round((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1))  
       const emi = Math.round((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1))  
       emival.innerHTML =  '₹'  + numberWithCommas(emi);

       // interestval.innerHTML =  '₹' +  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))
       const interest = Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))
       interestval.innerHTML =  '₹' + numberWithCommas(interest);

       a3 =  Math.round((( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value))

       //  totalval.innerHTML =  '₹' +   (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))
       const total = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))
       totalval.innerHTML =  '₹' + numberWithCommas(total);


       a4 =  (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (e.target.value/1200) *  ((1+(e.target.value/1200))**(tenureinput.value*12)))/ (((1+(e.target.value/1200))**(tenureinput.value*12)) - 1)) * (tenureinput.value*12)) - loaninput.value)))


       cir.style.background = `conic-gradient(#fec700 ${((100-((a3/a4)*100))*3.6)}deg  ,#dc291a 0deg)`


       if( loaninput.value == 0 ||  rateinput.value == 0 || tenureinput.value == 0 ){
        emival.innerHTML = "₹" + 0
        principalval.innerHTML = "₹" +  0 
        interestval.innerHTML = "₹" + 0    
        totalval.innerHTML = "₹" + 0    
    }else{
      principalval.innerHTML =  '₹'   +  numberWithCommas(loaninput.value);
    }

       
})


tenureinput.addEventListener("input" , (e)=>{

  tenureslider.value = e.target.value 

    if(e.target.value < 1){
        e.target.value = 0
       
      }
   
      if(e.target.value > 30){
       e.target.value = 30
      
     }

    if(e.target.value < 1){
       
        s13.style.background = "#fae9e5"
        s13.style.color = "#eb5b3c"
        
 
        tool13.style.display = "block"
       
        tenureinput.style.background = "#fae9e5"
        tenureinput.style.color = "#eb5b3c"
 
        if(e.target.value == 0){
           tenureinput.style.color = "gray"
       }
        
 
        
    }else{
 
     s13.style.background = "#ebf9f5"
     s13.style.color = "#00b386"
     tool13.style.display = "none"         
     tenureinput.style.background = "#ebf9f5"
     tenureinput.style.color = "#00b386"
 
 
    }

    if(e.target.value == 0){
        tenureslider.value = 0
  }

   // emival.innerHTML =  '₹'  +  Math.round((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1))
   const emi = Math.round((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1))
   emival.innerHTML =  '₹'  + numberWithCommas(emi);

    // interestval.innerHTML =  '₹' +  Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))
    const interest = Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))
    interestval.innerHTML =  '₹' + numberWithCommas(interest);

    a5 =  Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))


    // totalval.innerHTML =  '₹' +   (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))
    const total = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))
    totalval.innerHTML =  '₹' + numberWithCommas(total);

    a6 = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))

    cir.style.background = `conic-gradient(#fec700 ${((100-((a5/a6)*100))*3.6)}deg  ,#dc291a 0deg)`

    if( loaninput.value == 0 || rateinput.value == 0  || e.target.value == 0 ){
      emival.innerHTML = "₹" + 0
      principalval.innerHTML = "₹" +  0 
      interestval.innerHTML = "₹" + 0    
      totalval.innerHTML = "₹" + 0    
  }else{
    principalval.innerHTML =  '₹'   +  loaninput.value
  }

  

})


tenureslider.addEventListener("input" , (e)=>{
       tenureinput.value = e.target.value

     s13.style.background = "#ebf9f5"
     s13.style.color = "#00b386"
     tool13.style.display = "none"         
     tenureinput.style.background = "#ebf9f5"
     tenureinput.style.color = "#00b386"

       //  emival.innerHTML =  '₹'  +  Math.round((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1))
       const emi = Math.round((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1))
       emival.innerHTML =  '₹'  + numberWithCommas(emi);

       // interestval.innerHTML =  '₹' +  Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))
       const interest = Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))
       interestval.innerHTML =  '₹' + numberWithCommas(interest);

       a7 =   Math.round((( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value))

       //  totalval.innerHTML =  '₹' +   (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))
       const total = (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))
       totalval.innerHTML =  '₹' + numberWithCommas(total);

       a8 =  (Number.parseInt(loaninput.value) +  Math.round(Number.parseInt(( ((loaninput.value * (rateinput.value/1200) *  ((1+(rateinput.value/1200))**(e.target.value*12)))/ (((1+(rateinput.value/1200))**(e.target.value*12)) - 1)) * (e.target.value*12)) - loaninput.value)))

       cir.style.background = `conic-gradient(#fec700 ${((100-((a7/a8)*100))*3.6)}deg  ,#dc291a 0deg)`

       if( loaninput.value == 0 || rateinput.value == 0  || tenureinput.value == 0 ){
        emival.innerHTML = "₹" + 0
        principalval.innerHTML = "₹" +  0 
        interestval.innerHTML = "₹" + 0    
        totalval.innerHTML = "₹" + 0    
    }else{
         principalval.innerHTML =  '₹'   +  loaninput.value
    }

})



function slider() {

    valpercent = (loanslider.value/loanslider.max)*100
    loanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`

     loaninput.addEventListener("input" , (e)=>{
       valpercent = (e.target.value/loaninput.max)*100
      loanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`
     })

    loanslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/loanslider.max)*100
    loanslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% ,  #ecedef ${valpercent}%)`
    })
    

    valpercent = (rateslider.value/rateslider.max)*100
    rateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`

    
    rateinput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/rateinput.max)*100
        rateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

    rateslider.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/rateslider.max)*100
       rateslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

    valpercent = (tenureslider.value/tenureslider.max)*100
    tenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    
    tenureinput.addEventListener("input" , (e)=>{
        valpercent = (e.target.value/tenureinput.max)*100
        tenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
    })

   tenureslider.addEventListener("input" , (e)=>{
    valpercent = (e.target.value/tenureslider.max)*100
    tenureslider.style.background = `linear-gradient(to right , #dc291a ${valpercent}% , #ecedef ${valpercent}%)`
   })


}

slider();











