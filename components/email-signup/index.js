import ky from 'ky';
import Image from 'next/image';
import { useState } from 'react';
import RightArrow from '../../icons/RightArrow.png';
import styles from './EmailSignup.module.css';

const EmailSignup = () => {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const submitEmail = async () => {
    await ky.post(`${process.env.serverUrl}/newsletterSignups`, {
      json: { email: value },
    });
  };
  return (
    <>
      <div className={styles.field}>
        <input
          id='email'
          type='text'
          value={value}
          placeholder='email'
          onChange={handleChange}
          disabled={submitted}
        />
        <button
          onClick={() => {
            setSubmitted(true);
            submitEmail();
          }}
        >
          {'SUBSCRIBE'}
          <Image src={RightArrow} width={20} height={10} />
        </button>
      </div>
      {submitted && <div className={styles.confirmation}>Thank you!</div>}
    </>
  );
};

export default EmailSignup;
