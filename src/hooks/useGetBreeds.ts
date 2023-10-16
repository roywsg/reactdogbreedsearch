import {useQuery} from "@tanstack/react-query";
import * as apis from '../apis/apis.ts'

type useGetBreedsProps = {
  limit: number;
  page: number;
}

export default function useGetBreeds({limit, page}: useGetBreedsProps) {
  return useQuery({
    queryKey: ['getBreeds', limit, page],
    queryFn: () => apis.getBreeds(limit, page),
    enabled: limit > 0,
  })
}