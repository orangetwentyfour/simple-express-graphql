import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from './graphql';

const app = express();
const PORT = process.env.PORT || 3000;
const db = process.env.DB_CONNECTION || 'mongodb://localhost:27017/graphql';


mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/graphql', cors(), bodyParser.json(), expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

