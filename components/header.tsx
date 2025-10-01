import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-primary via-primary to-accent backdrop-blur-sm border-b border-white/20 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="https://www.exattacontabilidade.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src="/logo nova 2.png" 
                alt="Exatta Contabilidade" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex items-center">
            <Link 
              href="https://www.exattacontabilidade.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              <span>Conhecer a Exatta Contabilidade</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}