// request interceptor
api.interceptors.request.use(async config => {
    if (!config.headers) {
      return config;
    }
  
    let token = null;
  
    if (config.url === REFRESH_URL) {
      token = await AsyncStorage.getItem('refreshToken');
    } else {
      token = await AsyncStorage.getItem('accessToken');
    }
  
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });
  
  // response interceptor
  api.interceptors.response.use(
    res => res,
    async err => {
      console.log(err.response);
      const {
        config,
        response: {
          data: {code},
        },
      } = err;
  
      /** 1 */
      if (config.url === REFRESH_URL || code !== 'U002' || config.sent) {
        return Promise.reject(err);
      }
  
      /** 2 */
      config.sent = true;
  
      const response = await api.post('/api/auth/reissue');
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
  
      await AsyncStorage.setItem('accessToken', accessToken, () => {
        config.headers.Authorization = `Bearer ${accessToken}`;
      });
      await AsyncStorage.setItem('refreshToken', refreshToken);
  
      return api(config);
    },
  );