const PortfolioCard = ({ title, description }: {
  title: string,
  description: string
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-full mb-4 flex items-center justify-center">
          {/* 실제 구현 시 Image 컴포넌트에 실제 이미지 경로를 지정해야 합니다 */}
          <div className="text-xl font-bold text-gray-500">{title}</div>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const portfolios = [
    {
      id: 1,
      title: "Meitu",
      description: "인기 소셜미디어 앱"
    },
    {
      id: 2,
      title: "SBS A&T",
      description: "방송/미디어"
    },
    {
      id: 3,
      title: "명지대학교",
      description: "대학교"
    }
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">포트폴리오</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            스폰서링크는 다양한 이벤트 및 브랜드와 함께해왔습니다.
            신뢰할 수 있는 파트너로서 성공적인 이벤트와 마케팅 캠페인을 지원합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolios.map(portfolio => (
            <PortfolioCard 
              key={portfolio.id}
              title={portfolio.title}
              description={portfolio.description}
            />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-[#ff5a5a] text-4xl font-bold mb-2">20만+</div>
            <p className="text-gray-600">성사된 매칭</p>
          </div>
          <div className="text-center p-6">
            <div className="text-[#ff5a5a] text-4xl font-bold mb-2">150+</div>
            <p className="text-gray-600">협력 기업</p>
          </div>
          <div className="text-center p-6">
            <div className="text-[#ff5a5a] text-4xl font-bold mb-2">95%</div>
            <p className="text-gray-600">고객 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 