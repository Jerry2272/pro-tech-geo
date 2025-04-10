import { clientLogo} from '../components/util';
const Client = () => {
  return (
    <section className='md:pl-[100px] md:mb-[100px] p-[40px] pl-[10px]'>
    <h2 className=' text-[38px] font-[700] text-activeColor md:mb-[40px] font-spaceGrotesk mb-[20px] ' data-aos="fade-up">Our Clients</h2>
      <div className='flex'>
    {
      clientLogo.map((logo, i) =>(
<div key={i} >
          <img src={logo.logo} alt="" />
        </div>
      ))
    }
        </div>
    </section>
  )
}

export default Client 