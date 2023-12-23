// import SignIn from 'components/pages/AuthPages/signin'

import SignInPage from '@/components/page/auth/signin/signin'




const AuthPage = async (params) => {
    // return (
        // <AutoSync />
        
    //     // <WithoutAuthSync>
            // <SignIn redirectTo={params?.redirectTo} />
    //     // </WithoutAuthSync>
    // );
  return <SignInPage />

};

export default AuthPage;
