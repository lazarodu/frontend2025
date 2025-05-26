import type React from "react"

import { renderHook } from "@testing-library/react"
import { AuthContext, type AuthContextType } from "../../contexts/AuthContext"
import { useAuth } from "../../hooks/useAuth"

describe("useAuth Hook", () => {
  it("returns the auth context value", () => {
    const contextValue: AuthContextType = {
      currentUser: { id: "1", name: "Test User", email: "test@example.com", role: "user" },
      isLoading: false,
      login: async () => { },
      register: async () => { },
      logout: () => { },
    }

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )

    const { result } = renderHook(() => useAuth(), { wrapper })

    expect(result.current).toBe(contextValue)
  })

})
