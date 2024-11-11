import * as $ from "jquery";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in");
    } else {
        console.log("User is signed out for real");
        $("#yourRecipe").css("display", "none");

    }
})

export function signUserUp(fn, ln, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("User created");
        })
        .catch((error) => {
            console.log(error);
        });

    //   return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signUserOut() {
    signOut(auth)
        .then(() => {
            console.log("User signed out");
        })
        .catch((error) => {
            console.log("Error" + error);
        });
}

export function signUserIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("User signed in");
            $("#yourRecipe").css("display", "block");
        })
        .catch((error) => {
            console.log("Error" + error);
        });
}