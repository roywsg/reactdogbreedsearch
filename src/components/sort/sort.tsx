import {Button} from "@/components/ui/button.tsx";
import {AppContext} from "@/context/appcontext.ts";
import {useContext} from "react";
import {Constants} from '@/common/constants.ts'

export default function Sort() {
  const appContext = useContext(AppContext)

  function handleOnSort(value: any) {
    const order = appContext.appContext.order === 'asc' ? 'desc' : 'asc'
    
    appContext.setAppContext({...appContext.appContext, sort: value, order})
  }

  return (
    <section>
      <h3>Sort By:</h3>
      <div className="flex gap-2">
        <Button className={'active:ring-4 focus:ring-4'}
          onClick={() => handleOnSort(Constants.sortBy.name)}>Name</Button>
        <Button className={'active:ring-4 focus:ring-4'}
          onClick={() => handleOnSort(Constants.sortBy.height)}>Height</Button>
        <Button className={'active:ring-4 focus:ring-4'} onClick={() => handleOnSort(Constants.sortBy.lifespan)}>Life
          Span</Button>
      </div>
    </section>
  );
}