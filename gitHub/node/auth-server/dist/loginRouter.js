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
const firebaseAuth_1 = __importDefault(require("./firebaseAuth"));
const util_1 = require("util");
const loginRouter = express_1.default.Router();
loginRouter.get('/createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = req.query.pwd;
        const email = req.query.user;
        if (util_1.isNull(password) || util_1.isNull(email)) {
            res.status(400).send({
                status: 'user name or password is empty',
                return: {}
            });
            return;
        }
        const ret = yield firebaseAuth_1.default.createUser(email, password);
        res.status(200).send({
            status: 'success',
            return: ret
        });
    }
    catch (error) {
        res.status(400).send({
            status: 'failed',
            return: error
        });
    }
}));
loginRouter.get('/signIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = req.query.pwd;
        const email = req.query.user;
        if (util_1.isNull(password) || util_1.isNull(email)) {
            res.status(400).send({
                status: 'user name or password is empty',
                data: {}
            });
            return;
        }
        const ret = yield firebaseAuth_1.default.signIn(email, password);
        res.status(200).send({
            status: 'success',
            data: ret
        });
    }
    catch (error) {
        res.status(400).send({
            status: 'failed',
            return: error
        });
    }
}));
exports.default = loginRouter;
//# sourceMappingURL=loginRouter.js.map