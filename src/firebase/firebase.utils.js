import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyBZ6gasjX7j2X6ZJz0ogU3caYJ8kr-QEbE",
    authDomain: "crwn-gaming-db.firebaseapp.com",
    projectId: "crwn-gaming-db",
    storageBucket: "crwn-gaming-db.appspot.com",
    messagingSenderId: "753337094690",
    appId: "1:753337094690:web:7f1fbbb65a22fe3376b07b",
    measurementId: "G-7RM2T55P5Z"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export const createUserProfile = async (userAuth , AdditionalData) => {
    if (!userAuth) return;
    
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();

      if(!snapshot.exists){
        const {displayName , email} = userAuth;
        const CreatedAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            CreatedAt,
            ...AdditionalData
          })
          alert('user created successfully')
        }
        catch (err) {
          console.log('error occured while creating user ' + err.message );
        }
        
      }
      return userRef;
  } 


  export const addCollectionAndDocuments = async (collectionKey , objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef , obj);
    });

    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title , items} = doc.data();
      return {
        routeName : encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items

      }
    });

    return transformedCollection.reduce((acc , collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    } , {});
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 'prompt' : 'select_account'})
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase