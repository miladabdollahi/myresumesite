import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Automation System';
  const pageTitle = title ? `${title} - ${appName}` : appName;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="من میلاد عبدالهی هستم، توسعه‌دهنده نرم‌افزار با تخصص در ERP، اتوماسیون کسب‌وکار، و برنامه‌نویس وب با پایتون، Django و React."
        />
        <meta
          name="keywords"
          content="میلاد عبدالهی, برنامه‌نویس, توسعه‌دهنده وب, ERP, نرم‌افزار, اتوماسیون, Python, Django, React, Next.js, سایت شخصی, توسعه دهنده Odoo"
        />

        <meta property="og:title" content="میلاد عبدالهی | برنامه‌نویس و توسعه‌دهنده نرم‌افزار" />
        <meta
          property="og:description"
          content="معرفی من و مهارت‌هام در حوزه توسعه نرم‌افزار و اتوماسیون کسب‌وکار. مشاهده نمونه‌کارها و خدمات مشاوره‌ای."
        />
        <meta property="og:url" content="https://milad-abdollahi.ir" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://milad-abdollahi.ir" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
