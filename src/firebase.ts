import firebase from 'firebase/app';

const config = {
  // cSpell:disable
  apiKey: 'AIzaSyDgbxnq_y6uqB63BHMEwzycX-WpQIgQm2Q',
  // cSpell:enable
  authDomain: 'live-blogger.firebaseapp.com',
  databaseURL: 'https://live-blogger.firebaseio.com',
  projectId: 'live-blogger',
  storageBucket: 'live-blogger.appspot.com',
  messagingSenderId: '509154240059',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
