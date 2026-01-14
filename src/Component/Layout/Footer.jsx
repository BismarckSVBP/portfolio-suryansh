import React from 'react'
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">SS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">SURYANSH SRIVASTAVA</span>
              <span className="text-sm text-muted-foreground">Video Editor & Graphic Designer</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {[
              { href: 'https://www.linkedin.com/in/suryansh-srivastava-b295a2327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <Linkedin />, label: 'LinkedIn' },
              { href: 'https://www.instagram.com/maxx_editzdb?igsh=YXVnZXh6aHFkcmd5', icon: <Instagram />, label: 'Instagram' },
              { href: 'mailto:maxx88461@gmail.com', icon: <Mail />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                {React.cloneElement(icon, { className: 'h-6 w-6' })}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-muted my-8"></div>

        {/* Copyright and Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Suryansh Srivastava. All rights reserved.
          </div>
          <div className="text-center text-sm text-gray-400 space-y-1">
  
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
