import React from 'react';
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
  return (
    <div className="signin__container">
      <div className="signin__box">
        <h3>Sign In To Your Crown Clothing Account!</h3>
        <hr />
        <div className="signin__items">
          {inputs.map((item, i) => (
            <div className="signin__items-item" key={i}>
              <Input type={item.type} placeholder={item.placeholder} />
            </div>
          ))}
          <div className="signin__items-item">
            <Button title="Sign In" color="inherit" />
          </div>
          <div className="signin__items-item">
            <p>Or</p>
          </div>
          <div className="signin__items-item">
            <ButtonWithIcon img={images.google} title="Continue with Google" />
          </div>
          <div className="sigin__items-item">
            <p>
              Don't have an account? <Link to="signup">sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
