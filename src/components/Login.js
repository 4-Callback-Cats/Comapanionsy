import React  from 'react';
import { useAuth } from '../lib/auth';
import { Sections } from './styles/Sections';

import './components.css';
import { Button } from 'react-bootstrap';

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
        <Sections>
          <h1>Login Page</h1>
          {!auth?.user ? (
            <div mt="4" alignItems="center">
              <Button
                onClick={() => auth.signinWithGoogle()}
                variant="outline-dark"
                size="lg"
              >
                Sign In with Google
              </Button>
            </div>
          ) : (
            <div>
              <h3>{`Hello, ${auth?.user.name}`}</h3>
              <div>
                {`Email: ${auth?.user.email}   `}
                <img src={auth?.user.photoUrl} />
              </div>
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => auth.signout()}
              >
                Sign Out
              </Button>
            </div>
          )}
        </Sections>
      </main>
    </div>
  );
}

export default Login;
