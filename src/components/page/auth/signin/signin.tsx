'use client'
import { AuthPageWrapper } from '@/components/page/auth/signin/style'
import { signInWithGoogle } from '@/utils/authentication/google'

function SignInPage(params :any) {

  return (
    <AuthPageWrapper>
      
      <div>
        <h1>Sign in</h1>
        <div>
          {/* <GoogleSignInButton
        onClick={signInWithGoogle}
        // disabled={loadingGoogle}
        // loading={loadingGoogle}
            text={'Sign in with Google'}
          /> */}
          <button onClick={signInWithGoogle}>Text</button>
        </div>
      </div>
    </AuthPageWrapper>
     
                
             
  )
}

export default SignInPage
