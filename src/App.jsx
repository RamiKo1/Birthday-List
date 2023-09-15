import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)

  // //!1
  // const clearList = () => {
  //   setPeople([])
  // }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear List
        </button>
      </section>
    </main>
  )
}
export default App
