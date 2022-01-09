import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { getLoginData } from '../../redux/users-reducer';
import './loginForm.css';


const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <div className='login-form'>
      <Formik
        initialValues={{
          firstName: '',
          password: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(66)
          dispatch(getLoginData(values))
        }}
        validationSchema={
          Yup.object().shape({
            firstName: Yup.string()
              .min(2, 'Too Short! ')
              .max(10, 'Too Long!')
              .required('Required'),
            password: Yup.string()
              .min(2, 'Too Short!')
              .max(10, 'Too Long!')
              .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
          })
        }
      >
        {({ errors, touched, values, handleChange, handleBlur, onSubmit }) => (
          <Form>
            <label htmlFor="firstName"></label>
            <input
              placeholder='FirstName'
              className={`${errors.firstName && touched.firstName ? 'error-input' : 'input'}`}
              value={values.firstName}
              type='text'
              id='firstName'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? <div className='error-message'>{errors.firstName}</div> : null}
            <label htmlFor="email"></label>
            <input
              placeholder='Email'
              className={`${errors.email && touched.email ? 'error-input' : 'input'}`}
              type='email'
              id='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}

            />
            {errors.email && touched.email ? <div className='error-message'>{errors.email}</div> : null}
            <label htmlFor="password"  ></label>
            <input
              placeholder='Password'
              type='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${errors.password && touched.password ? 'error-input' : 'input'}`}
            />
            {errors.password && touched.password ? <div className='error-message'>{errors.password}</div> : null}
            <button className='loginbtn' type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm