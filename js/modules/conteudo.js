function conteudo(animalURL) {
  let main = document.querySelector('.conteudo');
  carregar(animalURL, main);
}

function carregar(animalURL, main) {
  if (window.XMLHttpRequest) {
     xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
   xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      main.innerHTML = xmlhttp.responseText;
    }
  }
  xmlhttp.open('GET', animalURL);
  xmlhttp.send();
}