
import {motion} from 'framer-motion'
import { fadeIn,staggerContainer, zoomIn } from '../utils/motion';
import styles from '../styles';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once: 'false', amount: 0.25}}
   className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
  >
    <motion.div
     variants={fadeIn('right', 'tween', 0.2, 1)}
     className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
    >
     <div className='feedback-gradient' />
     <div>
      <h4 className='font-bold text-white sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]'>Samantha</h4>
      <p className='sm:text-[18px] text-[12px] mt-[8px] font-normal leading-[16px] sm:leading-[22px] text-white'>Founder | Metaversus</p>
     </div>
     <p className='sm:text-[24px] text-[18px] mt-[24px] font-normal leading-[39px] sm:leading-[45px] text-white'>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
    </motion.div>
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className='flex flex-1 relative justify-center items-center'
    >
    <img 
     src='/planet-09.png'
     alt='planet'
     className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
    />
    <motion.div
     variants={zoomIn(0.4, 1)}
     className='lg:block hidden absolute -left-[10%] top-[3%]'
    >
     <img 
      src='/stamp.png'
      alt='stamp'
      className='w-[155px] h-[155px] object-contain'
     />
    </motion.div>
    </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
