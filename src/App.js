import { useEffect, useState } from 'react';

import Lenta from './components/Lenta';

import Create from './components/Create';

import Edit from './components/Edit';

import ShowPost from './components/ShowPost';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7777/posts")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  function handleSubmit(value) {
    fetch('http://localhost:7777/posts', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 0, content: value })
    })
    navigate('/');
  }

  function handleRemovePost(id) {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setList(prevList => [...prevList.filter(el => el.id !== id)]);

    navigate("/");
  }

  function handleEditPost(id, value) {
    fetch(`http://localhost:7777/posts`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, content: value })
    });
    navigate('/');
  }

  return (
    <div className="container">
      <Routes>
        <Route path='/' exact element={<Lenta list={list} />} />
        <Route path='/posts/new' element={<Create onSubmit={handleSubmit} />} />
        <Route path='/posts/:id' element={<ShowPost list={list} onRemovePost={handleRemovePost} />} />
        <Route path='/posts/edit/:id' element={<Edit onEditPost={handleEditPost} />} />
      </Routes>
    </div>
  )
}

export default App;
