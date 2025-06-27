import './App.css';
import { Header } from './Components/Header';
import HomePage from './Pages/HomePage';
import PropertyPage from './Pages/PropertyPage';
import PlotDetailsPage from './Pages/PlotDetails';
import LocationSection from './Pages/LocationPage';
import StandardsPage from './Pages/StandardsPage';
import LifestylePage from './Pages/Lifestyle';
import Footer from './Components/Footer';
import EnquiryModal from './Components/EnquiryModal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("modal clicked")
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Test block to verify Tailwind */}
      <Header />
      <HomePage openModal={openModal}/>
      <PropertyPage openModal={openModal}/>
      <PlotDetailsPage openModal={openModal}/>
      <LocationSection/>
      <StandardsPage/>
      <LifestylePage/>
      <Footer openModal={openModal}/>

      {/* Modal */}
      <EnquiryModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default App;
