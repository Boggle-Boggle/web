'use client';

import { usePathname } from 'next/navigation';

const LegalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  const title = pathName.includes('term') ? '이용약관' : '개인정보처리방침';

  return (
    <div className='px-6 py-10 max-w-3xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>{title}</h1>
      <main>{children}</main>
    </div>
  );
};

export default LegalLayout;
