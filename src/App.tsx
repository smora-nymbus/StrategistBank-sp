import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashPage, ThankYouPage, LogoDownloadPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/assets/logo" element={<LogoDownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
