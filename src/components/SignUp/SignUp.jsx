import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import { Button, Input, ButtonWithIcon } from '../../atoms';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './SignUp.scss';

const initialFormData = {
  name: '',
  email: '',
  password: ''
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { name, email, password } = formData;
  const inputs = [
    {
      name: 'name',
      type: 'text',
      value: name,
      placeholder: 'Name',
      required: true
    },
    {
      name: 'email',
      type: 'text',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { name });
      setFormData(initialFormData);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('user email already in use');
      } else {
        console.log('error creating user', error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="signup__container">
      <div className="signup__box">
        <h3>Sign Up and Start Shopping!</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="signup__items">
            {inputs.map((item, i) => (
              <div className="signup__items-item" key={i}>
                <Input
                  type={item.type}
                  value={item.value}
                  name={item.name}
                  placeholder={item.placeholder}
                  required={item.required}
                  onChange={handleChange}
                />
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
