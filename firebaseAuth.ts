import firebaseApp from 'firebase/app';
import 'firebase/auth';
class FirebaseAuthentication {
  private firebaseObj: firebaseApp.app.App;
  constructor() {
    /*
      {
        user: someUserName@mydomain.com
        pwd: somSecretePwd
      }
    */

    const firebaseConfig: any = {
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
    this.firebaseObj = firebaseApp.initializeApp(firebaseConfig);
  }
  public async createUser(email: string, pwd: string) : Promise<any> {
    const ret = await this.firebaseObj.auth().createUserWithEmailAndPassword(email, pwd)
    .catch((error: any)=> {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(error);
    });
    
    console.log('createUser Api succeeded ' + ret);
    return ret; 
  }
  public async signIn(email: string, pwd: string) : Promise<any> {
    const ret = await this.firebaseObj.auth().signInWithEmailAndPassword(email, pwd)
    .catch((error: any)=> {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;8
      throw new Error(error); //res.send('signIn api failed returned with '+ errorCode + errorMessage);
    });

    console.log('signIn Api succeeded ');
    return ret;
  }
}

const firebaseAuth = new FirebaseAuthentication();
export default firebaseAuth;