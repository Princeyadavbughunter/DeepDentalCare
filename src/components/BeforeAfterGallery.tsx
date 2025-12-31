'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const videos = [
    {
      src: '/img/before-after/WhatsApp Video 2025-12-26 at 2.41.39 PM.mp4',
    },
    {
      src: '/img/before-after/WhatsApp Video 2025-12-26 at 2.41.53 PM.mp4',
    },
    {
      src: '/img/before-after/WhatsApp Video 2025-12-26 at 2.42.01 PM.mp4',
    },
    {
      src: '/img/before-after/WhatsApp Video 2025-12-26 at 2.42.05 PM.mp4',
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#01659e] text-sm md:text-base font-medium mb-2">
            Deep Dental Care
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Difference: Before & After
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-12">
          {videos.map((video, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg bg-black">
              <video
                controls
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#01659e]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Kuldeep Singh&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919814778864"
              className="bg-brandBlue text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-colors text-center"
            >
              Call Now: +919814778864
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
