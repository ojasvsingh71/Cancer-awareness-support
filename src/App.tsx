import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Quotes />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
