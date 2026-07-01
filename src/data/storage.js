const STORAGE_KEY = "farm-manager-pro-farms";

export function getFarms() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveFarms(farms) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(farms));
}