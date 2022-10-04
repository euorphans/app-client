import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import React from 'react';

export default class UserService {
  static async getUser(name: string | undefined, setState?: any) {
    return axios.get(`${config.apiURL}user/get/name/${name}`);
  }

  static async getUserRating(name: string | undefined, setState?: any) {
    return axios.get(`${config.apiURL}user/rating/name/${name}`);
  }
}
