import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {v4 as uuidv4} from 'uuid';

const usePost = () => {
  const { allPosts, setAllPosts }: any = useContext(DataContext);
  const { currentUser }: any = useContext(AuthContext);
  const validationSchema = yup.object().shape({
    postToSend: yup
      .string(),
  });
  
  const formik = useFormik({
    initialValues: {
      postToSend: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(formik.values)
      sendPost({content: formik.values.postToSend})
    },
  });

  useEffect(() => {
    console.log(allPosts)
  }, [allPosts])

  const sendPost = (additionalPayload: {}) => {
    const payload = {
      postId: uuidv4(),
      userId: currentUser.userId,
      date: new Date().toISOString(),
      main: true,
      responses:[],
      ...additionalPayload
    }

    const temporalAllPosts = [...allPosts]
    temporalAllPosts.push(payload)
    console.log(temporalAllPosts)
    setAllPosts(temporalAllPosts)
    formik.setFieldValue('postToSend', '')
  }


  return {
    sendPost,
    formik,
  }
}

export default usePost
