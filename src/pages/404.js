import React from 'react'
import Layout from '../components/layout'
import Style from './404.module.css'

const error = () => (
  <Layout>
    <div className={Style.fourohfour}>
      <div>
        <span className={`${Style.error} white`}>4</span>
        <span id={Style.square} />
        <span className={`${Style.error} white`}>4</span>
      </div>
      <p className={`${Style.errorMessage} white center`}>
        This is embarrassing and
        {' '}
        <span className="highlight bold">not</span>
        {' '}
        awesome..
      </p>
      <a id={Style.backButton} className="white center" href="../">
        <div>Let's Go Back</div>
      </a>
    </div>
  </Layout>
)
export default error
