import type { Idea } from "~/entities/Idea/Idea"

export interface CreateOptions {
  title: string
  content: string
  profileId: string
}

export type UpdateOptions = Partial<Idea>

export interface ReadAllOptions {
  userId: string
  to?: number
  from?: number
}
