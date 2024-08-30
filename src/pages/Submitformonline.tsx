import React, { useState } from 'react';
import '../styles/Submitformonline.css'; // Ensure the CSS file is correctly imported
import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';

// Define interface for form state
interface FormState {
  email: string;
  feedbackCategory: string;
  message: string;
  file: File | null;
}

const Submitformonline: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    feedbackCategory: '',
    message: '',
    file: null,
  });

  const [errors, setErrors] = useState({
    email: '',
    feedbackCategory: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormState({
      ...formState,
      file: file,
    });
  };

  const validate = () => {
    const newErrors = {
      email: '',
      feedbackCategory: '',
      message: '',
    };

    if (!formState.email) {
      newErrors.email = 'Please enter your email address!';
    }

    if (!formState.feedbackCategory) {
      newErrors.feedbackCategory = 'Please select your feedback type!';
    }

    if (!formState.message) {
      newErrors.message = 'Please input your message!';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(x => x === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted', formState);
    }
  };

  return (
    <>
      <Header />
      <section id='Body-submit-section-01'>
        <section id='Main-submit-section-01'>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className='Main-submit-h1'>
              <h1>
                Submit a form online to contact us
              </h1>
              <p className='Main-submit-p2'>
                We&rsquo;d love to get your thoughts. By giving us your feedback, you&rsquo;re helping to make the A-Exampleshopping experience even better.
              </p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter your email'
                  value={formState.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="feedbackCategory">Feedback category *</label>
                <select
                  id="feedbackCategory"
                  name="feedbackCategory"
                  value={formState.feedbackCategory}
                  onChange={handleChange}
                  className={errors.feedbackCategory ? 'error' : ''}
                >
                  <option value="">Please select</option>
                  <option value="Category 2">Return</option>
                  <option value="Category 3">Warranty</option>
                  <option value="Category 4">My Account</option>
                  <option value="Category 5">Part Problem</option>
                  <option value="Category 6">Feedback</option>
                </select>
                {errors.feedbackCategory && <p className="error-message">{errors.feedbackCategory}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder='Write your message here.....'
                value={formState.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>

            <div className="form-group file-input">
              <label htmlFor="file">Attach a file</label>
              <div className="upload-area">
                <div className="upload-desc">
                  <Image className="main-logo-123" src="/images/help-center/circum_file-on.svg" width={70} height={50} alt="Upload Icon" />
                  Drag and Drop image file here or
                </div>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="file-input-hidden"
                  accept="image/*"
                />
              </div>
              {formState.file && <p className="file-name">{formState.file.name}</p>}
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Submitformonline;
