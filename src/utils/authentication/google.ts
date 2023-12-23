import { auth } from '@/utils/authentication/firebase'
import {
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'


export const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    return user
  } catch (error) {
    // const { code, message } = error
    // console.log('error on authentiation', error)
    // return { code, message }
  }
}
