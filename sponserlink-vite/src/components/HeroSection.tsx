import smilePhoneImage from '../assets/smile-phone.png'

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 z-0"></div>
      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              대학생을 위한<br />
              <span className="gradient-text">새로운 기회</span>
            </h1>
            <p className="text-[var(--text-medium)] text-lg lg:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              국내 최초 대학생 전용 서비스 플랫폼.<br />
              국비교육부터 공모전, 대외활동까지 한 곳에서!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="button-primary">
                시작하기
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="button-secondary">
                더 알아보기
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-[var(--text-medium)]">참여 대학</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">1.2만+</div>
                <div className="text-[var(--text-medium)]">학생 회원</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-[var(--text-medium)]">만족도</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float">
              <img 
                src="/images/smile-phone.png"
                alt="스마일링 폰" 
                className="max-w-md mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
    </section>
  )
}

export default HeroSection 