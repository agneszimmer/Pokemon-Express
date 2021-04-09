import {pokedex} from '../pokedex.js'; 

export const getAll = (req, res) => {
  try {
    res.json(pokemon)
  } catch (error) {
    res.status(500).json(error);
  }  
}

export const getSingle = (req, res) => {
  try {
    const { id } = req.params;
    const found = pokedex.find(item => item.id === parseInt(id));
    res.json(found);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}
