const express = require("express"); //importiamo il modulo express installato tramite npm e lo assegniamo alla variabile
const app = express(); //la funzione express viene utilizzata per creare un'istanza dell'applicazione Express
const { persone } = require("./persone"); //dall'oggetto esportato, prendiamo solo la proprietà persone e la mettiamo nella variabile persone
const path = require("path");

app.use(express.static(path.join(__dirname))); //serve per rendere index.html accessibile su http://localhost:3000
app.use(express.json()); //questo middleware serve per fare POST da postman
app.use(express.urlencoded({ extended: false })); //questo middleware serve per leggere i dati da un form

//GET: visualizzare tutte le persone
app.get("/api/persone", (req, res) => {
  res.status(200).json({ success: true, data: persone });
})

//GET by id: visualizzare una persona specifica
app.get("/api/persone/:id", (req, res) => {
  const { id } = req.params; //req.params è un oggetto che contiene tutti i parametri della route dinamica, prendiamo la prop id dell'oggetto e la mettiamo nella variabile id

  const persona = persone.find(
    (persona) => persona.id === id
  );

  res.json({ success: true, data: persona });
})

//POST: inserire una persona (da form compilato dall'utente)
app.post("/api/persone", (req, res) => {
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({ success: true, data: persone });
})

//PUT: modificare una persona
app.put("api/persone/:id", (res, req) =>{
  const{id} = req.params;
  const persona = req.body;
  persone[Number(id)-1] = persona;
  res.status(200).json({success: true, data: persone});
  
})

app.listen(3000);