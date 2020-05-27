"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const loginRouter_1 = __importDefault(require("./loginRouter"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express_1.default.Router();
        router.get('/', (req, res) => {
            res.status(200).send({
                message: 'Hello World! @root'
            });
        });
        router.post('/', (req, res) => {
            res.status(200).send({
                message: 'Hello World! @root'
            });
        });
        this.app.use('/', router);
        this.app.use('/auth', loginRouter_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map