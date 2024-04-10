import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const SocialLogin = () => {
    const {googleLogin,githubLogin} = UseAuth()
    return (
        <div>
            <div className='divider'> Continue with </div>
            <div className=''>
                <button onClick={()=>googleLogin()} 
                className='btn btn-primary w-2/3 mb-2 rounded-3xl btn-outline font-bold font-neon'>Login with Google</button>
                <button onClick={()=>githubLogin()} 
                className='btn btn-secondary w-2/3 rounded-3xl btn-outline font-bold font-neon'>Login with GitHub</button>
                

            </div>
            
        </div>
    );
};

export default SocialLogin;