import React from 'react';
import { useAuth } from '../lib/auth';
import { Sections } from './styles/Sections';
import Card from 'react-bootstrap/Card';
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

            <center style={{ margin: "2rem 2rem" }}>
              <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header> {`Email: ${auth?.user.email}   `}</Card.Header>
                <Card.Body>
                  <Card.Title>{`Hello, ${auth?.user.name}`}</Card.Title>
                  <Card.Text>
                    <img src={auth?.user.photoUrl}  alt="profile-pic" style={{borderRadius:"50%",display:"flex",alignItems:"center"}}/>
                    <Button
                      variant="outline-dark"
                      size="lg"
                      onClick={() => auth.signout()}
                      style={{margin:"0.5rem 0.5rem"}}
                    >
                      Sign Out
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </center>

          )}
        </Sections>
      </main>
    </div>
  );
}

export default Login;
