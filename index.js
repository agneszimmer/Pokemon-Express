import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config.js'; // ermöglicht .env zu nutzen
import './db/mongoose.js';
import router from './routes/router.js';

const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Einstellen, welchen domain ist erlaubt, mit API zu interagieren
// * = all domains
app.use(cors({origin: '*'}))

app.use(express.json());
app.use('/pokemon', router);
app.use('/', (req, res) => {
  res.send(
    "<h2>API - endpoints available:<h2/><p>To retrieve all pokemons: /pokemon</p><p>To retrieve single pokemon (via id number): /pokemon/:id</p><p>To retrieve single pokemon (via id number) and associated name: /pokemon/:id/:name</p>"
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));