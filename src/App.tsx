
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AlgorithmicCure from "./pages/articles/AlgorithmicCure";
import RemoteSurgery from "./pages/articles/RemoteSurgery";
import WearableBiosensors from "./pages/articles/WearableBiosensors";
import MentalHealthNLP from "./pages/articles/MentalHealthNLP";
import SmartProsthetics from "./pages/articles/SmartProsthetics";
import OutbreakPrediction from "./pages/articles/OutbreakPrediction";
import AISurgery from "./pages/articles/AISurgery";
import AlzheimersAI from "./pages/articles/AlzheimersAI";
import CardiovascularAI from "./pages/articles/CardiovascularAI";
import CancerDetectionAI from "./pages/articles/CancerDetectionAI";
import MentalHealthAI from "./pages/articles/MentalHealthAI";
import HeartAttackPrediction from "./pages/articles/HeartAttackPrediction";
import CSRedefiningMedicine from "./pages/articles/CSRedefiningMedicine";

const queryClient = new QueryClient();

const App = () => (
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/algorithmic-cure" element={<AlgorithmicCure />} />
              <Route path="/articles/remote-surgery" element={<RemoteSurgery />} />
              <Route path="/articles/wearable-biosensors" element={<WearableBiosensors />} />
              <Route path="/articles/mental-health-nlp" element={<MentalHealthNLP />} />
              <Route path="/articles/smart-prosthetics" element={<SmartProsthetics />} />
              <Route path="/articles/outbreak-prediction" element={<OutbreakPrediction />} />
              <Route path="/articles/ai-surgery" element={<AISurgery />} />
              <Route path="/articles/alzheimers-ai" element={<AlzheimersAI />} />
              <Route path="/articles/cardiovascular-ai" element={<CardiovascularAI />} />
              <Route path="/articles/cancer-detection-ai" element={<CancerDetectionAI />} />
              <Route path="/articles/mental-health-ai" element={<MentalHealthAI />} />
              <Route path="/articles/heart-attack-prediction" element={<HeartAttackPrediction />} />
              <Route path="/articles/cs-redefining-medicine" element={<CSRedefiningMedicine />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </AppProvider>
);

export default App;
