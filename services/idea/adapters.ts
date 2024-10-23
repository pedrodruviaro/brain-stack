import type { Idea } from "~/entities/Idea/Idea"
import type { Database } from "~/libs/supabase/schema"

export type ReadOneRow = Database["public"]["Tables"]["ideas"]["Row"]

export function readOneAdapter(data: ReadOneRow | null): Idea | null {
  if (!data) return null

  return {
    id: data.id,
    title: data.title,
    content: data.content,
    createdAt: new Date(data.created_at),
    profileId: data.profile_id,
  }
}
