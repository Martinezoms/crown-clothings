import React from 'react';
import { Button, Input, ButtonWithIcon } from '../../atoms';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './SignUp.scss';

const SignUp = () => {
  const inputs = [
    {
      type: 'text',
      placeholder: 'Name'
    },
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
    <div className="signup__container">
      <div className="signup__box">
        <h3>Sign Up and Start Shopping!</h3>
        <hr />
        <div className="signup__items">
          {inputs.map((item, i) => (
            <div className="signup__items-item" key={i}>
              <Input type={item.type} placeholder={item.placeholder} />
            </div>
          ))}
          <div className="signup__items-item">
            <Button title="Sign Up" color="inherit" />
          </div>
          <div className="signup__items-item">
            <p>Or</p>
          </div>
          <div className="signup__items-item">
            <ButtonWithIcon img={images.google} title="Continue with Google" />
          </div>
          <div className="signup__items-item">
            <p>
              Already have an account? <Link to="/user">sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
