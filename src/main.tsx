import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './contexts/AuthContext.tsx'
import CartProvider from './contexts/CartContext.tsx'
import { UiControllerProvider } from './contexts/uiControllerContext.tsx'
import { RightPanel} from './components/uiController/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <UiControllerProvider>
            <RightPanel />
              <RouterProvider router={router} />
        </UiControllerProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
