import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center">
        <p className="text-sm">
          © 2024 Iván Sánchez Sánchez | <a href="https://www.linkedin.com/in/iv%C3%A1n-s%C3%A1nchez-s%C3%A1nchez-a627b3235/" className="text-blue-400 hover:underline">LinkedIn</a> | <a href="https://github.com/iivansaanchez" className="text-gray-400 hover:underline">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
