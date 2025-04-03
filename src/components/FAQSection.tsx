"use client";

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "스폰서링크는 어떤 유형의 이벤트를 지원하나요?",
      answer: "스폰서링크는 대학교 축제, 음악 페스티벌, 콘서트, 기업 행사, 마라톤, 팝업스토어 등 모든 형태의 이벤트를 지원합니다. 규모와 성격에 관계없이 스폰서가 필요한 모든 행사에 최적의 파트너를 연결해드립니다."
    },
    {
      id: 2,
      question: "서비스 이용 비용은 어떻게 되나요?",
      answer: "스폰서링크는 서비스 의뢰 시 별도의 비용을 청구하지 않습니다. 스폰서십이 성공적으로 체결되었을 때만 수수료가 발생하며, 이는 투명하게 안내해 드립니다."
    },
    {
      id: 3,
      question: "스폰서십 계약은 어떻게 진행되나요?",
      answer: "이벤트 주최/주관사: 행사 일정, 장소, 라인업 등 행사 정보와 협찬사에 제공 가능한 혜택 가이드를 전달해주시면, 저희가 적합한 협찬사에 배포하거나 직접 협찬 제안을 진행합니다. 협찬사(스폰서): 협찬 가능한 상품이나 금액, 원하는 행사 유형, 타겟 연령층 등을 알려주시면, 적합한 행사를 추천드리거나 현재 협찬을 모집 중인 이벤트 리스트를 제공해드립니다."
    },
    {
      id: 4,
      question: "이벤트 대행 서비스는 어떻게 신청하나요?",
      answer: "웹사이트 하단의 문의 양식을 통해 신청해주시거나, 제공된 연락처로 문의주시면 전문 담당자가 상세히 안내해드립니다. 이벤트 규모와 요구사항에 따라 맞춤형 서비스를 제공해드립니다."
    },
    {
      id: 5,
      question: "성공적인 스폰서십을 위한 팁이 있나요?",
      answer: "성공적인 스폰서십을 위해서는 명확한 정보 제공이 가장 중요합니다. 협찬사(스폰서): 제공 가능한 상품, 수량, 예산 범위를 구체적으로 설정해주세요. 이벤트 주최/주관사: 제공 가능한 공간, 광고 구좌, 행사 일정, 장소, 예상 참가자 수 등 구체적인 정보를 공유해주세요. 중요 사항: 확정되지 않은 행사는 스폰서십 의뢰가 불가능합니다. 행사 계획이 확정된 후 문의해주세요."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">자주 묻는 질문 (FAQ)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            스폰서링크에 대해 궁금한 점이 있으신가요?
            자주 묻는 질문과 답변을 확인해보세요.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map(faq => (
            <FAQItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">더 궁금한 점이 있으신가요?</p>
          <a 
            href="mailto:contact@sponsorlink.com" 
            className="text-[#ff5a5a] font-medium hover:underline"
          >
            contact@sponsorlink.com으로 문의하세요
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 