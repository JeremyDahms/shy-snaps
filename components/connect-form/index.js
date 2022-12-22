import ky from 'ky';
import { useForm } from 'react-hook-form';
import styles from './ConnectForm.module.css';

const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.formBox}>
      <form
        onSubmit={handleSubmit((data) => {
          const { name, email, companyName, state, message } = data;
          ky.post(`${process.env.serverUrl}/contacts`, {
            json: {
              name,
              email,
              companyName,
              state,
              message,
            },
          });
        })}
      >
        <div className={styles.doubleRow}>
          <input
            {...register('name', { required: 'This field is required' })}
            placeholder='NAME'
          />
          <input
            {...register('email', { required: true })}
            placeholder='EMAIL'
          />
        </div>
        <div className={styles.doubleRow}>
          <input
            {...register('company', { required: true })}
            placeholder='COMPANY NAME'
          />
          <input
            {...register('state', { required: true })}
            placeholder='STATE'
          />
        </div>
        <textarea
          {...register('message', { required: true })}
          placeholder='MESSAGE'
        />
        <input type='submit' value='SEND' />
      </form>
    </div>
  );
};

export default ConnectForm;
