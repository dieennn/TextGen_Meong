import { Injectable } from '@angular/core'
import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environment } from '../config/config'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable()
export class SupabaseService {
  public supabase: SupabaseClient
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }
}