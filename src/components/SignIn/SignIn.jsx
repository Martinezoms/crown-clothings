import React, { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { Button, ButtonWithIcon, Input } from '../../atoms';
import './SignIn.scss';

const initialFormData = {
  email: '',
  password: ''
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { email, password } = formData;

  const inputs = [
    {
      name: 'email',
      type: 'email',
      value: email,
      placeholder: 'Email',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      value: password,
      placeholder: 'Password',
      required: true
    }
  ];

  const signinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      setFormData(initialFormData);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="signin__container">
      <div className="signin__box">
        <h3>Sign In To Your Crown Clothing Account!</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="signin__items">
            {inputs.map((item, i) => (
              <div className="signin__items-item" key={i}>
                <Input
                  type={item.type}
                  name={item.name}
                  value={item.value}
                  placeholder={item.placeholder}
                  onChange={handleChange}
                  required={item.required}
                />
              </div>
            ))}
            <div className="signin__items-item">
              <Button title="Sign In" color="inherit" />
            </div>
            <div className="signin__items-item">
              <p>Or</p>
            </div>
            <div className="signin__items-item" onClick={signinWithGoogle}>
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
