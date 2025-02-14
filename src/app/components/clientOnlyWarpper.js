// components/ClientOnlyWrapper.js (클라이언트 전용 컴포넌트)
'use client';

import Script from 'next/script';
import Footer from './footer';

const ClientOnlyWrapper = () => {
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="afterInteractive"
      />
      <Footer />
    </>
  );
};

export default ClientOnlyWrapper;
