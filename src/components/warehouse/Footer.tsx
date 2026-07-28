import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-[12px] py-[16px] border-t border-[#E0E0E0] mt-[20px] text-[12px]">
      {/* Left: Copyright & Legal Links */}
      <div className="flex flex-col sm:flex-row items-center gap-[8px] sm:gap-[16px] text-center sm:text-left">
        <span className="font-semibold text-[#333333]">
          Copyright © 2025 Peterdraw
        </span>
        <span className="hidden sm:inline text-[#E0E0E0]">|</span>
        <div className="flex items-center gap-[12px] text-[#757575]">
          <a href="#" className="hover:text-[#333333] transition-colors">
            Privacy Policy
          </a>
          <span>·</span>
          <a href="#" className="hover:text-[#333333] transition-colors">
            Term and conditions
          </a>
          <span>·</span>
          <a href="#" className="hover:text-[#333333] transition-colors">
            Contact
          </a>
        </div>
      </div>

      {/* Right: Social Icons Row (Facebook, X, Instagram, YouTube, LinkedIn - 24x24, grey #757575) */}
      <div className="flex items-center gap-[16px] text-[#757575]">
        <a href="#" aria-label="Facebook" className="hover:text-[#333333] transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" aria-label="X" className="hover:text-[#333333] transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[#333333] transition-colors">
          <Instagram size={20} />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-[#333333] transition-colors">
          <Youtube size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[#333333] transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
