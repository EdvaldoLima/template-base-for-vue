import { Axios } from 'axios';
import debounce from '@/utils/debounce';

export default class Http extends Axios {
  async index(resource, params) {
    try {
      return await this.get(resource, { params });
    } catch (error) {
      return error;
    }
  }

  async byId(resource, params = {}) {
    try {
      return await this.get(resource, { params });
    } catch (error) {
      return error;
    }
  }

  async search(resource, params = {}, wait = 1000) {
    try {
      return await debounce(
        async () => await this.get(resource, { params }),
        wait,
      );
    } catch (error) {
      return error;
    }
  }

  async create(resource, payload = {}) {
    try {
      return await this.post(resource, payload);
    } catch (error) {
      return error;
    }
  }

  async update(resource, payload = {}) {
    try {
      return await this.put(resource, payload);
    } catch (error) {
      return error;
    }
  }

  async remove(resource, params = {}) {
    try {
      return await this.delete(resource, params);
    } catch (error) {
      return error;
    }
  }
}
