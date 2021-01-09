import { Response } from 'express'

export type CustomEvent = {
  data: Object
  id: string
  type: string
  retry?: number
}
export type Client = {
  id: string
  res: Response
}
