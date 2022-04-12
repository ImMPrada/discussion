import { useContext, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import { AuthContextTypes } from '../../contexts/AuthContext/types';
import * as yup from 'yup';
import { useFormik } from 'formik';


const useSignIn = () => {
  const { currentUser, login } = useContext(AuthContext) as AuthContextTypes;
  const history = useHistory();

  const validationSchema = yup.object().shape({
    nickname: yup
      .string()
      .required(),
    password: yup
      .string()
      .required(),
  });
  
  const formik = useFormik({
    initialValues: {
      nickname: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      login(formik.values)
    },
  });

  useEffect(() => {
    if(!currentUser) return

    history.push('/posts')
  }, [currentUser])

  return {
    formik,
  }
}

export default useSignIn
