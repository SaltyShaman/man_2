import "dotenv/config";
import express from "express";
const app = express();



// Config
import sessionConfig from "./config/sessionConfig.js";
import { generalLimiter, authLimiter } from "./config/rateLimiters.js";



// Middleware imports
import { notFoundPage, notFoundJson } from "./middleware/errorHandler.js";
import helmet from "helmet";

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

// 404 handlers
app.use((req, res) => {
    if (req.method === "GET") {
        return res
            .status(404)
            .send("<h1>Did not find a matching route</h1>");
    }

    return res
        .status(404)
        .json({ data: "Did not find matching route" });
});

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
