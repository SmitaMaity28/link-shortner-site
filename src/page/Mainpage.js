import React from 'react'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Search from '../components/Search'
function Mainpage() {
  return (
   <>
   <Nav/>
   <Head/>
   <div className="body">
   <Search/>
   <Description/>
   </div>
   <Footer/>
   </>
  )
}

export default Mainpage
