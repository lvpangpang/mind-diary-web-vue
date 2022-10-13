import { http } from 'js-common-library'

export default {
  login: (data) => http.post('/dss/v1/login', data),
}
