import React from 'react';
import { useAuth } from '../lib/auth';

import './components.css';
function Login() {
  const auth = useAuth();
  return (
    <div>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/list"
          }
        `,
          }}
        />
      </head>
      <main style={{ textAlign: 'center', margin: '8px' }}>
        <h2>Login Page</h2>
        {!auth?.user ? (
          <div mt="4" alignItems="center">
            <button onClick={() => auth.signinWithGoogle()}>
              Sign In with Google
            </button>
          </div>
        ) : (
          <div>
            <h3>{`Hello, ${auth?.user.name}`}</h3>
            <div>
              {`Email: ${auth?.user.email}   `}
              <img src={auth?.user.photoUrl} />
            </div>
            <button onClick={() => auth.signout()}>Sign Out</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Login;
