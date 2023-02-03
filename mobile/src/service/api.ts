import axios from 'axios';

import Constants from 'expo-constants';

const { manifest } = Constants;

// @ts-ignore
const baseURL = `http://${manifest.debuggerHost.split(':').shift()}:8080/api`;

const api = axios.create({
  baseURL,
});

export { api };
