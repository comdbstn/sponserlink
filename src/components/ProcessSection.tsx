import Image from 'next/image';

const ProcessStep = ({ number, title, description }: { 
  number: number,
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#ff5a5a] text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">이용 프로세스</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            스폰서링크는 간단한 4단계로 이벤트 주최자와 스폰서를 연결합니다.
            누구나 쉽게 이용할 수 있는 프로세스를 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.id} className="relative">
              <ProcessStep 
                number={step.id}
                title={step.title}
                description={step.description}
              />
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 