import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#ffefef] to-[#fff8f8] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff5a5a]">
            행사와 스폰서를 연결해주는,<br /> 
            <span className="text-4xl md:text-5xl">스폰서링크</span>
          </h1>
          <p className="text-gray-700 mb-8 max-w-lg">
            원하는 행사에 필요한 스폰서를, 브랜드에 최적화된 이벤트를 한 곳에서 
            만나보세요. 스폰서링크는 이벤트 주최자와 스폰서 기업을 연결하는 혁신적인 매칭 플랫폼입니다.
          </p>
          <Link 
            href="#services" 
            className="bg-[#ff5a5a] text-white px-8 py-3 rounded-full hover:bg-[#ff4040] transition-colors duration-300 inline-block"
          >
            서비스 알아보기
          </Link>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative h-[400px] w-full">
            {/* 실제 구현 시 Image 컴포넌트에 실제 이미지 경로를 지정해야 합니다 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[250px] h-[500px] bg-[#ffcece] rounded-[40px] relative overflow-hidden flex items-center justify-center">
                <div className="absolute w-[220px] h-[470px] bg-white rounded-[35px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#ff5a5a] mb-3 flex items-center justify-center">
                    <div className="text-2xl text-white">😊</div>
                  </div>
                  <div className="text-center text-gray-800 font-medium">
                    스폰서링크
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