/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 다른 환경 변수들을 여기에 추가
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 