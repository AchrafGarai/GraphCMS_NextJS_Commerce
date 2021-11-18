import React, { FC }  from 'react'
import { DefaultSeo } from 'next-seo'
import { useUI } from '@components/ui/context'
import { defaultSeo } from 'next-seo.config'
import Footer from '@components/footer'
import Header from '@components/header'
import Sidebar from '@components/ui/Sidebar'
import Modal from '@components/ui/Modal'
import CheckoutView from '@components/checkoutView'


const ModalView: FC<{ modalView: string; closeModal(): any }> = ({
  modalView,
  closeModal,
}) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <CheckoutView />}
      {modalView === 'SIGNUP_VIEW' && <CheckoutView />}
      {modalView === 'FORGOT_VIEW' && <CheckoutView />}
    </Modal>
  )
}

const ModalUI: FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView: FC<{ sidebarView: string; closeSidebar(): any }> = ({
  sidebarView,
  closeSidebar,
}) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'CART_VIEW' && <CheckoutView />}
      {sidebarView === 'CHECKOUT_VIEW' && <CheckoutView />}
      {sidebarView === 'PAYMENT_VIEW' && <CheckoutView />}
      {sidebarView === 'SHIPPING_VIEW' && <CheckoutView />}
    </Sidebar>
  )
}

const SidebarUI: FC = () => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView sidebarView={sidebarView} closeSidebar={closeSidebar} />
  ) : null
}

function Layout({ children, footer, navigation }) {
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSeo} />
      <Header {...navigation} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
      <Footer {...footer} />
      <ModalUI />
      <SidebarUI />
    </React.Fragment>
  )
}

export default Layout
