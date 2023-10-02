import apiInstance from '@/pages/api/axios';

export const getVisitors = async (nowYear: string) => {
  const response = await apiInstance.get(
    // 올해 전체 데이터
    `admin/visitation?size=100&startDate=${nowYear}-01-01`,
  );
  return response.data;
};

export const getSearchVisitors = async (queryString: string) => {
  const response = await apiInstance.get(`admin/visitation?${queryString}`);
  return response.data;
};
