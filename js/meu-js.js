    var box = document.getElementById('box');
    var p = document.getElementsByTagName('p');
    var button = document.getElementsByTagName('button');
    var pagina = document.getElementById('pagina');

    box.style.backgroundColor = 'red';
    box.style.width =  "300px";
    box.style.height = "100px";
    box.style.margin = "0 auto";    

  function Azul(){
    box.style.transition = "2s"
    box.style.backgroundColor = "#0c21b0";
    box.style.color = "#fff";
    pagina.style.backgroundColor = "#05105c";
    pagina.style.transition = "2s"
}
  function Amarelo(){
    box.style.transition = "2s"
    box.style.backgroundColor = "#f7e64d";
    box.style.color = "#000";
    pagina.style.backgroundColor = "#857907";
    pagina.style.transition = "2s"
}
  function Vermelho(){
    box.style.transition = "2s"
    box.style.backgroundColor = "#d9000b";
    box.style.color = "#000";
    pagina.style.backgroundColor = "#7a0006";
    pagina.style.transition = "2s"
}
  function Dark(){
    box.style.transition = "2s"
    box.style.backgroundColor = "#38046b";
    box.style.color = "#fff";
    pagina.style.backgroundColor = "#000";
    pagina.style.transition = "2s"
}
  function Light(){
    box.style.transition = "2s"
    box.style.backgroundColor = "#fff";
    box.style.color = "#000";
    pagina.style.backgroundColor = "#c9c6cc";
    pagina.style.transition = "2s"
}
