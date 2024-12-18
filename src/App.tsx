import {Details, Devices, FAQ, Features, Footer, Hero, Intro, Navbar, Partners} from "./components";


function App() {


  return (
    <>
        <Navbar />
        <main>
            <Hero />
            <Intro />
            <Devices />
            <Features />
            <Partners />
            <Details />
            <FAQ   />
        </main>
        <Footer />
    </>
  )
}

export default App
