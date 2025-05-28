import {Hero} from "./components/hero"
import { CardsContainer } from "./components/cards-container"
function App() {
  return (
    <main className="font-Poppins flex justify-center text-Grey-500" >
      <section className="w-[296px] my-[80px]" >
        <Hero/>
      <CardsContainer/>
      </section>
      
    </main>
  )
}

export default App
