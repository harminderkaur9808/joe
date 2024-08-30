import { useState } from 'react';
import '../styles/HelpCenter.css';
import Footer from './Footer';
import Header from './Header';
import Faq from './Faq'; // Import the new Banner component
import FaqBanner from './FaqBanner';
import FaqScreen from './FaqScreen';
import Image from 'next/image';

const HelpCenter: React.FC = () => {
  const [formState, setFormState] = useState({
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
    //   file: file,
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
    }
  };

  return (
<>
<Header />
    <div className="Helpcontainer">
      <section className="hero">
        <div className="hero-text">
          <h2>HELP CENTER</h2>
          <div className="hero-textMain">
            <p>Contact us every time you need help.</p>
            <p>We are here to help 24/7.</p>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p>Submit a form to contact us. We are looking forward to hearing from you.</p>
          <p><strong>Phone number:</strong> +1 888 374 5088</p>
          <p><strong>Emails:</strong></p>
          <ul>
            <li>Customer Service: service@a-premium.com</li>
            <li>Feedback & Suggestion: feedback@a-premium.com</li>
          </ul>
          <p><strong>Support Time:</strong> Mon-Sun: 24/7</p>

          <div className="contact-details-images" >
          <Image className="main-logo" src="/images/help-center/ic_baseline-facebook.svg" width={70} height={50} alt="" />
          <Image className="main-logo" src="/images/help-center/mdi_youtube.svg" width={70} height={50} alt="" />

          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
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
          <div className="upload-icon"></div>
          <div className="upload-tips">
          <Image className="main-logo-123" src="/images/help-center/circum_file-on.svg" width={70} height={50} alt="" />

            Drag and Drop image file here or

          </div>
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
      {/* {formState.file && <p className="file-name">{formState.file.name}</p>} */}
      {formState.file && <p className="file-name"></p>} 
    </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    </div>
    {/* FAQ Section */}
    <div className="Faq-text">
          <h2>FAQs</h2>
          
        </div>
    <FaqScreen />

    <Footer />
    </>
  );
};

export default HelpCenter;
