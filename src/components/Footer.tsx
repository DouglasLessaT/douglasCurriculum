
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-resume-gray border-t border-resume-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Douglas Lessat. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/DouglasLessaT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-resume-cyan transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/douglaslessat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-resume-cyan transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
