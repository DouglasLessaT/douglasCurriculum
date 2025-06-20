import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define o prefixo base com base no ambiente
  const baseRoute = process.env.NODE_ENV === "production" ? "/douglasCurriculum" : "";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-resume-dark/90 backdrop-blur-sm border-b border-resume-cyan/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href={`${baseRoute}/#`} className="flex items-center">
          <div className="text-2xl font-bold text-white">
            <img src={Logo} className="h-9 w-auto" alt="Logo" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href={`${baseRoute}/#about`} className="text-white hover:text-resume-cyan transition-colors">Sobre</a>
          <a href={`${baseRoute}/#skills`} className="text-white hover:text-resume-cyan transition-colors">Habilidades</a>
          <a href={`${baseRoute}/#experience`} className="text-white hover:text-resume-cyan transition-colors">Experiência</a>
          <a href={`${baseRoute}/#education`} className="text-white hover:text-resume-cyan transition-colors">Formação</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-resume-gray border-b border-resume-cyan/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href={`${baseRoute}/#about`} className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href={`${baseRoute}/#skills`} className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Habilidades</a>
            <a href={`${baseRoute}/#experience`} className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Experiência</a>
            <a href={`${baseRoute}/#education`} className="text-white hover:text-resume-cyan transition-colors" onClick={toggleMenu}>Formação</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;