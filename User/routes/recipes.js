const express = require('express');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// 메모리 스토리지
let recipes = [];

// 모든 레시피 가져오기 (GET)
router.get('/', verifyToken, (req, res) => {
  res.json(recipes);
});

// 새로운 레시피 추가 (POST)
router.post('/', verifyToken, (req, res) => {
  const { title, category, ingredients, instructions } = req.body;
  const recipe = { id: recipes.length + 1, title, category, ingredients, instructions };
  recipes.push(recipe);
  res.status(201).json(recipe);
});

// 레시피 수정 (PUT)
router.put('/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const { title, category, ingredients, instructions } = req.body;

  const recipe = recipes.find(r => r.id === parseInt(id));
  if (!recipe) {
    return res.status(404).json({ message: '레시피를 찾을 수 없습니다.' });
  }

  recipe.title = title;
  recipe.category = category;
  recipe.ingredients = ingredients;
  recipe.instructions = instructions;

  res.json(recipe);
});

// 레시피 삭제 (DELETE)
router.delete('/:id', verifyToken, (req, res) => {
  const { id } = req.params;

  recipes = recipes.filter(r => r.id !== parseInt(id));
  res.status(204).send();
});

module.exports = router;


