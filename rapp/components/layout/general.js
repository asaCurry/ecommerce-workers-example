import Navigation from '@global/navigation'
import Footer from '@global/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </>
  )
}