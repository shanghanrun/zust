import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultiTranslate = () => {
  const apiKey = process.env.REACT_APP_API_KEY; 
  const [eTextList, setETextList] = useState(['hi','name', 'school']);
  const [kTextList, setKTextList] = useState([]);

  useEffect(() => {
    const translateTexts = async () => {
      const translatedList = [];
      for (const text of eTextList) {
        try {
          const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
            {
              q: text,
              source: 'en', // 번역할 텍스트의 언어 설정 (영어)
              target: 'ko' // 번역될 언어 설정 (한국어)
            }
          );
          translatedList.push(response.data.data.translations[0].translatedText);
        } catch (error) {
          console.error('Error translating text:', error);
        }
      }
      setKTextList(translatedList);
    };

    translateTexts();
  }, [eTextList, apiKey]);

  return (
    <div>
      <div>영어 리스트: {eTextList.join(', ')}</div>
      <div>번역된 한글 리스트: {kTextList.join(', ')}</div>
    </div>
  );
};


export default MultiTranslate;