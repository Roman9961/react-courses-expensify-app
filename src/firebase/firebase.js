import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDy7gy4Ce_Qy8JXUsaN7r9TCqHN4g-_Aec",
    authDomain: "expensify-c7e78.firebaseapp.com",
    databaseURL: "https://expensify-c7e78.firebaseio.com",
    projectId: "expensify-c7e78",
    storageBucket: "expensify-c7e78.appspot.com",
    messagingSenderId: "891010644755"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };