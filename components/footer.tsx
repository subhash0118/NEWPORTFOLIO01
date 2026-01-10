import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="mailto:ksubhash11812@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/subhash0118"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/karri-sai-surya-subhash-25809b308/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm font-medium">© 2025 K SUBHASH. All rights reserved.</p>
      </div>
    </footer>
  )
}
