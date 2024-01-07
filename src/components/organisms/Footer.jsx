import IconLogo from '../../assets/images/icons/icon-logo.svg?react'
import IconWatsapp from '../../assets/images/icons/icon-whatsapp.svg?react'
import IconInstagram from '../../assets/images/icons/icon-instagram.svg?react'
import IconFacebook from '../../assets/images/icons/icon-facebook.svg?react'
import IconAppstore from '../../assets/images/icons/icon-appstore.svg?react'
import IconPlaymarket from '../../assets/images/icons/icon-playmarket.svg?react'

const Footer = () => {
    return (
        <footer className=' bg-gradient-to-br from-[#3186C3] to-[#004F86] text-white'>
            <div className='container'>
                <div className='flex justify-between pt-[72px] pb-24 lg:flex-row flex-col'>
                    <div className='flex lg:flex-col xs:flex-row flex-col'>
                        <div>
                            <IconLogo className=" w-[180px] h-[50px] mb-11" />
                            <p className=' text-sm w-56 mb-20'>Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»</p>
                        </div>
                        <div className='flex gap-x-5 flex-wrap'>
                            <IconAppstore className=' cursor-pointer' />
                            <IconPlaymarket className='cursor-pointer bg-black py-2 px-3 w-36 h-11 rounded-md' />
                        </div>
                    </div>
                    <div className='flex justify-between lg:w-3/5 w-full flex-wrap'>
                        <div>
                            <p className=' font-bold text-[20px] mb-10'>Адреса</p>
                            <div>
                                <span className='text-sm font-normal text-[#E0E0E0]'>ЭлитСтрой</span>
                                <p className='font-medium'>ул. Ден-Сяопина 18/1</p>
                            </div>
                            <div>
                                <span className='text-sm font-normal text-[#E0E0E0]'>Баткен</span>
                                <p className='font-medium'>ул. Льва-Толстого 19</p>
                            </div>
                            <div>
                                <span className='text-sm font-normal text-[#E0E0E0]'>ТааТан</span>
                                <p className='font-medium'>ул. Лермонтова 6</p>
                            </div>
                        </div>
                        <div>
                            <p className=' font-bold text-[20px] mb-10'>Компания</p>
                            <ul className='flex flex-col text-sm gap-4'>
                                <li className='text-white/80'>Каталог</li>
                                <li className='text-white/80'>Избранное</li>
                                <li className='text-white/80'>Личный кабинет</li>
                            </ul>
                        </div>
                        <div>
                            <p className=' font-bold text-[20px] mb-10'>Контакты</p>
                            <span className=' text-[#E0E0E0] font-normal'>Email:</span>
                            <p className='mb-5'>iskender.kg@gmail.com</p>
                            <span className=' text-[#E0E0E0] font-normal'>Телефон:</span>
                            <p className=' font-medium'>+996 (500) 000-104</p>
                            <p className=' font-medium'>+996 (997) 000-104</p>
                            <p className='mb-10 font-medium'>+996 (222) 000-104</p>
                            <button className='flex items-center gap-3 bg-white py-1 px-3 rounded-full text-[#2CB742] text-sm font-semibold'>
                                <IconWatsapp />
                                WhatsApp
                            </button>
                        </div>

                    </div>
                </div>
                <p className='line h-[1px] bg-white/20'></p>
                <div className='flex justify-between py-8'>
                    <span>© 2023 Iskender.kg - Отечественный бренд сантехники</span>
                    <div className='flex gap-4'>
                        <IconInstagram />
                        <IconFacebook />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;