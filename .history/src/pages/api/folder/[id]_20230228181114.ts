import {NextApiRequest, NextApiResponse} from 'next'
import {initializeApp} from 'firebase/app'
import {getFirestore, doc, getDoc, updateDoc} from 'firebase/firestore'
import { Folder } from '@/types/folder';

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
const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const docRef = doc(db, "folders", req.query.id as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json({title: docSnap.data().title, id: docRef.id, content: docSnap.data().content} as Folder)
    } else {
      res.status(500).json({success: false})
    }
  } else if (req.method === 'PUT') {
    const docRef = doc(db, "folders", req.query.id as string);
    const result = await updateDoc(docRef, JSON.parse(req.body));
    console.log(4333333, res)
    res.status(200).json({success: true})
  }
}