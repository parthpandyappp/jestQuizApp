import { auth, db } from "../backend";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";

const userSignup = async (e, email, pass, name, setUserData, navigate) => {
    try {
        e.preventDefault();
        const res = await createUserWithEmailAndPassword(auth, email, pass, name);
        updateProfile(auth.currentUser, {
            displayName: name,
        });
        setUserData(res.user)
        navigate("/themes")
    } catch (err) {
        console.log(err);
    }
};

const userLogOut = async (navigate, setCurrentUser) => {

    try {
        await signOut(auth)
        setCurrentUser(null)
        navigate("/")
    } catch (err) {
        console.log(err)
    }

}

const userLogin = async (e, email, password, setCurrentUser, navigate) => {
    try {
        e.preventDefault();
        const res = await signInWithEmailAndPassword(auth, email, password)
        getUser(res.user.uid, setCurrentUser);
        navigate("/themes")
    } catch (error) {
        console.log(error)
    }

}

const getUserDataFromFireStore = async () => {
    try {
        const res = await getDocs(collection(db, "users"));
        return res
    } catch (error) {
        console.log(error);
    }
};

const doesExist = async (email) => {
    try {
        const querySnapshot = await getUserDataFromFireStore();
        const data = querySnapshot ? querySnapshot.docs.map((snap) => snap.data()) : undefined;
        return data ? data.find((user) => user.email === email) : false;
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (uid, setCurrentUser) => {
    try {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
        }
    } catch (error) {
        console.log(error);
    }
};

export { getUser, doesExist, getUserDataFromFireStore, userLogOut, userLogin, userSignup }