import "./styles.css";
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import MapCard from "./components/MapCard.js"
export default function App() {
  return (
    <div className="App">
     <Navbar />
     <h1 className="App">Lorem some text</h1>
     <div className="splitdiv">
        <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
        <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
     </div>
     <div >
        <Card />
   
     </div>
     <div className="splitdiv fdcolmn">
        <span>Improve the lives of millions. Change yours forever </span>
        <p className="width50">More than 2100 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</p>
     </div>
    <MapCard />

    </div>
  );
}
