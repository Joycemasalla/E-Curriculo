// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

 import './styles.global.css'
 import { Header } from './Components/Header'
 import {Sidebar} from './Components/Sidebar'
 import styles from './app.module.css'
 import {Post} from './Components/Post'
export default function App() {
  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post/>
        </main>
      
      </div>
    </div>
      
   
  )
}

