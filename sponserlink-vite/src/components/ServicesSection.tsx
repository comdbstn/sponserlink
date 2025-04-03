interface ServiceCardProps {
  title: string
  description: string
  icon: string
  index: number
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  return (
    <div className="process-step group">
      <div className="absolute top-4 right-4 text-sm font-medium text-[var(--primary-light)]">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="text-xl mb-3 font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
        {title}
      </h3>
      <p className="text-[var(--text-medium)] leading-relaxed">
        {description}
      </p>
      <div className="mt-6 pt-6 border-t border-dashed border-[var(--gray-200)]">
        <a href="#" className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
          자세히 보기
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

const ServicesSection = () => {
  const services = [
    {
      title: "국비교육 수강생 모집",
      description: "정부지원 국비교육으로 취업에 필요한 실무 교육을 제공합니다.",
      icon: "💻"
    },
    {
      title: "공모전/대외활동",
      description: "다양한 공모전과 대외활동 정보를 한눈에 확인하세요.",
      icon: "🏆"
    },
    {
      title: "채용/인턴 정보",
      description: "기업 채용정보와 인턴십 기회를 제공합니다.",
      icon: "📋"
    },
    {
      title: "대학생 타겟 서비스",
      description: "대학생만을 위한 맞춤형 서비스를 제공합니다.",
      icon: "🎓"
    }
  ]

  return (
    <section className="section bg-[var(--background-alt)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--primary)]/10 px-6 py-2 rounded-full mb-4">
            <span className="text-[var(--primary)] font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl mb-6 font-bold">
            대학생을 위한 서비스
          </h2>
          <p className="text-[var(--text-medium)] max-w-2xl mx-auto text-lg">
            취업과 자기계발을 위한 모든 것을 제공합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
    </section>
  )
}

export default ServicesSection 