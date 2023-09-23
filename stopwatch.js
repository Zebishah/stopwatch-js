window.onload = function () {
    var seconds = 00; 
    var tens = 00; 
    var mints=00;
    var count=0;
    var appendTens = document.getElementById("tens")
    var appendMints = document.getElementById("mints")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var min=document.getElementById('mint');
    var sec=document.getElementById('secs');
var audio=document.getElementById('alarm')
    var Interval ;
    buttonStart.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(starttimer,10);
       
    }
    buttonStop.onclick=()=>{
        clearInterval(Interval);
    }
buttonReset.onclick=()=>{
    clearInterval(Interval);
    mints=0;
    seconds=0;
    tens=0;
    appendMints.innerHTML="0"+mints;
    appendSeconds.innerHTML="0"+seconds;
    appendTens.innerHTML="0"+tens;
}

function starttimer()
{
   tens++;
   if(tens<10)
   {
    appendTens.innerHTML='0'+tens;
   }
   else if(tens>9&&tens<99)
   {
    appendTens.innerHTML=tens;
   }
   else if(tens>99)
   {
    tens=00;
    seconds++;
    
   appendTens.innerHTML=tens;
  
   }
   if(seconds<10)
   {
    appendSeconds.innerHTML="0"+seconds;
   }
   else if(seconds>9){
    appendSeconds.innerHTML=seconds;
   }
   else if(seconds>60)
   {
    seconds=0;
    appendSeconds.innerHTML="0"+seconds;
   }
   
   if(seconds==60) 
   {
    seconds=0;
    appendSeconds.innerHTML="0"+seconds;
    mints++;
    if(mints<10)
    {
    appendMints.innerHTML="0"+mints;
    }
    else if(mints>9){
        appendMints.innerHTML=mints;
    }
  
   
   }
   if(appendMints.innerHTML==min.value&&appendSeconds.innerHTML==sec.value&&count!=1)
   {
    audio.play();
    var count=1;
    clearInterval(Interval);
    mints=0;
    seconds=0;
    tens=0;
    appendMints.innerHTML="0"+mints;
    appendSeconds.innerHTML="0"+seconds;
    appendTens.innerHTML="0"+tens;
   }
}

}