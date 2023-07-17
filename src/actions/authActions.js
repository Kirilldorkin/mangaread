import axios from "axios";

export const signup = (formData) => {
  return (dispatch) => {
    axios
      .post("http://68.183.214.2:8666/api/auth/signup/", formData)
      .then((response) => {
        // Обработка успешного ответа от сервера
        console.log(response.data);
        // Выполните необходимые действия после успешной регистрации, например, обновите состояние приложения
      })
      .catch((error) => {
        // Обработка ошибок при выполнении запроса
        console.log(error);
        // Выполните необходимые действия в случае ошибки, например, покажите сообщение об ошибке
      });
  };
};

export const signin = (loginData) => {
  return (dispatch) => {
    axios
      .post("http://68.183.214.2:8666/api/auth/signin/", loginData)
      .then((response) => {
        // Обработка успешного ответа от сервера
        console.log(response.data);
        // Выполните необходимые действия после успешного входа, например, обновите состояние приложения
      })
      .catch((error) => {
        // Обработка ошибок при выполнении запроса
        console.log(error);
        // Выполните необходимые действия в случае ошибки, например, покажите сообщение об ошибке
      });
  };
};
