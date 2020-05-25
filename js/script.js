var mail = prompt("inserisci la tua mail");
var accettazione = false;

var listaMailOk = [ 'acapanna75@gmail.com', 'pluto@gmail.com', 'pippo@gmail.com'];
for (var i = 0; i < listaMailOk.length; i++) {
  if (listaMailOk[i] == mail ) {
    accettazione = true;

    //gioco dei dadi
    alert('questo è il gioco dei dati clicca ok per lanciare un dado')
    var lancioClient = Math.floor(Math.random() * 6) + 1;
    var lancioMio = Math.floor(Math.random() * 6) + 1;

    if (lancioMio < lancioClient) {
      alert('hai vinto perchè hai fatto ' + lancioClient + ' mentre io ' + lancioMio);
    }else if (lancioMio > lancioClient) {
      alert('hai perso perchè hai fatto ' + lancioClient + ' mentre io ' + lancioMio);
    } else {
      alert('pareggio perchè hai fatto ' + lancioClient + ' mentre io ' + lancioMio);
    }
  }
}
//se mail non corrisponde
if (accettazione == false) {
  alert('vattene');
}
