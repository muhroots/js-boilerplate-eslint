const Cookie = {
  add: (name, value) => {
    document.cookie = `${name}=${value}`;
  },

  remove: (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=foregon.com; path=/`;
  },
};

export default Cookie;
