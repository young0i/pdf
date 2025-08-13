import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력한 정보:\n이름: ${form.name}\n주소: ${form.address}\n전화: ${form.phone}\n이메일: ${form.email}`);
    // TODO: 여기서 백엔드 API 호출 추가 예정
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h1>계약서 작성 입력폼</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>이름:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>주소:</label><br />
          <input type="text" name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>전화번호:</label><br />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>이메일:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <button type="submit">계약서 생성하기</button>
      </form>
    </div>
  );
}

export default App;
