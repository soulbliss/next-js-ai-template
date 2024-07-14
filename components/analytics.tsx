'use client';

import Script from 'next/script';

// Uses Google Analytics, replace with your own analytics provider

export function Analytics() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>

      <Script
        defer
        data-domain="nextjsaitemplates.com"
        src={process.env.NEXT_PUBLIC_PLAUSIBLE}></Script>
    </>
  );
}
