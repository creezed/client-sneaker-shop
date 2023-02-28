export enum FilterKey {
  GENDER = 'gender',
  SIZE = 'size',
  BRAND = 'brand',
  AGE = 'age',
  SALE = 'sale',
}

export interface FilterProps {
  label: string;
  items?: FilterItem[];
}

export interface FilterItem {
  id: number;
  label: string;
  value: string;
}

export enum FilterSelectKey {
  CHEAPEST = 'cheapest',
  EXPENSIVE = 'expensive',
  POPULAR = 'popular',
}

export interface FilterSelectProps {
  label: string;
}

export interface FilterSelect {
  key: string;
  label: string;
  items: Record<FilterSelectKey, FilterSelectProps>;
}
