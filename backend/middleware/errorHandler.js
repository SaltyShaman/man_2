export function notFoundPage(req, res) {
    res.status(404).send(`<h1>404</h1><h3>Didn't find a matching route</h3>`);
}

export function notFoundJson(req, res) {
    res.status(404).json({ data: "Didn't match with a route" });
}