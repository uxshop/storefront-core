export interface Pagination {
  page: number
  items?: number
}

export interface PaginationFilter extends Pick<Pagination, 'page'> {
  first?: number
}

export interface PageInfo {
  hasNextPage?: boolean
  hasPreviousPage?: boolean
  startCursor?: string
  endCursor?: string
  first?: number
  total?: number
}

export interface PageableListObject<T> {
  edges: Array<T>
  pageInfo: PageInfo
}

export interface PageableEdgeObject<T> {
  node: T
  cursor?: string
}
