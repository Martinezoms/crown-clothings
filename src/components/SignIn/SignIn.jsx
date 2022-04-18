import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import { images } from '../../constants';
import { Button, ButtonWithIcon, Input } from '../../atoms';
import './SignIn.scss';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const inputs = [
    {
      type: 'text',
      placeholder: 'Email'
    },
    {
      type: 'password',
      placeholder: 'Password'
    }
  ];

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div className="signin__container">
      <div className="signin__box">
        <h3>Sign In To Your Crown Clothing Account!</h3>
        <hr />
        <form>
          <div className="signin__items">
            {inputs.map((item, i) => (
              <div className="signin__items-item" key={i}>
                <Input type={item.type} name={item.placeholder} placeholder={item.placeholder} />
              </div>
            ))}
            <div className="signin__items-item">
              <Button title="Sign In" color="inherit" />
            </div>
            <div className="signin__items-item">
              <p>Or</p>
            </div>
            <div className="signin__items-item" onClick={logGoogleUser}>
              <ButtonWithIcon img={images.google} title="Sign in with Google" />
            </div>
            <div className="sigin__items-item">
              <p>
                Don't have an account? <Link to="signup">sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
