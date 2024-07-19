import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className="pb-[100px]">
      <Header/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout