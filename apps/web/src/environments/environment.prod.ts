export const environment = {
  production: true,
  apiUrl: 'https://us-central1-sanguchera-shop.cloudfunctions.net/api',
  firebase: {
    apiKey: 'AIzaSyAHchMFjgMw09HzJfawmHQMaHo-OX4d7Uc',
    authDomain: 'sanguchera-shop.firebaseapp.com',
    projectId: 'sanguchera-shop',
    storageBucket: 'sanguchera-shop.appspot.com',
    messagingSenderId: '317604083513',
    appId: '1:317604083513:web:dd5b6d77041733e177dae8',
    measurementId: 'G-57BD76NC12',
  },
  accounts: {
    yape: 'https://firebasestorage.googleapis.com/v0/b/sanguchera-shop.appspot.com/o/public%2Fpayments%2Fyape.png?alt=media&token=fd77bbfc-b9c6-4668-a1b3-52064b43e023',
    plin: 'https://firebasestorage.googleapis.com/v0/b/sanguchera-shop.appspot.com/o/public%2Fpayments%2Fplin.png?alt=media&token=e0ba7c54-7c9d-4fb1-8769-64cf5f1ea020',
    bank: {
      bcp: '19107231054094',
      bbva: '19107231054094',
      inter: '19107231054094',
      scotia: '19107231054094'
    }
  }
};
