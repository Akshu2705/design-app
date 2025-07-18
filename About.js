import Aboutimg from '../assets/about.png'

export default function About(){
    return <section className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-4'>Hi, My name is Akshaya. I am a Designer. I Designed a Beautiful Templates with Figma.</p>
                <p className='pb-4'>I'm a budding designer with a growing passion for crreating clean, thoughtful, and impactful visual work.</p>
                <p className='pb-4'>I'm currently exploring different areas of design-from graphics and branding to ui/ux-and I love learning neew tools and techniques every day.</p>
                <p className='pb-4'>My work blends aesthetics with functionality whether it's branding, digital interfaces, illustrations, or user experience design.</p>
            </div>
        </div>
    </section>
}