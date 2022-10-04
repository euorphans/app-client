import axios from 'axios';
import { config } from '../config';

export class SubscriptionService {
  public static chargeSubscribe(type: number, merchant: number, period: number): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${config.apiURL}user/subscribe/charge`,
          {
            type: type,
            merchant: merchant,
            period: period
          },
          {
            timeout: 10000
          }
        )
        .then((response) => {
          if (response.data.error) {
            reject(response.data.error.message);
          } else {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject('Произошла ошибка! Данные: ' + error);
        });
    });
  }
}
