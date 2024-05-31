const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiUrl =
  'https://api.github.com/search/repositories?q=user:google&sort=stars&order=desc&per_page=10';

router.get('/', async (req, res) => {
    const response = await axios(apiUrl);
    const repos = response.data.items;
    res.render('index', {repos});
});

module.exports = router;