const PartnersSection = () => {
  // 파트너사 로고 데이터 (실제 구현 시 이미지 경로를 변경해야 합니다)
  const partners = [
    { id: 1, name: 'AWS', logo: '/logos/aws.png' },
    { id: 2, name: 'Microsoft', logo: '/logos/microsoft.png' },
    { id: 3, name: 'Google Cloud', logo: '/logos/google-cloud.png' },
    { id: 4, name: 'Naver', logo: '/logos/naver.png' },
    { id: 5, name: 'KT', logo: '/logos/kt.png' },
    { id: 6, name: 'CJ', logo: '/logos/cj.png' },
    { id: 7, name: 'Samsung', logo: '/logos/samsung.png' },
    { id: 8, name: 'SKT', logo: '/logos/skt.png' },
    { id: 9, name: 'Seoul', logo: '/logos/seoul.png' },
    { id: 10, name: 'Kakao', logo: '/logos/kakao.png' },
    { id: 11, name: 'KB Bank', logo: '/logos/kb.png' },
    { id: 12, name: 'NHN', logo: '/logos/nhn.png' },
  ];

  return (
    <section className="py-20 bg-[var(--gray-100)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[var(--text-dark)] mb-4">대학교 홍보기관 파트너들</h2>
          <p className="text-[var(--text-medium)] text-lg mb-6">324개 기관, 10개 광역시간 이용 협약</p>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* 장식용 요소 */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--secondary)] rounded-full filter blur-[80px] opacity-10 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--primary)] rounded-full filter blur-[80px] opacity-10 z-0"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 relative z-10">
            {partners.map(partner => (
              <div 
                key={partner.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:translate-y-[-5px]"
              >
                <div className="h-12 w-full relative flex items-center justify-center">
                  {/* 실제 구현 시에는 Image 컴포넌트에 실제 이미지 경로를 지정해야 합니다 */}
                  <div className="text-[var(--text-medium)] font-medium">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 