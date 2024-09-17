
// Summary - Fetchs per search, and sets state

// initially show none
// search and display results

// heroes state
// search state
// useEffect to fetch as the user writes - debounce fetch call
// set heroes
// clean timeout

// card classes: w-[20vw] bg-gray-200 lg:rounded-lg flex flex-col items-center py-3 my-8

import { useEffect, useRef, useState } from "react"

interface Hero {
  "id": number;
  "name": string;
}

const baseUrl = 'https://www.superheroapi.com/api.php/'
const accessToken = '3ca222f139848a563e4c7cd5fca20b3b'

const FetchPerSearch = () => {

  const [heroes, setHeroes] = useState<Hero[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)
    handleRequest(value)
  }

  const handleRequest = (value: string) => {
    setHeroes([])
    setLoading(true)

    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(async () => {
      try {
        setLoading(true)
        const res = await fetch(baseUrl + accessToken + '/search/' + value)
        const data = await res.json()

        if (data.results) {
          const mappedHeroes = data.results.map((item: any) => ({ id: item.id, name: item.name }))
          setHeroes(mappedHeroes)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }, 300)

  }

  return (
    <section className="px-[10vw] py-16 flex flex-col justify-center items-center">
      <div className="mt-16 flex flex-col items-center gap-8">
        <input placeholder="Hero" value={search} onChange={handleSearch} className="outline-none border-primary border-2 rounded-sm h-10 w-[15vw] px-2" />
        <div>
          {!loading && search.length === 0 && <p>Search for heroes</p>}
          {loading && <p>Loading...</p>}
          {!loading && search.length > 0 && heroes.length === 0 && <p>No heroes found. Search again</p>}
          {heroes.map((hero) => {
            return (
              <div key={hero.id} className="w-[20vw] bg-gray-200 lg:rounded-lg flex flex-col items-center py-3 my-8">
                <p>{hero.name}</p>
              </div>
            )
          })
          }
        </div>
      </div>
    </section>
  )
}

export default FetchPerSearch