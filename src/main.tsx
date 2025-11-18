import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './contexts/AuthContext.tsx'
import CartProvider from './contexts/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
