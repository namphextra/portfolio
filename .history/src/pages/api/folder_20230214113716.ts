import {initializeApp} from 'firebase/app'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const firebaseConfig = {
      apiKey: "AIzaSyAzqxmGZfI5xhG6PyBgsU1eyh_tM8YRDsc",
      authDomain: "nomnom-efcab.firebaseapp.com",
      projectId: "nomnom-efcab",
      storageBucket: "nomnom-efcab.appspot.com",
      messagingSenderId: "787910022109",
      appId: "1:787910022109:web:b2877d4c8dbd7557e2dc34",
      measurementId: "G-0XJ4GVGXSK"
    };
    const app = initializeApp(firebaseConfig);
    return app
  }
}