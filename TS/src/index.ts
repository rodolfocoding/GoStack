import express from "express";

import { helloWorld } from "./routes";

const app = express();

const port = 3333;

app.get("/", helloWorld);

app.listen(port, (): void => console.log("App Started in port " + port + "!"));
