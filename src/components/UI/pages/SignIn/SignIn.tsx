import useSignIn from "../../../../hooks/useSignIn"
import './styles.scss'

const SignIn = () => {
  const { formik } = useSignIn()

  return (
    <div className="main">
      <form onSubmit={formik.handleSubmit}>
        <div className="sign-in-form">
          <h1>HOLI</h1>
          <label >e-mail or nick:</label>
          <input 
            type="text" 
            id="nickname"
            onChange={formik.handleChange}
            value={formik.values.nickname}
            placeholder='nickname'
          />
          <label >password:</label>
          <input 
            type="password" 
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}  
          />
          <button type='submit'>SEND</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn