 function zdravickohellou() {
   let jm = document.getElementById("jmeno").value;
   //výpis do konzole 
   console.log(jm);
   //alert("zdravim " + jm + "!");
}




function vysledek() {
   let c1 = document.getElementById("cislo1").valueAsNumber;
   let c2 = document.getElementById("cislo2").valueAsNumber;
   let op = document.getElementById("operace").value;
   console.log(op);





   let vysl = "?";
   if (isNaN(c1)) {
     alert("Neni zadano prvni cislo");
     }
     
     else if (isNaN(c2)) {
       alert ("Neni zadano druhe cislo");
      
     }
    
   else if (op == "plus") {
       vysl = c1 + c2; 
  }
     else if (op == "minus") {
       vysl = c1 - c2;
  }
   //výpis do konzole 
   console.log(vysl);
   document.getElementById("vypocet").value= vysl;
   document.getElementById("vysledek2").innerHTML = "Výsledek je <b> " + vysl + "</b>";
   }