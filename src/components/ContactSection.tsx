"use client";

import { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현 시 폼 제출 로직 추가
    setSubmitted(true);
    // 폼 초기화
    setEmail('');
    setMessage('');
    // 3초 후 메시지 숨기기
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-[#ffefef]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">궁금한 점이 있으신가요?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              이벤트 진행, 스폰서십 문의, 협업 제안 등 어떤 내용이든 문의해주세요.
              빠른 시일 내에 답변해드리겠습니다.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5a5a] focus:border-transparent"
                  placeholder="연락받으실 이메일을 입력해주세요"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">문의내용</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5a5a] focus:border-transparent h-40 resize-none"
                  placeholder="궁금한 점을 입력해주세요"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#ff5a5a] text-white font-medium py-3 rounded-lg hover:bg-[#ff4040] transition-colors duration-300"
              >
                문의하기
              </button>
              
              {submitted && (
                <div className="mt-4 text-center text-green-600 font-medium">
                  문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.
                </div>
              )}
            </form>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">이메일</div>
              <a href="mailto:contact@sponsorlink.com" className="text-[#ff5a5a] hover:underline">
                contact@sponsorlink.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">전화</div>
              <a href="tel:01012345678" className="text-[#ff5a5a] hover:underline">
                010-1234-5678
              </a>
            </div>
            
            <div className="text-center">
              <div className="font-medium text-gray-800 mb-1">카카오톡</div>
              <a href="https://pf.kakao.com/_kakao_id" target="_blank" rel="noopener noreferrer" className="text-[#ff5a5a] hover:underline">
                @sponsorlink
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 