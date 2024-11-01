// pages/about.js
import React from 'react';

const teamMembers = [
  {
    name: "Haseeb",
    role: "CEO",
    image: "https://media.istockphoto.com/id/1185229534/photo/business-man-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=SpinpYurrMWT3QMGY7KFlcfejLmgdsG9kzoEJdK_m1E=",
  },
  {
    name: "Anas",
    role: "Invester",
    image: "https://media.istockphoto.com/id/1209719307/photo/business-handshake.jpg?s=1024x1024&w=is&k=20&c=LKgO8oYlW6NiqlWL3cjwxZ7r_kISxP9HO8Hwz6y_CW4=",
  },
  {
    name: "Subhan",
    role: "Partner",
    image: "https://media.istockphoto.com/id/639334442/photo/glad-to-have-you-on-board.jpg?s=1024x1024&w=is&k=20&c=3s3hoAViYJeAl2isEW-wRGS_JNtLGA5mj8K0JTawbD8=",
  },
];

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">About Us</h1>
        <p className="text-gray-100 mb-4">
          Welcome to our website! We are dedicated to providing the best services to our customers.
          Our mission is to deliver high-quality solutions tailored to your needs.
        </p>

        {/* Team Section */}
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center  p-4 rounded-lg">
              <img src={member.image} alt={member.name} className="h-24 w-24 object-cover rounded-full mb-2" />
              <h3 className="text-lg text-white font-semibold">{member.name}</h3>
              <p className="text-gray-100">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <h2 className="text-2xl font-semibold text-gray-100 mt-8 mb-2">Our Mission</h2>
        <p className="text-gray-100 mb-4">
          Our mission is to empower individuals and businesses with innovative solutions that enhance productivity and efficiency.
        </p>
        <h2 className="text-2xl font-semibold text-gray-100 mb-2">Our Vision</h2>
        <p className="text-gray-100 mb-4">
          We envision a world where technology and creativity work hand-in-hand to bring about transformative changes.
        </p>
        <h2 className="text-2xl font-semibold text-gray-100 mb-2">Get In Touch</h2>
        <p className="text-gray-100">
          If you have any questions or would like to learn more about our services, feel free to <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default about;
