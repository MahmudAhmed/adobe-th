import { auth } from '@/utils/authentication/firebase'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'


export const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    return user
  } catch (error) {
    console.log('error on authentiation', error)
  }
}

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        unsubscribe()
        resolve(userAuth)
      } else {
        unsubscribe()
        resolve(null)
      }
    }, reject)
  })
}

export const logout = async () => {
  if (auth.currentUser) {
    await signOut(auth)
  }
}

