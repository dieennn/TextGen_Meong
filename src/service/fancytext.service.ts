import { Injectable } from "@angular/core";
import { SupabaseService } from "../app/supabase.service";
// import { SupabaseService } from './base.service'

export interface FancytextInsert {
  id_title: number;
  title: string;
  created_by: string;
}

const TABLE_NAME = "fancy_text";

@Injectable()
export class FancytextService {
  constructor(public sb: SupabaseService) {}

  getFancytext(id?: number) {
    if (id) {
      return this.sb.supabase.from(TABLE_NAME).select().eq("id_title", id);
    }
    return this.sb.supabase.from(TABLE_NAME).select();
  }

  createFancytext(dataInsert: FancytextInsert) {
    return this.sb.supabase.from(TABLE_NAME).insert(dataInsert);
  }
}
