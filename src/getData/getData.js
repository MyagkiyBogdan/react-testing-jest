import axios from 'axios';
import { mapArrToString } from '../mapArrToString/mapArrToString';

export const getData = async () => {
  try {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get(baseUrl);
    const userIds = response.data.map(user => user.id);
    return mapArrToString(userIds);
  } catch (error) {
    alert(error);
  }
};
