
function myFunction() {

//cambiar icono responsive
  var y = document.getElementById("icon");
  if (y.className === "fa fa-bars"){

  y.className = "far fa-caret-square-down";
  }else{
      y.className = "fa fa-bars";
  }


  //Mostrar ocultar div menu responsive
  var y = document.getElementById("menu");
  if (y.className === "d-none"){

  y.className = "displayb";
  }else{
      y.className = "d-none";
  }


  //
}