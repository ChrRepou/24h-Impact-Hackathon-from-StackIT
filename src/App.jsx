// import Header from './components/Header/Header.jsx';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import FoodCard from './components/FoodCard/FoodCard';
import pic1 from'./assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import pic6 from './assets/pic6.jpg';
import Footer from './components/Footbar/Footbar';


function App() {

  let oneDayData = {
    "tag": "Dienstag",
    "datum": "24.10.2023",
    "linie": [
        {
            "ausgabe": "Dessert",
            "gericht": [
                {
                    "text": "Marzipan-Mousse mit Bratapfel",
                    "text_en": "Marzipan mousse with baked apple",
                    "studi": "0.75",
                    "bed": "1.15",
                    "gast": "1.90",
                    "prodart": "37"
                }
            ],
            "id": 0
        },
        {
            "ausgabe": "Dessert vegan",
            "gericht": [
                {
                    "text": "Kirsch-Zwieback-Trifle",
                    "text_en": "Cherry rusk trifle",
                    "studi": "0.75",
                    "bed": "1.15",
                    "gast": "1.90",
                    "prodart": "37"
                }
            ],
            "id": 1
        },
        {
            "ausgabe": "Suppentopf",
            "gericht": [
                {
                    "text": "Vegane Spinatcremesuppe mit Mandelmilch",
                    "text_en": "Vegan spinach cream soup with almond milk",
                    "studi": "0.55",
                    "bed": "0.85",
                    "gast": "1.40",
                    "prodart": "31"
                }
            ],
            "id": 2
        },
        {
            "ausgabe": "Tierisch",
            "gericht": [
                {
                    "text": "Putengyros mit geschmorten Zwiebeln, Djuvecreis und Joghurt-Knoblauchdip",
                    "text_en": "poultry gyros with braised onions, Djuvec rice and yogurt-garlic dip",
                    "studi": "0.92",
                    "bed": "1.20",
                    "gast": "1.94",
                    "prodart": "230"
                }
            ],
            "id": 3
        },
        {
            "ausgabe": "Vegan",
            "gericht": [
                {
                    "text": "Ragout vom Kürbis und Broccoli in veganem Rahm mit Langkornreis, dazu Stückobst",
                    "text_en": "Pumpkin and broccoli ragout in vegan cream with long grain rice, served with pieces of fruit",
                    "studi": "2.90",
                    "bed": "4.35",
                    "gast": "7.25",
                    "prodart": "186"
                }
            ],
            "id": 4
        },
        {
            "ausgabe": "Vegetarisch",
            "gericht": [
                {
                    "text": "Gemüseknödel in Gorgonzolarahm, karamelisierten Selleriewürfeln und Erbsen",
                    "text_en": "Vegetable dumplings in Gorgonzola cream, caramelized celery cubes and peas",
                    "studi": "0.92",
                    "bed": "1.20",
                    "gast": "1.94",
                    "prodart": "230"
                }
            ],
            "id": 5
        }
    ]
};

let foodPics = [pic1, pic2, pic3, pic4, pic5, pic6];


  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch('./onedaydata.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const cardComponents = [];

  oneDayData.linie.forEach((card) => {
    cardComponents.push(
      <FoodCard imageUrl={foodPics[card.id]}
                title={card.gericht[0].text_en}
                description={card.gericht[0].text}
                type={card.ausgabe}
                studentPrice={card.gericht[0].studi}
                employeePrice={card.gericht[0].bed}
                guestPrice={card.gericht[0].gast}
     />
    );
  });

  return (
    <div>
      <Navbar />
      <main>
      <h1 className='text-center'>
            Food of the Day {'('}<strong>{oneDayData.datum}</strong>{')'}
      </h1>
      {/* <FoodCard imageUrl={foodImg}
                title={oneDayData.linie[0].gericht[0].text_en}
                description={oneDayData.linie[0].gericht[0].text}
                type={oneDayData.linie[0].ausgabe}
                /> */}
      {cardComponents}
      </main>
      <Footer />
    </div>
  );
}

export default App;
