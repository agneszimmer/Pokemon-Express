import {pokedex} from '../pokedex.js'; 

export const getAll = (req, res) => {
  try {
    res.json(pokedex)
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

export const getSingleInfo = (req, res) => {
  try {
    const {id, name} = req.params;
    const found = pokedex.find(item => item.id === parseInt(id) && item.name.english === name);
    return res.json(found);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}