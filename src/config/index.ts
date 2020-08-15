const config = {
  baseURL: 'https://ztd.api.pe.hmg.asgard.b2w.io/',
  validateStatus(status: any) {
    return status < 600;
  },
};

export default config;
