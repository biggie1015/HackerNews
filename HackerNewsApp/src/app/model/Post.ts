export interface Post {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export interface Pagination {
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
}
