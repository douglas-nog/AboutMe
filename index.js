window.onload = Function()
{

var imagem1 = document.querySelector("#imagem1");
var imagem2 = document.querySelector("#imagem2");
var imagem3 = document.querySelector("#imagem3");

imagem1.onmouseover= function(){
    imagem1.style.width = "200px";
    imagem1.style.height = "200px";
}

imagem1.onmouseout = function(){
    imagem1.style.width ="";
    imagem1.style.height = "";
}

imagem2.onmouseover= function(){
    imagem2.style.width = "200px";
    imagem2.style.height = "200px";
}

imagem2.onmouseout = function(){
    imagem2.style.width = "";
    imagem2.style.height = "";
}
     

imagem3.onmouseover= function(){
    imagem3.style.width = "200px";
    imagem3.style.height = "200px";
}

imagem3.onmouseout = function(){
    imagem3.style.width = "";
    imagem3.style.height = "";
}


}

