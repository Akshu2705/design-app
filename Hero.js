import picimg from '../assets/pic.png';
import { AiOutlineTwitter ,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32  bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-black text-6xl font-semibold font-hero-font' >Hi, <br/>Im Akshaya
                <p className='text-2xl'>Im a Designer</p>
            </h1>
            <div className='flex py-8'>
                <a href='#' className='pr-2 hover:text-blue-700'><AiOutlineTwitter size={38}/></a>
                <a href='#' className='pr-2 hover:text-blue-700'><AiOutlineFacebook size={38}/></a>
                <a href='#' className='hover:text-blue-700'><AiOutlineLinkedin size={38}/></a>
            </div>
        </div>
        
        <img className='md:w-1/4 h-1/5 ' src={picimg} />
    </section>
}