import "dotenv/config";
import express from "express";
const app = express();

import cors from 'cors';

// Config
import sessionConfig from "./config/sessionConfig.js";
import { generalLimiter, authLimiter } from "./config/rateLimiters.js";

// Middleware imports
import helmet from "helmet";
import notFoundHandler from "./middleware/notFoundHandler.js";
import protectedRouter from "./routers/protectedRouter.js";



app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


// Middleware app use
app.use(sessionConfig);
app.use(helmet());
app.use(generalLimiter);
app.use("/auth", authRouter);
app.use(protectedRouter);


// Routers
import authRouter from "./routers/authRouter.js";
import middlewareRouter from "./routers/middlewareRouter.js";

app.use(middlewareRouter);



//Not found handler does not redirect --> this has to be one the last lines in app.js
app.use(notFoundHandler);

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
