import { useQuery } from '@tanstack/react-query';
import useHabitService from '../../service/habits';

export default function useGetSummary() {
  const summaryQuery = async () =>
    await useHabitService()
      .getSummary()
      .then((res) => res);

  return useQuery({ queryKey: ['summary-query'], queryFn: summaryQuery });
}
