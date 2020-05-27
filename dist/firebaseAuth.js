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
const app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
class FirebaseAuthentication {
    constructor() {
        /*
          {
            user: someUserName@mydomain.com
            pwd: somSecretePwd
          }
        */
        const firebaseConfig = {
            apiKey: "AIzaSyDyf5_hGtSYZy-NNaEkLx_SaPHLSLgsJxQ",
            authDomain: "authtest-46ce6.firebaseapp.com",
            databaseURL: "https://authtest-46ce6.firebaseio.com",
            projectId: "authtest-46ce6",
            storageBucket: "authtest-46ce6.appspot.com",
            messagingSenderId: "343360722761",
            appId: "1:343360722761:web:37ef35d34ba80c0cf2ac98",
            measurementId: "G-MHLZZKRZC3"
        };
        // Initialize Firebase
        this.firebaseObj = app_1.default.initializeApp(firebaseConfig);
    }
    createUser(email, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield this.firebaseObj.auth().createUserWithEmailAndPassword(email, pwd)
                .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                throw new Error(error);
            });
            console.log('createUser Api succeeded ' + ret);
            return ret;
        });
    }
    signIn(email, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield this.firebaseObj.auth().signInWithEmailAndPassword(email, pwd)
                .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                8;
                throw new Error(error); //res.send('signIn api failed returned with '+ errorCode + errorMessage);
            });
            console.log('signIn Api succeeded ');
            return ret;
        });
    }
}
const firebaseAuth = new FirebaseAuthentication();
exports.default = firebaseAuth;
//# sourceMappingURL=firebaseAuth.js.map