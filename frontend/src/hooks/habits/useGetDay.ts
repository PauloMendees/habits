import { habitService } from '@/service/habits';
import { GetDayQueryParams } from '@/service/habits/types';
import { useQuery } from '@tanstack/react-query';

export default function useGetDay(params: GetDayQueryParams) {
  const getDayQuery = async () =>
    habitService()
      .getDay(params)
      .then((res) => res);

  return useQuery({
    queryKey: [`getday-query-${params.date}`],
    queryFn: getDayQuery,
  });
}
