import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyDgbxnq_y6uqB63BHMEwzycX-WpQIgQm2Q',
  authDomain: 'live-blogger.firebaseapp.com',
  databaseURL: 'https://live-blogger.firebaseio.com',
  projectId: 'live-blogger',
  storageBucket: 'live-blogger.appspot.com',
  messagingSenderId: '509154240059',
};

firebase.initializeApp(config);

export default firebase;
