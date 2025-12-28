export default function VideoTestimonial() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Patient Stories</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear directly from our satisfied patients about their experience at Deep Dental Care.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <video
              src="/images/WhatsApp Video 2025-12-26 at 3.05.24 PM.mp4"
              controls
              className="w-full h-auto rounded-lg shadow-md"
            />
            <video
              src="/images/WhatsApp Video 2025-12-26 at 3.05.27 PM.mp4"
              controls
              className="w-full h-auto rounded-lg shadow-md"
            />
            <video
              src="/images/WhatsApp Video 2025-12-26 at 3.05.40 PM.mp4"
              controls
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
