import express from "express";

const app = express();
const port = process.env.PORT ?? 4000;

app.get("/ping", (_, res:any) => res.json({ ok: true }));

app.listen(port, () => console.log(`API listening on ${port}`));
