const authenticationService = () => {
  const getToken = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return Promise.reject('Authentication error');
    }

    return Promise.resolve(token);
  };

  const setToken = (token) => {
    localStorage.setItem('token', token);
  };

  const removeToken = () => {
    localStorage.removeItem('token');

    return Promise.resolve('test');
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default authenticationService();
