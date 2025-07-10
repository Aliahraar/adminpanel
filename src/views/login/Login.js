import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password,
      })

      const token = response.data.token
      localStorage.setItem('token', token)

      // Redirect to dashboard or home
      navigate('/dashboard')
    } catch (err) {
      setError('ورود ناموفق بود. لطفاً دوباره تلاش کنید.')
      console.error(err)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center justify-content-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} lg={5}>
            <CCard className="p-4 shadow-lg border-0 rounded-4">
              <CCardBody>
                <h2 className="text-center mb-4">ورود به سیستم</h2>
                <p className="text-medium-emphasis text-center mb-4">
                  لطفاً اطلاعات ورود خود را وارد کنید
                </p>
                {error && (
                  <div className="text-danger text-center mb-3">{error}</div>
                )}
                <CForm onSubmit={handleLogin}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="نام کاربری"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="رمز عبور"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>

                  <CRow className="mb-3">
                    <CCol xs={12}>
                      <CButton type="submit" color="primary" className="w-100 py-2">
                        ورود
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>

                <CRow>
                  <CCol xs={6}>
                    <CButton color="link" className="px-0">
                      رمز را فراموش کرده‌اید؟
                    </CButton>
                  </CCol>
                 
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
