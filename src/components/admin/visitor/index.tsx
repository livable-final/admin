import VisitorExcelDown from '@/components/admin/visitor/VisitorExcelDown';
import VisitorList from '@/components/admin/visitor/VisitorList';
import VisitorSearch from '@/components/admin/visitor/VisitorSearch';
import { getVisitors } from '@/pages/api/visitor/visitorRequests';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { GetVisitorsData } from '@/types/visitor/api';
import dayjs from 'dayjs';
import VisitorListPagenation from './VisitorListPagenation';

function Index() {
  const [visitorList, setVisitorList] = useState<GetVisitorsData>();

  const [dataPage, setDataPage] = useState(0);
  const nowYear = dayjs().format('YYYY');
  const [page, setPage] = useState(1);
  const limit = 5; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset
  const size = 25;

  useEffect(() => {
    const visitorsData = async () => {
      try {
        const response = await getVisitors(size, dataPage, nowYear);
        if (response?.data) {
          setVisitorList(response.data);
          // setVisitorListLength(response.)
        }
      } catch (err) {
        //  검색 오류 예외 처리
      }
    };
    visitorsData();
  }, [nowYear, dataPage]);

  const ListData = (list: GetVisitorsData) => {
    const result = list.content.slice(offset, offset + limit);
    return result;
  };

  return (
    <div css={contentStyles}>
      <VisitorSearch
        setVisitorList={setVisitorList}
        setPage={setPage}
        size={size}
        dataPage={dataPage}
        setDataPage={setDataPage}
      />

      {visitorList && (
        <>
          <VisitorExcelDown checkVisitors={visitorList.totalElements} />
          <VisitorList content={ListData(visitorList)} />
          <VisitorListPagenation
            limit={limit}
            page={page}
            totalVisitors={visitorList.content.length}
            setPage={setPage}
            dataPage={dataPage}
            setDataPage={setDataPage}
            size={size}
            dataLength={visitorList?.content.length}
          />
        </>
      )}
    </div>
  );
}

const contentStyles = css`
  & > * {
    padding-top: 20px;
  }
`;
export default Index;
