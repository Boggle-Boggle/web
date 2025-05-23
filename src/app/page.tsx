import Header from '@/components/Header';
import Image from 'next/image';
import phone from '@/assets/phone.png';
import apple from '@/assets/btn_apple.svg';
import google from '@/assets/btn_google.svg';
import info1 from '@/assets/한눈에보는나의책장.png';
import info2 from '@/assets/모든책을한곳에.png';
import info3 from '@/assets/자유로운독서피드.png';
import info4 from '@/assets/중요한순간독서노트에.png';
import info5 from '@/assets/반복독서관리.png';
import info6 from '@/assets/내스타일대로책정리.png';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      <Header />
      <div className='w-4xl  m-auto'>
        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <Image src={phone} alt='로고' priority className='w-xl' />
            <div className=' grow flex flex-col justify-center text-4xl font-bold'>
              빼곡하게 채우는
              <br /> 나만의 책장
              <div className='grid grid-cols-2 gap-3 mt-6'>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://apps.apple.com/kr/app/%EB%B9%BC%EA%B3%A1-%EB%8F%85%EC%84%9C%EA%B8%B0%EB%A1%9D-%EC%95%B1/id6742702941'
                >
                  <Image src={apple} alt='로고' priority className='w-xl' />
                </a>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://play.google.com/store/apps/details?id=bbaegok.app'
                >
                  <Image src={google} alt='로고' priority className='w-xl' />
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <div className='flex flex-col justify-center'>
              <p className=' text-4xl font-bold mb-4'>한 눈에 보는 나의 책장</p>
              <p className=' text-xl'>읽은 책을 3D 책장에 꽂아 나만의 책장을 완성해보세요</p>
            </div>
            <Image src={info1} alt='로고' priority className='w-80' />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <Image src={info2} alt='로고' priority className='w-80' />
            <div className='flex flex-col justify-center  text-end'>
              <p className=' text-4xl font-bold mb-4'>모든 책을 한곳에</p>
              <p className=' text-xl'>서재를 등록하고, 읽기 상태를 한 눈에 관리하세요</p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <div className='flex flex-col justify-center'>
              <p className=' text-4xl font-bold mb-4'>자유로운 독서피드</p>
              <p className=' text-xl'>기간, 평점, 노트까지 원하는 방식으로 기록을 남겨보세요</p>
            </div>
            <Image src={info3} alt='로고' priority className='w-80' />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <Image src={info4} alt='로고' priority className='w-80' />
            <div className='flex flex-col justify-center text-end'>
              <p className=' text-4xl font-bold mb-4'>중요한 순간, 독서노트에</p>
              <p className=' text-xl'>기간, 평점, 노트까지 원하는 방식으로 기록을 남겨보세요</p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <div className='flex flex-col justify-center'>
              <p className=' text-4xl font-bold mb-4'>반복 독서 관리</p>
              <p className=' text-xl'>다회독 기능으로 회차별 기록을 남기고 비교해 보세요</p>
            </div>
            <Image src={info5} alt='로고' priority className='w-80' />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-12 flex justify-between'>
            <Image src={info6} alt='로고' priority className='w-80' />
            <div className='flex flex-col justify-center  text-end'>
              <p className=' text-4xl font-bold mb-4'>내 스타일대로 책정리</p>
              <p className=' text-xl'>원하는 카테고리로 서재를 자유롭게 구성하세요</p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className='py-16 flex flex-col justify-center items-center'>
            <p className=' text-3xl font-bold mb-4 text-center leading-13'>
              읽은 책이 쌓일수록 마음도 가득 채워지는 경험 <br />
              여러분의 독서경험이 더욱 특별해지도록 빼곡이 함께할게요
            </p>

            <a
              className='mt-8 h-16 w-64 bg-[#E6B9A6] text-white text-xl font-extrabold rounded-xl flex justify-center items-center'
              rel='noopener noreferrer'
              target='_blank'
              href='https://linktr.ee/bbaegok'
            >
              빼곡 바로가기
            </a>
          </section>
        </AnimatedSection>
      </div>

      <footer className='mt-28 w-full py-16 bg-[#f0f0f0]'>
        <section className='w-4xl m-auto flex'>
          <div className='px-4 py-2'>
            <Link href='/legal/privacy'>개인정보처리방침</Link>
          </div>
          <div className='px-4 py-2'>
            <Link href='/legal/term'>이용약관</Link>
          </div>
        </section>
      </footer>
    </>
  );
}
