import {useQuery} from "@tanstack/react-query";
import * as apis from '../apis/apis.ts'

type useGetImageProps = {
  imageId: string;
}

export default function useGetBreeds({imageId}: useGetImageProps) {
  return useQuery({
    queryKey: ['getImage', imageId],
    queryFn: () => apis.getImage(imageId),
    enabled: !!imageId,
  })
}
