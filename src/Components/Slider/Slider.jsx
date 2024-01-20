import React, { useEffect, useState } from 'react';
import axios from "axios"
const parseHTML = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body;
};

const extractData = (body) => {
    const containerElement = body.querySelector('.elementor-44');
  
    if (!containerElement) {
      console.error('Container element not found');
      return null;
    }
  
    const imageElement = containerElement.querySelector('.elementor-widget-image img');
    const headingElement = containerElement.querySelector('.elementor-element-875eae7 h1');
    const paragraphElement = containerElement.querySelector('.elementor-element-a6107fe .para p');
  
    const imageSrc = imageElement ? imageElement.getAttribute('src') : null;
    const heading = headingElement ? headingElement.innerText : null;
    const paragraph = paragraphElement ? paragraphElement.innerText : null;
  
    return { imageSrc, heading, paragraph };
  };
  

  const Slider = () => {
    const [data, setData] = useState(null);
  
    const getSlider = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/pages/44');
        const body = new DOMParser().parseFromString(response.data.content.rendered, 'text/html');
        const extractedData = extractData(body);
  
        if (extractedData) {
          setData(extractedData);
        } else {
          console.error('Failed to extract data');
        }
      } catch (error) {
        console.error('API request failed:', error.message);
      }
    };
  
    useEffect(() => {
      getSlider();
    }, []);
  
    if (!data) {
      return <p>Loading...</p>;
    }
  
    // Render your data here using {data.imageSrc}, {data.heading}, {data.paragraph}
  
    return (
      <div>
        <img src={data.imageSrc} alt="Slider" style={{marginLeft:"90px"}}/>
        <h1>{data.heading}</h1>
        <p>{data.paragraph}</p>
      </div>
    );
  };
  
  export default Slider;
  
