import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[var(--gray-100)] to-[var(--primary-light)] opacity-20 z-0"></div>
      
      {/* 장식용 요소 */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[var(--primary)] rounded-full filter blur-[150px] opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[150px] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <h1 className="font-playfair font-bold mb-6">
            <span className="block text-[var(--text-dark)]">행사와 스폰서를 연결해주는,</span>
            <span className="block mt-2 text-gradient text-5xl md:text-6xl lg:text-7xl">스폰서링크</span>
          </h1>
          <p className="text-[var(--text-medium)] text-lg mb-8 max-w-lg font-light leading-relaxed">
            원하는 행사에 필요한 스폰서를, 브랜드에 최적화된 이벤트를 한 곳에서 
            만나보세요. 스폰서링크는 이벤트 주최자와 스폰서 기업을 연결하는 혁신적인 매칭 플랫폼입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#services" 
              className="btn-primary text-center"
            >
              서비스 알아보기
            </Link>
            <Link 
              href="#process" 
              className="btn-outline text-center"
            >
              이용 방법 보기
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div 
              className="absolute w-[300px] h-[300px] bg-[var(--secondary-light)] rounded-full opacity-20 animate-pulse"
              style={{ animationDuration: '6s' }}
            ></div>
            <div className="w-[280px] h-[570px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-[40px] relative overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute w-[250px] h-[540px] bg-white rounded-[35px] flex flex-col items-center justify-center shadow-inner p-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] shadow-lg mb-6 flex items-center justify-center">
                  <span className="text-3xl text-white">👋</span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="font-playfair text-xl font-bold text-[var(--primary)]">스폰서링크</h3>
                  <p className="text-[var(--text-medium)] text-sm">행사와 스폰서의 완벽한 매칭</p>
                </div>
                <div className="mt-8 w-full rounded-xl bg-[var(--gray-100)] p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white text-sm">A</div>
                    <div className="flex-1">
                      <div className="h-2 w-3/4 bg-[var(--gray-300)] rounded-full"></div>
                      <div className="h-2 w-1/2 bg-[var(--gray-300)] rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-white text-sm">B</div>
                    <div className="flex-1">
                      <div className="h-2 w-2/3 bg-[var(--gray-300)] rounded-full"></div>
                      <div className="h-2 w-1/3 bg-[var(--gray-300)] rounded-full mt-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-sm">C</div>
                    <div className="flex-1">
                      <div className="h-2 w-5/6 bg-[var(--gray-300)] rounded-full"></div>
                      <div className="h-2 w-2/5 bg-[var(--gray-300)] rounded-full mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 