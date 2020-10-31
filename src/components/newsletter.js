import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Style from './newsletter.module.css'

function Newsletter() {
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const handleUpdate = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email).then(({ msg }) => {
      setMessage(msg)
    })
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id={Style.emailInput}
        onChange={handleUpdate}
      />
      <button id={Style.submitButton} type="submit">
        Subscribe
      </button>
      {message && (
        <div
          id={Style.message}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  )
}
export default Newsletter
