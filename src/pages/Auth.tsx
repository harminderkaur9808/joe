// pages/Auth.tsx
import { useState } from 'react';
import '../styles/Auth.css';
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    validate();
  };

  const validate = () => {
    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Provide a valid email address.';
    }

    if (formState.password.length < 8 || formState.password.length > 32) {
      newErrors.password = 'Please input your password!';
    }

    if (activeTab === 'signup' && formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = 'The password is inconsistent with the confirmation password.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
    }
  };

  return (
      <>
    <Header/>

    <div className="main-container">
      <div className="auth-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="form-container">
          {activeTab === 'login' ? (
            <form onSubmit={handleSubmit} className="form">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />

                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />

                {/* {errors.password && <p className="error-message">{errors.password}</p>} */}

                <Image className="main-logo-Ie" src="/images/authimhMain/mdi_show-outline.svg" width={70} height={50} alt="" />

              </div>
              <div className='Main-forget-field'>
                  <text>
                  Forgot Password
                  </text>
                </div>
              <button type="submit" className="submit-button">Sign In</button>
              <div className="social-buttons">
              <Image className="main-logo-123" src="/images/authimhMain/Googleicon.svg" width={70} height={50} alt="" />

                <button className="google-button text-black">Sign in with Google</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              
         
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {/* {errors.email && <p className="error-message">{errors.email}</p>} */}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
                  <Image id='password' className="main-logo-Ie" src="/images/authimhMain/mdi_show-outline.svg" width={70} height={50} alt="" />

                {/* {errors.password && <p className="error-message">{errors.password}</p>} */}
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                                                              <Image className="main-logo-Ie" src="/images/authimhMain/mdi_show-outline.svg" width={70} height={50} alt="" />

                {/* {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>} */}
              </div>
              <button type="submit" className="submit-button">Sign Up</button>
              <div className="social-buttons">
              <Image className="main-logo-123" src="/images/authimhMain/pngwingM91.png" width={22} height={22} alt="Hi-google" />

                <button className="google-button">SIGN IN WITH GOOGLE</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>

<Footer/>

</>
  );
};

export default Auth;
