import { PaginationFilter } from '../types/PaginationTypes'

export function normalizePagination(page = 1, items = 12): PaginationFilter {
  const offset = (page - 1) * items + 1

  return { page: offset, first: items }
}
