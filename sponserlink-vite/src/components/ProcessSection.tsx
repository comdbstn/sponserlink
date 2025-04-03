interface ProcessStepProps {
  title: string
  description: string
  icon: string
  isLast?: boolean
}

const ProcessStep = ({ title, description, icon, isLast }: ProcessStepProps) => {
  return (
    <div className="relative">
      <div className="process-step group">
        <div className="feature-icon">
          {icon}
        </div>
        <h3 className="text-xl mb-3 font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--text-medium)] leading-relaxed">
          {description}
        </p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
          <svg className="w-16 h-16 text-[var(--primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      )}
    </div>
  )
}

const ProcessSection = () => {
  const steps = [
    {
      title: "회원가입",
      description: "간단한 정보 입력으로 시작하세요",
      icon: "✨"
    },
    {
      title: "프로필 작성",
      description: "나만의 특별한 프로필을 만들어보세요",
      icon: "📝"
    },
    {
      title: "서비스 이용",
      description: "다양한 기회를 찾아보세요",
      icon: "🎯"
    },
    {
      title: "성장하기",
      description: "꿈을 향해 한 걸음씩 나아가세요",
      icon: "🚀"
    }
  ]

  return (
    <section className="section bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--primary)]/10 px-6 py-2 rounded-full mb-4">
            <span className="text-[var(--primary)] font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl mb-6 font-bold">
            이용 방법
          </h2>
          <p className="text-[var(--text-medium)] max-w-2xl mx-auto text-lg">
            간단한 4단계로 시작하는 성장의 여정
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection 