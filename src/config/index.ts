const config = {
  baseURL: 'http://localhost:3333',
  validateStatus(status: any) {
    return status < 600;
  },
};

export default config;
