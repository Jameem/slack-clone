import React from "react"
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"
import { useStateValue } from "../stateProvider"
import { actionTypes } from "../reducer"

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg"
          alt=""
        />
        <h1>Sign In to Codinoz</h1>
        <p>codinoz.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
