import { Injectable } from '@angular/core'
import { SupabaseService } from '../app/supabase.service'
// import { SupabaseService } from './base.service'

export interface DataInsert {
  text_name: string
  like: boolean
  unlike: boolean
  user: string | any
  uid: string
}

@Injectable()
export class VoteService {
  constructor(public sb: SupabaseService) {}

  getVote(id?: number) {
    if(id) {
      return this.sb.supabase.from('vote').select().eq('id_text_name', id)
    }
    return this.sb.supabase.from('vote').select()
  }

  createVote(dataInsert: DataInsert) {
    return this.sb.supabase.from('vote').insert(dataInsert)
  }

  upVote(id: number) {
    return this.sb.supabase.from('vote').update({ like: true, unlike: false }).eq('id_text_name', id)
  }

  downVote(id: number) {
    return this.sb.supabase.from('vote').update({ like: false, unlike: true }).eq('id_text_name', id)
  }
}