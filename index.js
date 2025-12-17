const express = require("express"); //importiamo il modulo express installato tramite npm e lo assegniamo alla variabile
const app = express(); //la funzione express viene utilizzata per creare un'istanza dell'applicazione Express
const { persone } = require("./persone"); //dall’oggetto esportato, prendiamo solo la proprietà persone e la mettiamo nella variabile persone

//GET
app.get("/api/persone", (req, res) => {
  res.status(200).json({ success: true, data: persone });
})

//GET by id
app.get("/api/persone/:id", (req, res) =>{
  const {id} = req.params; //req.params è un oggetto che contiene tutti i parametri della route dinamica, prendiamo la prop id dell'oggetto e la mettiamo nella variabile id
  
  const persona = persone.find(
    (persona) => persona.id === id
  );

  res.json({success: true, data: persona});
})



app.listen(3000)