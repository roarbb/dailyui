import React from 'react'
import Helmet from 'react-helmet'
import '../styles/sign-up.css'

const SignUpPage = () => (
  <div>
    <Helmet
      title="DailyUI 01 - Sign up"
      meta={[
        {name: 'description', content: 'Sign up page for Daily UI challenge'},
        {name: 'keywords', content: 'dailyui, signut, login'},
      ]}
    />
    <h1>Sign up</h1>
    <form action="#">
      <input type="email" placeholder="email" />
      <input type="submit" value="Register"/>
    </form>
  </div>
)

export default SignUpPage
