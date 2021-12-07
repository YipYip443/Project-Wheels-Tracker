import {auth, db} from "../../db/firestore";

async function getIsAdmin() {
    const userID = auth.currentUser.uid;

    const currentUser = db.collection('users').doc(userID);
    const userData = await currentUser.get();
    let checkAdmin = userData.data().isAdmin;
    console.log('Check Admin:');
    console.log(checkAdmin);
    return checkAdmin;
}

export default getIsAdmin;
