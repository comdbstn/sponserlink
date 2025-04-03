const ProcessStep = ({ number, title, description }: { 
  number: number,
  title: string, 
  description: string 
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-lg z-10">
        {number}
      </div>
      <h3 className="font-playfair text-xl font-bold mb-4 text-[var(--text-dark)]">{title}</h3>
      <p className="text-[var(--text-medium)]">{description}</p>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: "프로필 작성",
      description: "주최자는 행사 정보를, 스폰서는 기업 및 마케팅 목표 정보를 등록합니다."
    },
    {
      id: 2,
      title: "맞춤형 매칭",
      description: "주최자와 스폰서기업이 협업할 수 있는 조건으로 매칭해드립니다."
    },
    {
      id: 3,
      title: "계약 체결",
      description: "제공 물품&금액, 받을 광고구좌에 대한 계약을 체결합니다."
    },
    {
      id: 4,
      title: "행사 진행 및 피드백",
      description: "행사 진행과 결과 평가, 피드백을 교환합니다."
    }
  ];

  return (
    <section id="process" className="section bg-[var(--gray-100)] relative overflow-hidden">
      {/* 장식용 요소 */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-[var(--primary)] rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[var(--secondary)] rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-gradient mb-6">이용 프로세스</h2>
          <p className="text-[var(--text-medium)] text-lg max-w-3xl mx-auto">
            스폰서링크는 간단한 4단계로 이벤트 주최자와 스폰서를 연결합니다.
            누구나 쉽게 이용할 수 있는 프로세스를 제공합니다.
          </p>
        </div>
        
        <div className="relative">
          {/* 연결선 */}
          <div className="absolute top-10 left-0 w-full h-0.5 bg-[var(--gray-300)] hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map(step => (
              <div key={step.id} className="relative">
                <ProcessStep 
                  number={step.id}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 