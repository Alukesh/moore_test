import IconCart from '../../assets/images/icons/icon-cart.svg?react'
import IconBurger from '../../assets/images/icons/icon-burger.svg?react'
import IconProfile from '../../assets/images/icons/icon-profile.svg?react'
import IconLogo from '../../assets/images/icons/icon-logo.svg?react'
import IconSearch from '../../assets/images/icons/icon-search.svg?react'

const Header = () => {
    return (
        <header className='bg-primary text-white'>
            <div className="container flex items-center py-4">
                <a href="#" className='mr-12  lg:block hidden'>
                    <IconLogo className=" h-[70px] w-36" />
                </a>
                <div className='flex items-center gap-4 px-6 py-[14px] rounded-full bg-black/10 cursor-pointer'>
                    <IconBurger />
                    <p className=' md:block hidden text-[15px]'>Каталог</p>
                </div>
                <div className='relative mx-[22px] grow xs:block hidden'>
                    <IconSearch className="h-4 w-4 absolute top-1/2 -translate-y-1/2 left-3" />
                    <input className='text-primary py-3 pl-10 rounded-full text-sm w-full' type="text" placeholder='Поиск' />
                    <p className='absolute right-3 top-1/2 -translate-y-1/2 text-[#ABABAB] text-sm md:block hidden'>42903 товаров</p>
                </div>
                <div className='flex gap-2 ml-auto'>
                    <div className=' flex-col items-end sm:flex hidden'>
                        <p className=' text-[10px] leading-none'>Добро пожаловать</p>
                        <p className=' text-sm leading-none font-semibold'>
                            <a href="#log-in">Вход</a>/
                            <a href="#sign-up">Регистрация</a>
                        </p>
                    </div>
                    <a href="#profile" className=' rounded-full'>
                        <div className='group border-2 border-gray-300 bg-white h-fit p-2 rounded-full hover:bg-primary'>
                            <IconProfile className=" stroke-[#BEBEBE] group-hover:stroke-white h-4 w-4 transition ease-in-out" />
                        </div>
                    </a>
                    <p className='h-auto w-[1px] bg-white/20'></p>
                    <a href="#cart" className='relative rounded-full'>
                        <div className='group border-2 p-2 rounded-full  border-white bg-white h-fit hover:bg-primary'>
                            <IconCart className=" stroke-primary group-hover:stroke-white h-4 w-4 transition ease-in-out" />
                            <p className=' bg-red-500 w-4 h-4 text-[10px] leading-none rounded-full flex justify-center items-center absolute -top-1 -right-1'>2</p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;