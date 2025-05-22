const Header = () => {
  return (
    <>
      <header className='w-full fixed bg-white h-16 shadow-md'>
        <section className='w-4xl m-auto flex items-center h-full justify-between'>
          <p className='font-extrabold text-lg'>빼곡 : 빼곡하게 채우는 나만의 책장</p>
          <a
            className='hover:bg-[#f0f0f0]  px-3 py-1 rounded'
            rel='noopener noreferrer'
            target='_blank'
            href='https://bbaegok.notion.site/1952522077a080639273e24fe06fbfef?pvs=73'
          >
            자주 묻는 질문
          </a>
        </section>
      </header>
      <div className='h-16' />
    </>
  );
};

export default Header;
