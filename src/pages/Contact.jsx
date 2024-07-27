import { FaLocationArrow, FaPhone } from "react-icons/fa"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { FaEnvelopeOpen } from "react-icons/fa6"


export const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="lg:h-[80vh] text-center lg:p-20 lg:block flex lg:items-center justify-center lg:pt-4 pt-[8em] flex-col px-4">
                <h2 className="text-3xl font-[600] uppercase  py-3">Contact Us</h2>
                 <p>Get to know us more</p>
              <div className="my-3">
              <a href="/">Home</a> / 
              <a href="" className="text-slate-300" disabled>contact</a>
              </div>
                <div className="lg:grid grid-cols-3 lg:my-14 mb-6">
                    <div className="gridContent p-2 m-2 shadow bg-slate-200">
                        <h5 className="font-bold py-4 uppercase text-slate-950 flex justify-center gap-4 items-center" style={{
                            letterSpacing: '2px'
                        }} >Call Us <FaPhone /></h5>
                        <ul>
                            <li>09077235518</li>
                            <li>08068000175</li>
                        </ul>
                    </div>
                    <div className="bg-slate-200 gridContent p-4 m-2 shadow">
                        <h5 className="font-bold py-4 uppercase text-slate-950 flex justify-center gap-3 items-center" style={{
                            letterSpacing: '2px'
                        }}>
                            <span>Send Us a Message</span>
                            <FaEnvelopeOpen />
                        </h5>
                        <ul>
                            <li>kelisconciergeservices@gmail.com</li>
                        </ul>
                    </div>
                    <div className="gridContent p-4 m-2 shadow bg-slate-200">
                        <h5 className="font-bold py-4 uppercase text-slate-950 flex justify-center items-center gap-3
                        " style={{
                        letterSpacing: '2px'}}>
                            <span>Our Office Location</span>
                            <FaLocationArrow />
                        </h5>
                        <ul>
                            <li>Port Harcourt</li>
                            <li>River State</li>
                            <li>Nigeria</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
