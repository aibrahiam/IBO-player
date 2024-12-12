import {Devices, FAQ, Features, Footer, Hero, Intro, Navbar} from "./components";


function App() {


  return (
    <>
        <Navbar />
        <main>
            <Hero />
            <Intro />
            <Devices />
            <Features />
            <FAQ   />
        </main>
        <Footer />
    </>
  )
}

export default App
