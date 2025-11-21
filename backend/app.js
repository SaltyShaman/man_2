import "dotenv/config";
import express from "express";
const app = express();



// Config
import sessionConfig from "./config/sessionConfig.js";
import { generalLimiter, authLimiter } from "./config/rateLimiters.js";



// Middleware imports
import helmet from "helmet";
import notFoundHandler from "./middleware/notFoundHandler.js";
import requireLogin from "./middleware/requireLogin.js";

//Not found handler does not redirect
app.use(notFoundHandler);

// Middleware app use
app.use(sessionConfig);
app.use(helmet());
app.use(generalLimiter);
app.use("/auth", authLimiter);


// Routers
import authRouter from "./routers/authRouter.js";
import middlewareRouter from "./routers/middlewareRouter.js";

app.use(authRouter);
app.use(middlewareRouter);



// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
