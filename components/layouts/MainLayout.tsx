import styles from './MainLayout.module.css'
import Head from 'next/head'
import { Navbar } from '../Navbar'

import { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>About</title>
            <meta name="description" content="About us" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        <Navbar />
    
          <main className={styles.main}>
          
            { children }
            
          </main>
        </div>
      )
}

export default MainLayout