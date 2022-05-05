class Storage {
  static set(key: string, value: boolean | string | number | object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static get(key: string): string | null {
    return localStorage.getItem(key);
  }
  static clear(): void {
    localStorage.clear();
  }
}

export default Storage;
