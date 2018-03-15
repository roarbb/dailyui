import React from 'react'
import Helmet from 'react-helmet'
import '../styles/sign-up.css'
import FaFacebook from 'react-icons/lib/fa/facebook';

const SignUpPage = () => (
  <div className="signup-box">
    <Helmet
      title="DailyUI 01 - Sign up"
      meta={[
        {name: 'description', content: 'Sign up page for Daily UI challenge'},
        {name: 'keywords', content: 'dailyui, signut, login'},
      ]}
    />
    <h1 className="title">Daily UI Inc.</h1>
    <form action="#">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="username"/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="your@email.com"/>

      <input type="submit" value="Sign up"/>
    </form>
    <div>
      <button className="facebook-sign-up"><FaFacebook/> Sign up with Facebook</button>
    </div>

    <div className="already-registered">Already have an account? <a href="#">Log in here.</a></div>
  </div>
)

export default SignUpPage
