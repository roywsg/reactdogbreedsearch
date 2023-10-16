import {ModeToggle} from "@/components/mode-toggle.tsx";
import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import useGetBreeds from "@/hooks/useGetBreeds.ts";
import useMyDebounce from "@/hooks/useMyDebounce.ts";
import useSearchBreeds from "@/hooks/useSearchBreeds.ts";
import {useEffect, useState} from "react";
import {usePrevious} from "react-use";
import {Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card.tsx";
import DogCard from "@/components/dogCard/dogCard.tsx";
import {AppContext, AppContextType} from "@/context/appcontext.ts";
import Sort from '@/components/sort/sort.tsx';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [limit, setLimit] = useState({limit: 0, page: 0})
  const [dogs, setDogs] = useState([])
  const [inputType, setInputType] = useState("")
  const [appContext, setAppContext] = useState<AppContextType>({
    sort: 'name',
    order: 'asc',
  })

  const debouncedSearchTerm = useMyDebounce<string>(searchTerm, 1000)

  let {isFetching: searchIsFetching, data: searchDogs} = useSearchBreeds({searchTerm: debouncedSearchTerm});
  let {isFetching: defaultIsFetching, data: defaultDogs} = useGetBreeds(limit);

  const prevSearchIsFetching = usePrevious(searchIsFetching)
  const prevDefaultIsFetching = usePrevious(defaultIsFetching)
  const prevInputType = usePrevious(inputType)

  useEffect(() => {
    if (inputType === 'search') {
      if (prevSearchIsFetching !== searchIsFetching || prevInputType !== inputType) setDogs(searchDogs)
    }

    if (inputType === 'default') {
      if (prevDefaultIsFetching !== defaultIsFetching || prevInputType !== inputType) setDogs(defaultDogs)
    }
  }, [searchIsFetching, defaultIsFetching, inputType]);

  function handleOnSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
    setInputType("search")
  }

  function handleFirst100() {
    setSearchTerm('')
    setInputType("default")
    setLimit({limit: 100, page: 0})
  }

  function handleNext100() {
    setSearchTerm('')
    setInputType("default")
    setLimit({limit: 100, page: 1})
  }

  const nothingToShow = dogs?.length < 1 && (!searchIsFetching || !defaultIsFetching)

  return (
    <AppContext.Provider value={{appContext, setAppContext}}>
      <main className={'border-0 border-amber-0 text-left'}>
        <header className={'flex justify-between items-center px-4'}>
          <h1 className={'text-5xl my-8'}>Dog Breed Search</h1>
          <ModeToggle/>
        </header>

        <section className={'search'}>
          <Card className={'border-2 border-slate-200 p-4'}>
            <CardHeader>
              <CardTitle>Search</CardTitle>
              <CardDescription>examples: corgi, german shepherd, golden retriever, beagle, poodle</CardDescription>
            </CardHeader>
            <CardContent>
              <Input data-testsearch={'search'} type="search" value={searchTerm} onChange={handleOnSearchTerm}
                placeholder={'Search for a breed...'}/>
              <p className={'p-2'}>{(searchIsFetching || defaultIsFetching) ? 'Loading...' : 'Waiting for input...'}</p>

              <div className="mt-2 p-2">
                <h3 className={'text-lg font-bold'}>Alternatively, load 100 dogs</h3>
                <div className={' flex gap-2'}>
                  <Button onClick={handleFirst100}>0 - 100</Button>
                  <Button onClick={handleNext100}>200 - 300</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className={'result'}>
          <Card className={'mt-5 border-2 border-slate-200 p-4'}>
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              {dogs?.length > 0 && <Sort/>}

              <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}>
                {dogs?.length > 0 && <DogCard dogs={dogs}/>}
                {(searchIsFetching || defaultIsFetching) && <p>Fetching dogs...</p>}
                {nothingToShow && <p>Nothing to show here</p>}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </AppContext.Provider>
  )
}

export default App
