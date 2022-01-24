export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface BasicPostFormResult<T> {
  code: number;
  message: string;
  result: T;
  exception?: string;
  file?: string;
  line?: number;
}
