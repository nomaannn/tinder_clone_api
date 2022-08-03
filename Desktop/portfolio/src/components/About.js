import React from "react";

function About() {
  return (
    <div  name="About" className="text-white bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-700">About Me</p>
        </div>
        <p className="text-xl mt-20">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
         
        </p>
        <br/>
        <p className="text-xl ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
        
        </p>
      </div>
    </div>
  );
}

export default About;
