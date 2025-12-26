import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Mandeep Kaur",
      initials: "MK",
      date: "4 months ago",
      review: "I got my wisdom tooth removed from Dr kuldeep, and I must say that he is very good and my treatment was totally pain free. I did not feel any pain. Sir took care very well. his team is very professional and kind. clinic is also hygienic.  I recommend this clinic to anyone seeking quality dental treatment."
    },
    {
      name: "Deepkaur Saini",
      initials: "DS",
      date: "1 months ago",
      review: "my brother got his smile designing treatment from deep dental care patiala and his smile has never looked so beautiful. Dr Kuldeep is very kind and he listens to our problems with patience. I would like to thank him and his team especially Dr Arshdeep for her exceptional work and compassion. highly recommend this clinic to anyone seeking professional dental care."
    },
    {
      name: "HARJOT SINGH CHEEMA",
      initials: "HS",
      date: "8 months ago",
      review: "Excellent work done ji. I got dental implants done for my mother by dr. Kuldeep. The treatment was painless and completed in few minutes. The healing phase was also very comfortable for her. Very well maintained clinic and empathetic staff"
    },
    {
      name: "Ds Singh",
      initials: "DS",
      date: "6 months ago",
      review: "Excellent experience, Dr kuldeep singh is really Great Doctor i would say he is best dentist and wonderful human being...he gave me a beautiful smile on My 6 dental implants"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}