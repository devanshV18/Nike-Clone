import {Hero, CustomerReviews,SuperQuality, sub, SplOffer,PopularProducts,Footer, Services } from './sections';
import Nav from './Components/Nav';


const App = () => (
  <main className = 'relative'>
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/> 
    </section>

    <section className = "padding">
      <PopularProducts/> PopularProducts
    </section>

    <section className = "padding">
      <SuperQuality/> SuperQuality
    </section>

    <section className = "padding-x py-10">
      <Services/> Services
    </section>

    <section className = "padding">
      <SplOffer/> SplOffer
    </section>

    <section className = "padding bg-pale-blue">
      <CustomerReviews/> CustomerReviews
    </section>

    <section className = "padding-x sm:py-32 py-16 w-full">
     <sub/> sub
    </section>

    <section className = "bg-black padding-x padding-t pb-8">
      <Footer/> Footer
    </section>
  </main>
);

export default App