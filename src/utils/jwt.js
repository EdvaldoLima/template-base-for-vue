import jwtDecode from 'jwt-decode';
import Storage from '@/utils/storage';
import timezone from 'moment-timezone';
import moment from 'moment';

export default class JWT {
  constructor(token, decodeHeader = false) {
    this.token = token;
    this.decodeHeader = decodeHeader;
    this.storage = new Storage('local');
  }

  getJWT() {
    try {
      const token = this.storage.getItem(this.token);

      return token;
    } catch (error) {
      throw new Error(error);
    }
  }

  getRoles() {
    const { roles } = this.decodeJWT();

    if (roles.length) {
      return roles;
    }

    return [];
  }

  decodeJWT() {
    try {
      const token = localStorage.getItem(this.token);
      const decoded = jwtDecode(token, { header: this.decodeHeader });

      return decoded;
    } catch (error) {
      throw new Error(error);
    }
  }

  isValidJWT() {
    try {
      const { exp } = this.decodeJWT();

      if (!exp) {
        throw new Error(
          "JWT token does not contain 'exp' key with token expiration time",
        );
      }

      const timeZoneDate = timezone().tz('America/Recife').format();
      const expirationDate = moment.unix(exp).format();
      const isValed = moment(timeZoneDate).isAfter(expirationDate, 'seconds');

      if (isValed) {
        throw new Error('JWT token is expired');
      }

      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
