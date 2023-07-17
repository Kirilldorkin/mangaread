import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/authActions';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Создаем объект FormData для отправки файла
    const formData = new FormData();
    formData.append('username', username);
    formData.append('nickname', nickname);
    formData.append('image_file', imageFile);
    formData.append('password', password);

    // Вызываем действие Redux для выполнения регистрации
    dispatch(signup(formData));

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
