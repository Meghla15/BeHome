import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const SocialLogin = () => {
    const {googleLogin} = UseAuth()
    return (
        <div>
            <div className='divider'> Continue with </div>
            <div className=''>
                <button onClick={()=>googleLogin()} 
                className='btn btn-primary w-2/3 rounded-3xl btn-outline font-bold font-neon'>Login with Google</button>

            </div>
            
        </div>
    );
};

export default SocialLogin;