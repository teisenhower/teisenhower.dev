import React from 'react'
import Layout from '../components/layout'
import * as styles from './404.module.css'

const error = () => {
  return (
    <Layout>
      <div className={styles.fourohfour}>
        <div>
          <span className={`${styles.error} white`}>4</span>
          <span id={styles.square} />
          <span className={`${styles.error} white`}>4</span>
        </div>
        <p className={`${styles.errorMessage} white center`}>
          This is embarrassing and
          {' '}
          <span className="highlight bold">not</span>
          {' '}
          awesome..
        </p>
        <a id={styles.backButton} className="white center" href="../">
          <div>Let&apos;s Go Back</div>
        </a>
      </div>
    </Layout>
  )
}
export default error
