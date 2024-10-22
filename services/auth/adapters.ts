import type { User } from "~/entities/User/User"
import type { Database } from "~/libs/supabase/schema"

type UserRow = Database["public"]["Tables"]["profiles"]["Row"]

export function getMyselfAdapter(data: UserRow | null): User | null {
  if (!data) return null

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    avatarUrl: data.avatar_url,
    createdAt: new Date(data.created_at),
  }
}
