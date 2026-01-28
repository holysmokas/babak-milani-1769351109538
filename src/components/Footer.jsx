function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="./logo.png" 
                alt="Babak Milani Logo" 
                className="h-8 w-auto object-contain" 
                onError={(e) => {
                  if (e.target.src.includes('.png')) {
                    e.target.src = './logo.jpg';
                  } else if (e.target.src.includes('.jpg')) {
                    e.target.src = './logo.svg';
                  } else {
                    e.target.style.display = 'none';
                  }
                }}
              />
              <h3 className="text-xl font-bold">Babak Milani</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional excellence and innovative solutions tailored to your needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>contact@holysmokas.com</p>
              <p>(415) 691 - 7085</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="terms-of-service.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="cookies.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Cookie Policy
            </a>
            <a href="disclaimer.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Disclaimer
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2026 Babak Milani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;