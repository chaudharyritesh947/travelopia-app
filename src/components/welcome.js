import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../App.css';

const Welcome = (props) => {
  

  return ( 
   
        <div className="m-0 p-4 opacity-shadow welcome welcome-shadow">
          <h2 className="card-title text-center mb-4">Travelopia 2.0: Unleash Your Wanderlust!</h2>
          <p>
          Travelopia 2.0: Unleash Your Wanderlust" is an innovative travel platform designed to take your travel experiences to new heights. With a revamped user interface and enhanced features, Travelopia 2.0 aims to cater to all your travel needs in one place.

Discover a world of possibilities with our curated travel destinations, ranging from exotic getaways to breathtaking natural wonders. Plan your dream vacation effortlessly with intuitive search and filtering options. Whether you seek relaxation on pristine beaches, thrilling adventures in the wilderness, or cultural immersion in historic cities, Travelopia 2.0 has the perfect destination for you.

Our user-friendly booking system ensures a seamless experience, allowing you to secure flights, accommodations, and tours with just a few clicks. Connect with local experts and seasoned travelers through our community forums, where you can exchange valuable tips and stories.

Stay updated with the latest travel trends, exclusive deals, and personalized recommendations tailored to your preferences. Travelopia 2.0 is not just a travel platform; it's your gateway to an unforgettable journey of exploration, self-discovery, and cherished memories.

Embark on a new chapter of travel with Travelopia 2.0 and unlock the world's wonders with ease and excitement. Let your wanderlust roam free and create unforgettable memories with every adventure. Welcome to Travelopia 2.0, where extraordinary journeys begin.
          </p>
        </div>
     
);
};

export default Welcome;
