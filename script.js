
var a, b, c, d, eTexto; a = 3; b = 5; c = true; d = false; eTexto = '1';
zapato='zapato'
avellanas='avellanas'




alert('Procesando su solicitud')

document.getElementById('boton1').onclick = function(){
    if(a+b == 8 && a-b==1){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton2').onclick = function(){
    if(a+b == 8 && a-b ==-2){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton3').onclick = function(){
    if(c == d){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton4').onclick = function(){
    if(c&&d){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton5').onclick = function(){
    if(c||d){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton6').onclick = function(){
    if(!a){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton7').onclick = function(){
    if(eTexto==1){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('boton8').onclick = function(){
    if(zapato<avellanas){
        alert('True')
        }else{
        alert('False')
    }
}
A = 5;
B = 3;
C = -12;
document.getElementById('botona').onclick = function(){
    if(A > 3){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonb').onclick = function(){
    if(A>C){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonc').onclick = function(){
    if(A<C){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botond').onclick = function(){
    if(B<C){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botone').onclick = function(){
    if(B!=C){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonf').onclick = function(){
    if(A == 3){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botong').onclick = function(){
    if(A * B == 15){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonh').onclick = function(){
    if(A * B == -30){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botoni').onclick = function(){
    if(C / B < A){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonj').onclick = function(){
    if(C / B == -10){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonk').onclick = function(){
    if(C / B == -4){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonl').onclick = function(){
    if(A + B + C == 5){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonm').onclick = function(){
    if((A+B == 8) && (A-B == 2)){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonn').onclick = function(){
    if((A+B == 8) || (A-B == 6)){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botono').onclick = function(){
    if(A > 3 && B > 3 && C < 3){
        alert('True')
        }else{
        alert('False')
    }
}
document.getElementById('botonp').onclick = function(){
    if(A > 3 && B >= 3 && C < -3){
        alert('True')
        }else{
        alert('False')
    }
}
