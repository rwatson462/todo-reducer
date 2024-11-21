
export function useLocalStorage() {
  return {
    get: <T>(key: string): T|null => {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : value
    },
    set: <T>(key: string, value: T) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    remove: (key: string) => {
      localStorage.removeItem(key)
    },
  }
}
