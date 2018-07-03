import axios from './http';

export default {
  login(params) {
    const url = '';
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(resp => {
        resolve(resp)
      });
    });
  },
  get() {
    const url = '';
    axios.get(url).then(data => {
      console.log(data)
    })
  }
};
