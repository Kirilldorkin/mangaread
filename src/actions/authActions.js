import axios from "axios";

// Действие для создания нового пользователя
export const signup = (userData) => {
  return (dispatch) => {
    return axios
      .post("http://68.183.214.2:8666/auth/signup", userData)
      .then((response) => {
        // Обработка успешного ответа
        dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        // Обработка ошибок
        dispatch({ type: "SIGNUP_ERROR", payload: error.response.data });
      });
  };
};
