import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import {
  cilUser,
} from '@coreui/icons';

// ✅ TestData component
function TestData() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get token from localStorage

    axios.get('http://127.0.0.1:8000/api/test-data', {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
        Accept: 'application/json',
      },
    })
      .then(response => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.message || err.message || 'خطایی رخ داده');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div>
      <h1>{formData.message}</h1>
      <ul>
        <li>آیدی: {formData.data.id}</li>
        <li>نام: {formData.data.name}</li>
        <li>ایمیل: {formData.data.email}</li>
        <li>نقش‌ها: {formData.data.roles?.join(', ')}</li>
      </ul>
    </div>
  );
}

// ✅ Home component
const Home = () => {
  return (
    <div>
      <h2>صفحه اصلی</h2>
      <TestData />
    </div>
  );
};

export default Home;
