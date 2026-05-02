import Hero from './pages/hero/Hero';
import About from './pages/about/About';
import GlobalStyles from './styles/GlobalStyles';
import Background from './components/background/Background';

function App() {
  return (
    <>
      <Background>
        <Hero />
        <About />
        <GlobalStyles />
      </Background>
    </>
  );
}
export default App;
