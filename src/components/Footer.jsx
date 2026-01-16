import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center">
      <p className="text-slate-500">
        © {new Date().getFullYear()} DevPortfolio. Made By Developer.
      </p>
    </footer>
  );
};

export default Footer;
