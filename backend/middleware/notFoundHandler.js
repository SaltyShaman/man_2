export default function notFoundHandler(req, res) {
    if (req.method === "GET") {
        return res
            .status(404)
            .send("<h1>Did not find a matching route</h1>");
    }

    return res
        .status(404)
        .json({ data: "Did not find matching route" });
}