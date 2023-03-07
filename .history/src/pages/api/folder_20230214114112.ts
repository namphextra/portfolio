import {initializeApp} from 'firebase/app'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const firebaseConfig = {
      apiKey: "AIzaSyDldvWuwWslr36Fi2lOp9jxq50BISbCP3U",
      authDomain: "nomnom-db-2df21.firebaseapp.com",
      projectId: "nomnom-db-2df21",
      storageBucket: "nomnom-db-2df21.appspot.com",
      messagingSenderId: "1096715748595",
      appId: "1:1096715748595:web:44be893d39797913772386",
      measurementId: "G-H6ZMH3L5YV"
    };
    const app = initializeApp(firebaseConfig);
  }
}