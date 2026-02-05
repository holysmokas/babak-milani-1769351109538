function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="./logo.png" 
              alt="Babak Milani Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
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
            <a href="#hero" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
              Babak Milani
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Contact</a>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;