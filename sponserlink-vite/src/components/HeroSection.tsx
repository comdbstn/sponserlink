import smilePhone from '../assets/smile-phone.png'

const HeroSection = () => {
  return (
    <section className="section gradient-bg min-h-[90vh] flex items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-white text-sm">대학생에게 꼭 맞는 서비스</span>
            </div>
            <h1 className="text-white leading-tight mb-6">
              대학생에게 꼭 맞는<br />
              <span className="text-[var(--accent)]">스폰서십 매칭</span><br />
              플랫폼
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              스포츠 선수와 기업을 연결하는 혁신적인 플랫폼으로,<br className="hidden md:block" />
              양측 모두에게 가치 있는 파트너십을 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="btn-primary group">
                시작하기
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-outline">
                더 알아보기
              </button>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-white text-2xl font-bold mb-1">324</div>
                <div className="text-white/70 text-sm">대학교</div>
              </div>
              <div className="text-center">
                <div className="text-white text-2xl font-bold mb-1">10만+</div>
                <div className="text-white/70 text-sm">학생 회원</div>
              </div>
              <div className="text-center">
                <div className="text-white text-2xl font-bold mb-1">98%</div>
                <div className="text-white/70 text-sm">만족도</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="floating-animation">
              <img 
                src={smilePhone} 
                alt="스마일링 폰" 
                className="max-w-md mx-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[var(--primary-light)]/20 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
    </section>
  )
}

export default HeroSection 