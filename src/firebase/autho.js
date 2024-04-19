import {auth, firestore} from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';


export const doCreateUserWithEmailAndPassword = async (email, password, role) => {
    try {
        console.log(role);
        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        
        // Get the user object from the userCredential
        const user = userCredential.user;


        // Update the user's display name
        await updateProfile(user, { displayName : role });

        return user;
    } catch (error) {
        throw error;
    }
};
export const doSignInWithEmailAndPassword = async (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut=()=>{
    return auth.signOut();
}

