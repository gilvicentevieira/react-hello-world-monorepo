
// Summary - Fetchs once, filters afterwards

// create type for hero
// fetch data from api, just once at the beginning
// store the data in a allHeroes state
// and have another state for list rendering given a search - heroesList state
// have search state
// present list
// 'https://jsonplaceholder.typicode.com/posts'

import { useEffect, useState } from "react"

interface Hero {
  "id": number;
  "name": string;
}

const url = 'https://akabab.github.io/superhero-api/api/all.json'

const FetchOnce = () => {

  const [allHeroes, setAllHeroes] = useState<Hero[]>([])
  const [heroesList, setHeroesList] = useState<Hero[]>([])
  const [search, setSearch] = useState<string>('')
  const loading = allHeroes.length === 0

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        const castedHeroes = data.map((obj: any) => ({ id: obj.id, name: obj.name.toLowerCase() }))
        setAllHeroes(castedHeroes)
        setHeroesList(castedHeroes)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }

  // debouncing allHeroes filtering
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      console.log("filtering")
      const filteredHeroes = allHeroes.filter((hero) => hero.name.includes(search))
      setHeroesList(filteredHeroes)
    }, 300)

    return () => clearTimeout(timeoutId)

  }, [search, allHeroes])

  return (
    <section className="px-[10vw] py-16 flex flex-col justify-center items-center">
      <p className="text-primary text-6xl">Hello World.</p>
      <div className="mt-16 flex flex-col items-center">
        <input placeholder="Hero" value={search} onChange={handleSearch} className="outline-none border-primary border-2 rounded-sm h-10 w-[15vw] px-2" />
        <div>
          {loading && 'Loading... '}
          {!loading && search.length !== 0 && heroesList.length === 0 && 'No heroes found'}
          {heroesList.map((superhero, i) => {
            return (
              <div className="w-[20vw] bg-gray-200 lg:rounded-lg flex flex-col items-center py-3 my-8" key={superhero.id}>
                <p>{superhero.name}</p>
              </div>
            )
          })
          }
        </div>
      </div>
    </section>
  )
}

export default FetchOnce