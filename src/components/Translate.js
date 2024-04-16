import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translate = () => {
  const apiKey = process.env.REACT_APP_API_KEY;  
  const [eText, setEText] = useState("Hi, I'm gonna test google translate. I hope this works.");
  const [kText, setKText] = useState('');

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await axios.post(
          `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
          {
            q: eText,
            source: 'en', // 번역할 텍스트의 언어 설정 (영어)
            target: 'ko' // 번역될 언어 설정 (한국어)
          }
        );

        const translatedText = response.data.data.translations[0].translatedText;
        setKText(translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };

    translateText();
  }, [eText, apiKey]);

  return (
    <div>
      <div>원문: {eText}</div>
      <div>번역문: {kText}</div>
    </div>
  );
};

export default Translate;
