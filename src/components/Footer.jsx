const Footer = () => {
  return (
    <footer className="w-full text-center py-6 bg-black border-t border-neutral-800">
      <p className="text-sm bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
        © {new Date().getFullYear()} TejaRaju Eeta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;