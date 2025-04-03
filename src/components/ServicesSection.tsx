import Link from 'next/link';

const ServiceCard = ({ title, description, icon, link }: { 
  title: string, 
  description: string, 
  icon: string,
  link: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-4 relative">
          {/* 실제 구현 시 Image 컴포넌트에 실제 이미지 경로를 지정해야 합니다 */}
          <div className="w-full h-full flex items-center justify-center text-4xl text-[#ff5a5a]">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#ff5a5a]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          href={link} 
          className="text-[#ff5a5a] font-medium hover:underline"
        >
          자세히 보기 →
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "국비교육 수강생 모집",
      description: "전문가로 통하는 지름길! 학생부터 취준생까지 지원받으세요",
      icon: "👨‍💻",
      link: "/services/education"
    },
    {
      id: 2,
      title: "공모전 / 대외활동 모집",
      description: "대회 상금과 자기개발을 동시에! 우수한 활동은 취업에도 도움되요",
      icon: "🏆",
      link: "/services/contest"
    },
    {
      id: 3,
      title: "채용, 인턴 모집",
      description: "기존 채용사이트 대신 재학생 인재를 꾸준히 만나는 방법",
      icon: "📜",
      link: "/services/recruitment"
    },
    {
      id: 4,
      title: "대학교 타겟 서비스",
      description: "각 대학별로 맞춤 서비스를 제공합니다! (대학생 대상 이벤트 등)",
      icon: "🏪",
      link: "/services/campus"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">주요 서비스</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            스폰서링크는 이벤트 주최자와 스폰서를 연결하는 다양한 서비스를 제공합니다.
            행사 성격과 목적에 맞는 최적의 파트너를 찾아보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 