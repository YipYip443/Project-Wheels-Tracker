import { db, auth } from './db/firestore';

const userID = auth.currentUser.uid;

async function getIsAdmin() {
    const currentUser = db.collection('users').doc(userID);
    const userData = await currentUser.get();
    let checkAdmin = userData.data().isAdmin;
    return checkAdmin;
}

export default getIsAdmin;