import {useQuery} from "@tanstack/react-query";
import * as apis from '../apis/apis.ts'

type useSearchBreedsProps = {
  searchTerm: string;
}

export default function useSearchBreeds({searchTerm}: useSearchBreedsProps) {
  return useQuery({
    queryKey: ['searchBreeds', searchTerm],
    queryFn: () => apis.searchBreeds(searchTerm),
    enabled: !!searchTerm,
  })
}