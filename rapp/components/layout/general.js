import Head from 'next/head'
import { useSelector } from 'react-redux'
import Footer from '@global/footer'
import Modal from '../modal'
import Hero from '../hero'

export default function Layout({ children }) {
  const showModal = useSelector((state) => state.modal.show)

  return (
    <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Oswald:wght@400;500;700&display=swap"
        rel="stylesheet"
      />  
    </Head>
      <Hero />
        <main>{children}</main>
        { showModal && <Modal /> }
      <Footer />
    </>
  )
}