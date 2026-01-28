import Glassy from "../assets/images/glassy.webp";
import Hashtag from "../assets/images/hashtag.webp";
import infinity from "../assets/images/infinity.webp";
import lenses from "../assets/images/lenses.webp";

const Background = () => {
  return <section className="max-w-[80px] overflow-x-hidden mx-auto ">
    <div className="absolute -left-20 max-sm:left-0 max-sm:top-20 top-8 blur-xs -z-10 "><img src={Glassy} className="w-60 max-sm:w-30"/></div>
    <div className="absolute left-10 max-sm:left-3 max-sm:top-220 max-lg:left-0 max-lg:top-220 top-220  blur-xs -z-10 "><img src={lenses} className="w-60 max-sm:w-30 max-lg:w-45"/></div>
    <div className="absolute right-0 max-sm:right-0 max-sm:top-370 max-lg:right-0 max-lg:top-410 top-370 blur-xs -z-10 "><img src={infinity} className="w-60 max-sm:w-40 max-lg:w-45"/></div>
    <div className="absolute left-15 max-sm:left-0 max-sm:top-620 max-lg:left-0 max-lg:top-610 top-600 blur-xs -z-10 "><img src={Hashtag} className="w-60 max-sm:w-40 max-lg:w-50"/></div>
  </section>
}
export default Background;