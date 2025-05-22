export const mockLogin = vi.fn();
export const mockLogout = vi.fn();
export const mockUseAuth = (user = { email: "admin@exemplo.com" }) => {
  return {
    user,
    login: mockLogin,
    logout: mockLogout,
  };
};
