const express = require("express"); //importiamo il modulo express installato tramite npm e lo assegniamo alla variabile
const app = express(); //la funzione express viene utilizzata per creare un'istanza dell'applicazione Express
const {persone} = require("./persone"); //dall’oggetto esportato, prendiamo solo la proprietà persone e la mettiamo nella variabile persone

//GET
app.get("/api/persone", (req, res)=>{
  res.status(200).json({data: persone});
})

app.listen(3000)