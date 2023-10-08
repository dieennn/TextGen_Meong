import { Injectable } from "@angular/core";
import { SupabaseService } from "../app/supabase.service";
// import { SupabaseService } from './base.service'

export interface VoteInsert {
  upvote: boolean;
  downvote: boolean;
  user_uid: string;
  fancy_text_id_title: number;
}

const TABLE_NAME = "vote";

@Injectable()
export class VoteService {
  constructor(public sb: SupabaseService) {}

  getVote(id?: number) {
    if (id) {
      return this.sb.supabase
        .from(TABLE_NAME)
        .select()
        .eq("fancy_text_id_title", id);
    }
    return this.sb.supabase.from(TABLE_NAME).select();
  }

  createVote(dataInsert: VoteInsert) {
    return this.sb.supabase.from(TABLE_NAME).insert(dataInsert);
  }

  upVote(id: number) {
    return this.sb.supabase
      .from(TABLE_NAME)
      .update({ upvote: true, downvote: false })
      .eq("fancy_text_id_title", id);
  }

  downVote(id: number) {
    return this.sb.supabase
      .from(TABLE_NAME)
      .update({ upvote: false, downvote: true })
      .eq("fancy_text_id_title", id);
  }
}
