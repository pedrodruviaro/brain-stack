import { mySelfKey } from "./useMyself"
import type { MySelfContextProvider } from "./useMyself"

export function useLoggedUser() {
  const { user, loading } = inject(mySelfKey) as MySelfContextProvider

  return {
    user,
    loading,
  }
}
