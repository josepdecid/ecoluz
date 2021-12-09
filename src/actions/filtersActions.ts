export const SET_SORT_INDEX = 'SET_SORT_INDEX';

export const setSortConfiguration = (
  idx: number,
  field: string,
  order: number
) => {
  return { type: SET_SORT_INDEX, idx, field, order };
};
