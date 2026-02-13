import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/Home/index.jsx'
import GalleryPage from './pages/Gallery/index.jsx'
import LoginPage from './pages/Auth/Login.jsx'
import RegisterPage from './pages/Auth/Register.jsx'
import ProfilePage from './pages/Profile/index.jsx'
import UploadPage from './pages/Upload/index.jsx'
import PhotoPage from './pages/Photo/index.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="photo/:id" element={<PhotoPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
