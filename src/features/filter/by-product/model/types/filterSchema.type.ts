import type { FilterKey, FilterProps, FilterSelect } from './filter.type';

export interface FilterSchema {
  status: string;
  items: Record<FilterKey, FilterProps>;
  select: FilterSelect;
}
