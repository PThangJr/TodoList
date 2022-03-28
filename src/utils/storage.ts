const storage = (key: string) => {
  return {
    get() {
      const data = JSON.parse(localStorage.getItem(key) || JSON.stringify([]));
      return data || [];
    },
    set<T>(data: T) {
      return localStorage.setItem(key, JSON.stringify(data));
    },
  };
};
export default storage;
