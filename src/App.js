import { useState } from "react";
import "./App.css";
import ATTitle from "./images/title.png";


const quotes = [

      {
          "id": 0,
          "slug": "finn",
          "displayName": "Finn",
          "fullName": "Finn Mertens",
          "species": "Human",
          "sex": "Male",
          "quote": [
              "Homies help homies. Always."
          ],
          "sprite": "https://i.imgur.com/zLEMgTB.png"
      },
      {
          "id": 1,
          "slug": "jake",
          "displayName": "Jake",
          "fullName": "Jake the Dog",
          "species": "Dog/Shape-shifter Hybrid",
          "sex": "Male",
          "quote": [
              "You're getting all hung up on imaginary problems. You gotta focus on what's real, man!",
          ],
          "sprite": "https://i.imgur.com/oOuaFDI.png"
      },
      {
          "id": 2,
          "slug": "bmo",
          "displayName": "BMO",
          "fullName": "Be More",
          "species": "MO Series Mk. II 110V-60Hz Core-System-Ready Kompy-Compatible model",
          "sex": "N/A",
          "quote": [
              "When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.",
          ],
          "sprite": "https://i.imgur.com/saWFJ90.png"
      },
      {
          "id": 3,
          "slug": "princess-bubblegum",
          "displayName": "Princess Bubblegum",
          "fullName": "Bonnibel Bubblegum",
          "species": "Gum Golem",
          "sex": "Female",
          "quote": [
              "People get built different. We don't need to figure it out, we just need to respect it."
          ],
          "sprite": "https://i.imgur.com/KYiPIt4.png"
      },
      {
          "id": 4,
          "slug": "marceline",
          "displayName": "Marceline",
          "fullName": "Marceline the Vampire Queen",
          "species": "Vampire/Demon Hybrid",
          "sex": "Female",
          "quote": [
              "When I became a vampire, I was just a messed up kid. Now it's a thousand years later, and I'm still messed up!",
          ],
          "sprite": "https://i.imgur.com/L2bWMYR.png"
      },
      {
          "id": 5,
          "slug": "ice-king",
          "displayName": "Ice King",
          "fullName": "Simon Petrikov",
          "species": "Ice Wizard",
          "sex": "Male",
          "quote": [
              "Y'all are just hating on my steez. I'm not listening to haters.",
          ],
          "sprite": "https://i.imgur.com/nCn1nxn.png"
      },
      {
          "id": 6,
          "slug": "lsp",
          "displayName": "LSP",
          "fullName": "Lumpy Space Princess",
          "species": "Lumpy Space Person",
          "sex": "Female",
          "quote": [
              "WHATEVER, IT'S 2009!",
          ],
          "sprite": "https://i.imgur.com/2LNeGHR.png"
      },
      {
          "id": 7,
          "slug": "lady-rainicorn",
          "displayName": "Lady Rainicorn",
          "fullName": "Lady Rainicorn",
          "species": "Rainicorn",
          "sex": "Female",
          "quote": [
              "Oh sweet potato, I love you because you're an idiot. You make me feel like a genius.",
          ],
          "sprite": "https://i.imgur.com/ux9LH2p.png"
      },
      {
          "id" : 8,
          "slug": "flame-princess",
          "displayName": "Flame Princess",
          "fullName": "Phoebe",
          "species": "Flame Person",
          "sex": "Female",
          "quote": [
              "Hold on, bro. Perhaps it is a non-flameish custom unknown to us.",
          ],
          "sprite": "https://i.imgur.com/8DCrCta.png"
      }
  
]

export default function App() {
  const [index, setIndex] = useState();
  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  };
  return (
    <div className="App">
      <img className="title" src ={ATTitle} />
      <h1 className="heading">QUOTE MACHINE</h1>

      <button className="generate" onClick={generate}>GENERATE QUOTE</button>
      <div className="quotediv">
      <div className="quote">{quotes[index] && quotes[index].quote}</div>
      <div className="quotee"><img src ={quotes[index] && quotes[index].sprite} /></div>
      <div className="quotee">{quotes[index] && quotes[index].displayName}</div>
      </div>
    </div>
  );
}