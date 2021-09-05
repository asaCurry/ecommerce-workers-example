import { useSelector } from 'react-redux'
import Navigation from '@global/navigation'
import Footer from '@global/footer'
import Modal from '../modal'

export default function Layout({ children }) {
  const showModal = useSelector((state) => state.modal.show)

  return (
    <>
      <Navigation />
        <main>{children}</main>
        { showModal && <Modal /> }
      <Footer />
    </>
  )
}