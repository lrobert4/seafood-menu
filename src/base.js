import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDENM0sr9Q1HtV5hTBJnpgZBrSpigrosPA",
    authDomain: "catch-of-the-day-lee-roberts.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lee-roberts.firebaseio.com",
    

});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;