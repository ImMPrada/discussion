import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import { PostsContextTypes } from "../../contexts/PostsContext/types";
import * as yup from 'yup';
import { useFormik } from 'formik';

const usePost = () => {
  const { createPost } = useContext(PostsContext) as PostsContextTypes;
  const validationSchema = yup.object().shape({
    content: yup.string().required(),
    receiverId: yup.number().nullable()
  });
  
  const formik = useFormik({
    initialValues: {
      content: '',
      receiverId: null
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      createPost(formik.values)    
    },
  });

  return {
    formik
  }
}

export default usePost
