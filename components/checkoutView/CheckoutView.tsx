import { FC } from 'react'
import SidebarLayout from '@components/common/SidebarLayout'
import { useUI } from '@components/ui/context'

const CheckoutSidebarView: FC =() => {
   const { setSidebarView, closeSidebar } = useUI()
   const handleClose = () => closeSidebar()
    
   return (
     <SidebarLayout
         handleClose={handleClose}
     > 
        <h1>Sidebar checkout view</h1>
     </SidebarLayout>
    )
  }
  
  export default CheckoutSidebarView
  