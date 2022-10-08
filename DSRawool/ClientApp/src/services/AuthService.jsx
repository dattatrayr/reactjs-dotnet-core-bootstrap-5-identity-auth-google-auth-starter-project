export const externalLogin = async (externalLoginRequest) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(externalLoginRequest),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/accounts/externallogin/`,
    requestOptions
  )
    .then(function (response) {
      if (response.ok || response.status === 401) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then((res) => ({
          statusCode: res[0],
          data: res[1],
        }));
      } else if (response.status === 400) {
        console.log(response);
        const statusCode = response.status;
        const data = response.statusText;
        return Promise.all([statusCode, data]).then((res) => ({
          statusCode: res[0],
          data: res[1],
        }));
      } else throw response;
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return await response;
};

export const login = async (loginRequest) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginRequest),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/accounts/login/`,
    requestOptions
  )
    .then(function (response) {
      if (response.ok || response.status === 401) {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]).then((res) => ({
          statusCode: res[0],
          data: res[1],
        }));
      } else if (response.status === 400) {
        console.log(response);
        const statusCode = response.status;
        const data = response.statusText;
        return Promise.all([statusCode, data]).then((res) => ({
          statusCode: res[0],
          data: res[1],
        }));
      } else throw response;
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};

export const registerUser = async (registerRequest) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerRequest),
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/accounts/registration`,
    requestOptions
  )
    .then((res) => {
      if (res.status !== 201) throw new Error(res.status);
      else return res;
    })
    .catch((error) => {
      console.log(error);
      return "error";
    });

  return await response.json();
};

export const confirmEmail = async (queryParams) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/accounts/EmailConfirmation?${queryParams}`,
    requestOptions
  )
    .then((res) => {
      if (res.status === 200) return res;
      else if (res.status === 400) return res;
      else throw new Error(res);
    })
    .catch((error) => {
      console.log(error);
      return "error";
    });

  return await response;
};

export default {
  externalLogin,
  login,
  registerUser,
  confirmEmail,
};
