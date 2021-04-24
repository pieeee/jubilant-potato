import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import _ from 'lodash'

const config = {
  apiKey: 'AIzaSyDhUQs3cTIHTVY8q0rcl_cyFgx3kYsU8II',
  authDomain: 'jubilant-db.firebaseapp.com',
  projectId: 'jubilant-db',
  storageBucket: 'jubilant-db.appspot.com',
  messagingSenderId: '112093631490',
  appId: '1:112093631490:web:b4603ea22e47d2ce89c31b',
  measurementId: 'G-7B6DVPL7BB',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth, addiTionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...addiTionalData,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const collectionSnapshotToMap = (collections) => {
  const convertToRouteName = (title) =>
    title
      .replace(/\s/g, '_')
      .replace(/[{()}]/g, '')
      .toLowerCase()

  const transCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      id: doc.id,
      routeName: convertToRouteName(title),
      title,
      items,
    }
  })

  return transCollection.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection
    return accumulator
  }, {})
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
