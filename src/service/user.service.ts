import { Injectable } from "@angular/core";
import { SupabaseService } from "../app/supabase.service";
// import { SupabaseService } from './base.service'

export interface UserInsert {
  uid: string;
  email: string;
  display_name: string;
  photo_url: string;
  detail: object;
}

const TABLE_NAME = "user";

@Injectable()
export class UserService {
  constructor(public sb: SupabaseService) {}

  getData(id?: number) {
    if (id) {
      return this.sb.supabase.from(TABLE_NAME).select().eq("uid", id);
    }
    return this.sb.supabase.from(TABLE_NAME).select();
  }

  createData(dataInsert: UserInsert) {
    return this.sb.supabase.from(TABLE_NAME).insert(dataInsert);
  }
}
