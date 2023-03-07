import {NextApiRequest, NextApiResponse} from 'next'
import {initializeApp} from 'firebase/app'
import {getFirestore, getDocs, collection, addDoc} from 'firebase/firestore'

type Folder = {
  id: string,
  title: string,
  content: string
}

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
    const querySnapshot = await getDocs(collection(db, "folders"));
    let folders: Array<Folder> = []
    querySnapshot.forEach((doc) => {
      folders = [...folders, doc.data() as Folder]
    });
    res.status(200).json(folders)
  } else if (req.method === 'POST') {
    const docRef = await addDoc(collection(db, 'folders'), JSON.parse(req.body));
    if (docRef.id) {
      res.status(200).json({id: docRef.id, success: true})
    } else {
      res.status(500).json({success: false})
    }
  }
}