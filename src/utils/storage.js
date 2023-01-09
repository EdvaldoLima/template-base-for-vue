export default class Storage {
  constructor(storageType = 'local') {
    this.storageType = storageType;
    this.storage = null;

    this.init();
  }

  init() {
    const typesStorage = {
      local: localStorage,
      session: sessionStorage,
    };
    this.storage = typesStorage[this.storageType];
  }

  setItem(name, value) {
    this.storage.setItem(name, value);
  }

  getItem(name) {
    try {
      const storageItem = this.storage.getItem(name);

      if (storageItem) {
        return storageItem;
      }

      throw new Error('key not found in storage');
    } catch (error) {
      throw new Error(error);
    }
  }

  removeItem(name) {
    try {
      const storageItem = this.storage.removeItem(name);

      if (storageItem) {
        return storageItem;
      }

      throw new Error('key not found in storage');
    } catch (error) {
      throw new Error(error);
    }
  }

  storageKeyExits(name) {
    const storageItem = this.storage.getItem(name);

    if (storageItem) {
      return true;
    }
    return false;
  }

  setJSON(name, objectJson) {
    return this.storage.setItem(name, JSON.stringify(objectJson));
  }

  getJSON(name) {
    return JSON.parse(this.storage.getItem(name));
  }

  clear() {
    this.storage.clear();
  }
}
