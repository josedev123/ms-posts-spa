const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
    const posts = [
      { id: '001', title: 'First Post Title', content: 'First Post Content' },  
      { id: '002', title: 'Second Post Title', content: 'Second Post Content' },  
      { id: '003', title: 'Third Post Title', content: 'Third Post Content' }  
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;