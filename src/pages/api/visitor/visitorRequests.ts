import apiInstance from '@/pages/api/axios';

export const getVisitors = async (page: number, size: number) => {
  const response = await apiInstance.get(
    `admin/visitation?page=${page}&size=${size}`,
  );
  return response.data;
};

export const getSearchVisitors = async (
  page: number,
  size: number,
  Condition: string,
  searchText: string,
  startDate: string,
  endDate: string,
) => {
  const response = await apiInstance.get(
    `admin/visitation?page=${page}&size=${size}&queryCondition=${Condition}&query=${searchText}&startDate=${startDate}&endDate=${endDate}`,
  );
  return response.data;
};
