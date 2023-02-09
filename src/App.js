import ExampleCarousel from './components/exampleCarousel/example-slider.component';
import FeedbackSection from './components/FeedBackSection/feedbackSection.component';
import Footer from './components/Footer/footer.component';
import Banner from './components/FunctionalBanner/banner.component';
import Hub from './components/Hub/hub.component'

function App() {
  return (
    <main>
      <Hub />
      <Banner />
      <ExampleCarousel />
      <FeedbackSection />
      <Footer />
    </main>
  );
}

export default App;
