import axios from "axios";

const API_BASE_URL = "https://63c2-59-18-161-28.ngrok-free.app/api";

const ApiService = {

    getDetailNoise(x, y) {
        return axios.get(`${API_BASE_URL}/noises`, {
          params: { x, y }, // x와 y를 쿼리 파라미터로 전달
          headers: {
            'ngrok-skip-browser-warning': '69420', // 헤더 추가
          },
        });
      },

    ceateNoise() {
        return axios.post(`${API_BASE_URL}/noises`);
    },

    searchNoises() {
        return axios.post(`${API_BASE_URL}/noises/nearby`);
    },

    deleteNoise(id) {
        return axios.delete(`${API_BASE_URL}/noises/${id}`);
    },

    searchUserNoiseList(postData) {
        return axios.post(`${API_BASE_URL}/post`, postData);
    },

    detailNoise(postData) {
        return axios.post(`${API_BASE_URL}/post`, postData);
    },

};

export default ApiService;