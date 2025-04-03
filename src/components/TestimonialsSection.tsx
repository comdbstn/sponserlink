import Image from 'next/image';

const TestimonialCard = ({ quote, author, position, company }: { 
  quote: string, 
  author: string, 
  position: string, 
  company: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 text-[#ff5a5a]">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-gray-600 text-sm">{position}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "행사를 준비할 때 예산이 부족하여 고민이 많았는데, 스폰서링크를 통해 우리 축제에 딱 맞는 스폰서를 만날 수 있었습니다. 스폰서사에서 행사외에 서브적인 이벤트를 제공해주어 관객 만족도도 높았고, 항상 요청하고 있습니다.",
      author: "김OO",
      position: "페스티벌 대표",
      company: "음악축제"
    },
    {
      id: 2,
      quote: "타겟 고객층과 직접 소통할 수 있는 페스티벌을 찾고 있었는데, 스폰서링크의 추천으로 완벽한 이벤트를 찾았습니다. 현장이벤트로 팔로워도 크게 늘며, 브랜드 인지도도 크게 상승했습니다.",
      author: "박OO",
      position: "마케팅 과장",
      company: "건강기능식품"
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            스폰서링크를 통해 성공적인 파트너십을 경험한 고객들의 생생한 후기를 만나보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 