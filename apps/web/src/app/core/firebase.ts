import { initializeApp } from 'firebase/app';

// TODO: move config to an enviroment file
const firebaseConfig = {
  apiKey: 'AIzaSyAHchMFjgMw09HzJfawmHQMaHo-OX4d7Uc',
  authDomain: 'sanguchera-shop.firebaseapp.com',
  projectId: 'sanguchera-shop',
  storageBucket: 'sanguchera-shop.appspot.com',
  messagingSenderId: '317604083513',
  appId: '1:317604083513:web:dd5b6d77041733e177dae8',
  measurementId: 'G-57BD76NC12',
};

initializeApp(firebaseConfig);
