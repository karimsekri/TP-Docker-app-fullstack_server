"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const myport = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.get("/hello/:name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    //res.send renvoi du text    
    res.send("Hello " + name);
}));
app.get("/server/time", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const time = Date.now();
    const now = new Date(time);
    const Heure = now.getHours().toString();
    const Minute = now.getMinutes().toString();
    const Seconde = now.getSeconds().toString();
    //res.send renvoi du text    
    res.send(`${Heure}:${Minute}:${Seconde}`);
}));
app.listen(myport, () => console.log(`Server is listening on port ${myport}`));
