import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { PromoBlock } from './components/PromoBlock';
import { Cases } from './components/Cases';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <PromoBlock />
        <Cases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}