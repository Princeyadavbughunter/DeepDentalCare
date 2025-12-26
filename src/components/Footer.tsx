import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/DeepDentalCarelogo.png"
            alt="Deep Dental Care & Physiotherapy Centre"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+917719778864" className="block text-[#01659e] font-bold md:text-lg hover:text-black transition-colors">+91 7719778864</a>
            <p className="text-gray-700">deepdentalandoralcare@gmail.com</p>
            <p className="text-gray-700">www.deepdentalcare.com</p>
          </div>

          <div>
            <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Open Hours</h3>
            <p className="text-gray-700 md:text-lg">
              Monday to Saturday:<br />
              Morning: 10:00 AM – 2:00 PM<br />
              Evening: 3:00 PM – 7:00 PM
            </p>
          </div>


          <div>
            <h3 className="font-bold text-[#01659e] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/6cSyBRRDewU7Zefp8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#01659e] transition-colors cursor-pointer block"
            >
              📍 Deep Dental Care & Physiotherapy Centre
              SCF-12, First floor, Maan complex, adjoining Aneja sweets, Urban Estate Phase II, Urban Estate, Patiala, Falauli, Punjab 147002
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4317.2124020188085!2d76.439148!3d30.350651100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029b17750b655%3A0xcf67114119d05c12!2sDeep%20Dental%20Care%20%26%20Physiotherapy%20Centre!5e1!3m2!1sen!2sin!4v1766738014451!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orovac Dental Care Location - Malviya Nagar, Jaipur, Rajasthan 302017"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}