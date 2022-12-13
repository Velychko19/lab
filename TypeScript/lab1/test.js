function quad(a,b,c){
    if(a==0)return "Помилка, а=0 недопустиме значення";
    var D=b*b-4*a*c;
    var x1,x2;
    if(D>0){
        x1=(-b+Math.sqrt(D)/(2*a));
        x2=(-b-Math.sqrt(D)/(2*a));
        return "Кофіцієнти: а="+a+", b"+b+", c"+c+"\nКорені рівняння: Х1 = "+x1+", X2 = "+x2+"\nДискримінант D ="+D;
    }
    else if(D==0){
        x1=-b/(2*a);
        return "Кофіцієнти: а="+a+", b"+b+", c"+c+"\nКорені рівняння: Х1 = "+x1+"\nДискримінант D ="+D;
    } else if (D<0)  return "Кофіцієнти: а="+a+", b"+b+", c"+c+"\nКоренів рівняння немає"+"\nДискримінант D ="+D;
    
}

function prog(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result=quad(a,b,c);
    document.getElementById('result').textContent=result;
    document.getElementById('vidpovid').style.display='block';
}