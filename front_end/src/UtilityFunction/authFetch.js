
const authFetch = (url, options) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return Promise.reject('No token found');
    }
    
    const headers = {
      ...options.headers,
      Authorization: token,
    };
    
    const modifiedOptions = {
      ...options,
      headers,
    };
    
    return fetch(url, modifiedOptions)
      .then((response) => { 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        return response.json();
      });
  };
  
  export default authFetch;
  