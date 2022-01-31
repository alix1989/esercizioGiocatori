let giocatore1: number;
let giocatore2: number;

$(() => {

    // al click parte la funzione

    $("#btnVerifica").on('click', function () {

        // prendo i dati

        giocatore1 = Number($('#giocatore1').val());
        giocatore2 = Number($("#giocatore2").val());

        // console.log(giocatore1 + giocatore2);

        // i dati devono essere "pieni" 

        if (!giocatore1 || !giocatore2) {
            $("#soluzione").text("Inserire un numero valido!");
        } 

        // pesco un numero randomico, prima lo 'arrotondo' e poi lo moltiplico per 100
        let numeroRandom: number = Math.floor(Math.random()*100);
        $("#casuale").text("Il numero casuale generato è " + numeroRandom);

        // calcolo quale dei due si avvicina di più tramite questo trick incredibile
        let finaleUno: number = giocatore1 - numeroRandom;
        let finaleDue: number = giocatore2 - numeroRandom;

        //condizioni finali per mostrare il testo
        if(finaleUno < finaleDue) {
            $("#soluzione").text("Nessuno dei due ha indovinato il numero, ma Giocatore 2 si è avvicinato di più!")
        } else if (finaleDue < finaleUno) {
            $("#soluzione").text("Nessuno dei due ha indovinato il numero, ma Giocatore 1 si è avvicinato di più!")
        } else if (giocatore1 == numeroRandom) {
            $("#soluzione").text("Il giocatore 1 ha indovinato!")
        } else if (giocatore2 == numeroRandom) {
            $("#soluzione").text("Il giocatore 2 ha indovinato!")
        }
    });

    // bottone 'gioca di nuovo'
    $("#btnRestart").on('click', function () {
        $("#casuale").text('');
        $("#soluzione").text('');
        giocatore1 = Number($('#giocatore1').val(''));
        giocatore2 = Number($("#giocatore2").val(''));
    });
});

// nota a piè di pagina: ho provato ad inserire i testi con 'append' ma il metodo indicato sopra per svuotare i campi non funzionava, ecco perché ho optato per il 'text'!