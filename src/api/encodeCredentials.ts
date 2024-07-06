export const encodeCredentials = (email: string, password: string) => {
  const credentials = `${email}:${password}`;
  return btoa(credentials);
};
