import { habitService } from '@/service/habits';
import { useQuery } from '@tanstack/react-query';

export default function useSummaryQuery() {
  const summaryQuery = async () =>
    habitService()
      .summary()
      .then((res) => res);

  return useQuery({ queryKey: ['summary-query'], queryFn: summaryQuery });
}
