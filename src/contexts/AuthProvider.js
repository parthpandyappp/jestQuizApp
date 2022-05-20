import { db } from "../backend";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, setDoc, serverTimestamp, } from "firebase/firestore";
import { getUser, doesExist, getUserDataFromFireStore, userLogOut, userLogin, userSignup } from "../helper-functions"


const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // const userSignup = async (e, email, pass, name) => {
  //   try {
  //     e.preventDefault();
  //     const res = await createUserWithEmailAndPassword(auth, email, pass, name);
  //     updateProfile(auth.currentUser, {
  //       displayName: name,
  //     });
  //     setUserData(res.user)
  //     navigate("/themes")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const userLogOut = async () => {

  //   try {
  //     await signOut(auth)
  //     setCurrentUser(null)
  //     navigate("/")
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }

  // const userLogin = async (e, email, password) => {
  //   try {
  //     e.preventDefault();
  //     const res = await signInWithEmailAndPassword(auth, email, password)
  //     getUser(res.user.uid, setCurrentUser);
  //     navigate("/themes")
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // const getUserDataFromFireStore = async () => {
  //   try {
  //     const res = await getDocs(collection(db, "users"));
  //     return res
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const doesExist = async (email) => {
  //   try {
  //     const querySnapshot = await getUserDataFromFireStore();
  //     const data = querySnapshot ? querySnapshot.docs.map((snap) => snap.data()) : undefined;
  //     return data ? data.find((user) => user.email === email) : false;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUser = async (uid, setCurrentUser) => {
  //   try {
  //     const docRef = doc(db, "users", uid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setCurrentUser(docSnap.data());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    (async () => {
      try {
        if (userData) {
          const userExists = await doesExist(userData.email);
          if (!userExists) {
            const userRef = collection(db, "users");
            await setDoc(doc(userRef, userData.uid), {
              uid: userData.uid,
              displayName: userData.displayName,
              email: userData.email,
              timestamp: serverTimestamp(),
              result: []
            });
            setCurrentUser({
              uid: userData.uid,
              displayName: userData.displayName,
              email: userData.email,
              timestamp: serverTimestamp(),
              result: [],
            });
          } else {
            await getUser(userData.uid, setCurrentUser);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line
  }, [userData]);

  return (
    <AuthContext.Provider value={{ currentUser, userSignup, userLogOut, userLogin, setCurrentUser, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
