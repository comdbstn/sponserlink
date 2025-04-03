import Link from 'next/link';

const ServiceCard = ({ title, description, icon, link }: { 
  title: string, 
  description: string, 
  icon: string,
  link: string 
}) => {
  return (
    <div className="card group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      <div className="relative z-10 p-8 transition-all duration-500 group-hover:translate-y-[-8px]">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-6 relative flex items-center justify-center bg-[var(--gray-100)] group-hover:bg-white rounded-2xl shadow-md transition-colors duration-500">
            <span className="text-4xl">{icon}</span>
          </div>
          <h3 className="font-playfair text-xl font-semibold mb-4 text-[var(--primary)] group-hover:text-white transition-colors duration-500">{title}</h3>
          <p className="text-[var(--text-medium)] mb-6 group-hover:text-white/90 transition-colors duration-500">{description}</p>
          <Link 
            href={link} 
            className="text-[var(--primary)] font-medium group-hover:text-white transition-colors duration-500 inline-flex items-center"
          >
            자세히 보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
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
    <section id="services" className="section bg-white relative">
      {/* 장식용 요소 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--gray-100)] rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[var(--gray-100)] rounded-tr-[100px] -z-10"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-gradient mb-6">주요 서비스</h2>
          <p className="text-[var(--text-medium)] text-lg max-w-3xl mx-auto">
            스폰서링크는 이벤트 주최자와 스폰서를 연결하는 다양한 서비스를 제공합니다.
            행사 성격과 목적에 맞는 최적의 파트너를 찾아보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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