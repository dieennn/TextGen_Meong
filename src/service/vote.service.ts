import { Injectable } from '@angular/core'
import { SupabaseService } from '../app/supabase.service'
// import { SupabaseService } from './base.service'

export interface DataInsert {
  text_name: string
  like: boolean
  unlike: boolean
  user: string | any
}

@Injectable()
export class VoteService {
  constructor(public sb: SupabaseService) {}

  getVote() {
    return this.sb.supabase.from('vote').select()
  }

  createVote(dataInsert: DataInsert) {
    return this.sb.supabase.from('vote').insert(dataInsert)
  }
}