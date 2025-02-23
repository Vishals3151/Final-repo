import React from 'react';
import './Projects.css'; // Importing a new CSS file for additional styles

function Projects({ item }) { // Destructure the item prop
  return (
    <>
    <div className="card bg-gradient-to-r from-blue-500 to-purple-500 w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover: bg-blue-400 duration:300">
        <figure className="pt-6"> {/* Added top padding for better spacing */}
          <img
            src="Profile.jpg"
            alt="Shoes" className="rounded-full w-48 h-48 object-cover ring-2 ring-gray-200 shadow-lg" /> {/* Made photo circular with ring and shadow */}
        </figure>
        <div className="card-body p-6 space-y-4"> {/* Added space between elements */}
          <h2 className="card-title text-xl font-bold text-white">
           {item.name}
            <div className="badge badge-secondary">Latest</div>
          </h2>
          <p className="text-black">{item.pd}</p> {/* Changed paragraph text color to black */}
          <div className="card-actions justify-evenly mt-4">
            <div className="badge badge-outline py-4 px-6 bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-300 ease-in-out border-2 border-gray-600"><a href="https://www.linkedin.com/in/amey-vyas-498437296">Connect on LinkedIn</a></div> {/* Enhanced button styling */}
            <div className="badge badge-outline py-4 px-6 bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-300 ease-in-out border-2 border-gray-600"><a href="https://ameyvyas04-stockmarketprediction-app-o0dc3s.streamlit.app/">Open</a></div> {/* Enhanced button styling */}
            
            <div className="rating gap-1">
              <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
              <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;