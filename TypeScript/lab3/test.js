function quad(B,b1,b2,e1){
    var D;
    D=(B*Math.sin(b2))/(Math.cos(e1)*Math.sin(b2-b1));
     return "Дальність до цілі = "+D;
    
}

function prog(){
    var B = document.getElementById('B').value;
    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var e1 = document.getElementById('e1').value;
    var result=quad(B,b1,b2,e1);
    document.getElementById('result').textContent=result;
    document.getElementById('vidpovid').style.display='block';
}