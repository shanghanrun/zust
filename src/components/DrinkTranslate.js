import React, { useState, useEffect } from 'react';
import axios from 'axios';

const drinks = [
  {
    "idDrink": "11007",
    "strDrink": "Margarita",
    "strGlass": "Cocktail glass",
    "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "strIngredient1": "Tequila",
    "strIngredient2": "Triple sec",
    "strIngredient3": "Lime juice",
    "strIngredient4": "Salt",
  },
  {
    "idDrink": "11118",
    "strDrink": "Blue Margarita",
    "strGlass": "Cocktail glass",
    "strInstructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
    "strIngredient1": "Tequila",
    "strIngredient2": "Triple sec",
    "strIngredient3": "Lime juice",
    "strIngredient4": "Salt",
  }
];

const DrinkTranslate = () => {
  const apiKey = 'AIzaSyCAML_uTKhZsBwPYCPnU4j-pwd98ykZ13E';
  const [translatedDrinks, setTranslatedDrinks] = useState([]);

  async function translateDrinks(){
      try {
        const translatedList = [];
        for (const drink of drinks) {
          const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
            {
              q: [drink.strDrink, drink.strInstructions].join('; '), // 음료 이름과 지시사항을 문장으로 결합
              source: 'en', // 영어로 번역
              target: 'ko' // 한국어로 번역
            }
          );
          const translatedText = response.data.data.translations[0].translatedText;
          const [strDrink, strInstructions] = translatedText.split('; '); // 문장을 다시 음료 이름과 지시사항으로 분할
          translatedList.push({ ...drink, strDrink, strInstructions }); // 번역된 음료 정보 추가
        }
		console.log('변역된 데이터', translatedDrinks)
        setTranslatedDrinks(translatedList);
      } catch (error) {
        console.error('Error translating drinks:', error);
      }
    };

  useEffect(() => {
    translateDrinks();
  }, []);

  return (
    <div style={{border: '2px solid blue', width:'300px', margin: '10px'}}>
      {translatedDrinks.map((drink) => (
        <div key={drink.idDrink} style={{margin:'10px 0'}}>
          <div>ID: {drink.idDrink}</div>
          <div>음료 이름: {drink.strDrink}</div>
          <div>유리 종류: {drink.strGlass}</div>
          <div>지시사항: {drink.strInstructions}</div>
          <div>재료1: {drink.strIngredient1}</div>
          <div>재료2: {drink.strIngredient2}</div>
          <div>재료3: {drink.strIngredient3}</div>
          <div>재료4: {drink.strIngredient4}</div>
        </div>
      ))}
    </div>
  );
};

export default DrinkTranslate;
