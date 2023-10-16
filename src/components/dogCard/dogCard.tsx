import Spinner from "@/components/spinner.tsx";
import MyCard from '@/components/myCard.tsx'
import {AppContext} from "@/context/appcontext.ts";
import {Dogs, Dog} from "@/lib/types.ts"
import useGetImage from "@/hooks/useGetImage.ts"
import {useContext} from "react";
import {sortBy} from "@/lib/utils.ts";

type DogProps = {
  dog: Dog
}

function DogContent({dog}: DogProps) {
  const {name, height, life_span, reference_image_id} = dog

  const {isFetching, data: image, isError} = useGetImage({imageId: reference_image_id})

  return <MyCard title={name}>
    {isFetching
      ? <Spinner/>
      : image && <img src={image.url} alt="" loading={'lazy'} className={'max-w-full my-2 rounded-lg'}/>
    }

    {(!isFetching && isError) && <p>Error loading image...</p>}

    <p>Height: {height.metric}</p>
    <p>Lifespan: {life_span}</p>
  </MyCard>
}


export default function DogCard({dogs}: Dogs) {
  const appContext = useContext(AppContext)

  if (!dogs) return null

  if (appContext.appContext.sort) {
    dogs.sort((a: Dog, b: Dog) => sortBy(a, b, appContext.appContext.sort, appContext.appContext.order))
  }

  return dogs.map(x => <DogContent key={x.id} dog={x}/>)
}