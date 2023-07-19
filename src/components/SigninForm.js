// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { signin } from '../actions/authActions';
//
// const SigninForm = () => {
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     // Создаем объект с данными входа
//     const loginData = {
//       username: username,
//       password: password,
//     };
//
//     // Вызываем действие Redux для выполнения входа
//     dispatch(signin(loginData));
//
//     console.log("  выполнен");
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };
//
// export default SigninForm;
