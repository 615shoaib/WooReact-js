import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const Slider = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/pages');
        setPages(response.data);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, []);

  return (
    <section>
    <Carousel>
      {/* {pages.map((page) => (
        <Carousel.Item key={page.id}>
          <div
            className="n2-section-smartslider fitvidsignore n2_clear"
            data-ssid="3"
            tabIndex="0"
            role="region"
            aria-label="Slider"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </Carousel.Item>
      ))} */}
    </Carousel>
    </section>
  );
};

export default Slider;
