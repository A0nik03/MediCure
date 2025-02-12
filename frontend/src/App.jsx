import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Medication from "./pages/Medication";
import { PriorityEmergencyHandling, RareInjectionAssistance, SecurePrescriptionUpload, VerifiedSuppliers } from "./pages/Additionals";
import NavEmergencyRequest from "./pages/NavEmergencyRequest";
import RequestRareInjection from "./pages/RequestRareInjection";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/verified-suppliers" element={<VerifiedSuppliers />} />
        <Route path="/upload-prescription" element={<SecurePrescriptionUpload />} />
        <Route path="/emergency-requests" element={<PriorityEmergencyHandling />} />
        <Route path="/rare-injections" element={<RareInjectionAssistance />} />
        <Route path="/new-emergency-request" element={<NavEmergencyRequest/>} />
        <Route path="/request-rare-injection" element={<RequestRareInjection/>} />
      </Routes>
    </div>
  );
};

export default App;
