import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
        const db = client.db('blog');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({message: 'Error connecting to db'});
    }
}

app.get('/api/articles', async (req, res) => {
    withDB(async (db) => {
        const articles = [];
        await db.collection('articles')
        .find({}).forEach((res) => {
            articles.push(res);
        });
        res.status(200).json({articles: articles});
    }, res);
})

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articleInfo);
    }, res);
})

app.post('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleContent = req.body.content;

        const articleInfo = await db.collection('articles').findOne({name: articleName});
        if (articleInfo === null) {
            db.collection('articles').insertOne({
                name: articleName,
                upvotes: 0, 
                comments: [],
                content: articleContent,
            });
            
            const articles = [];
            await db.collection('articles')
            .find({}).forEach((res) => {
                articles.push(res);
            });
            res.status(200).json({articles: articles});            
        } else {
            res.status(500).json({message: 'Article already exists'});
        }       
    }, res);
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).send(updatedArticleInfo);
    }, res);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    withDB(async (db) => {
        const username = req.body.username;
        const text = req.body.text;
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({username, text}),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).send(updatedArticleInfo);
    }, res);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log('listening on port 8000'));