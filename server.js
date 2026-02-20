const express = require("express");
const app = express();

app.get("/api/me", (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0");
