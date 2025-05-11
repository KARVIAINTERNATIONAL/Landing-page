// src/app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center space-y-2">
          <p>Karvia © 2025</p>
          <p>Accra, Ghana</p>
          <p>
            <a href="mailto:karviainternational@gmail.com" className="hover:text-white">
              karviainternational@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </footer>
    );
  }
  