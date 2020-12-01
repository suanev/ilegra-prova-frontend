import express from 'express';
import cors from 'cors';
import server from './schema/schema';

const port = process.env.PORT || 9000;

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen(port, () =>
  console.log(`Server ready on http://localhost:${port}${server.graphqlPath}`),
);
