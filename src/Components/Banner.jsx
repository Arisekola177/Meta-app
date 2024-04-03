
import {banner1, banner2, banner3, banner4} from '../images/index'
import Slider from 'react-slick'


function Banner() {

    const Next = (props) => {
        const {onClick} = props
        return(
            <div className='py-1 px-6 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer duration-200 rounded 
            text-xs flex items-center justify-center ml-4  absolute top-[50%] left-0' onClick={onClick}>
            <p>Next</p>
        </div>
        )
        
     }

     const Prev = (props) => {
        const {onClick} = props
        return(
            <div className='py-1 px-6 bg-slate-100 hover:text-orange-600 hover:bg-white hover:cursor-pointer 
            duration-200 rounded text-xs mr-4 flex items-center justify-center absolute z-20 right-0 top-[50%]' onClick={onClick}>
           <p>Prev</p>
          </div>
        )
    
     } 

    var settings = { 
        dots: false,
        Infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    }

  return (
    <div className='relative mt-3'>
         <Slider {...settings}>
               <div className='w-full h-[300px] relative object-fit'>
                <img 
                 src={banner1}
                 alt='banner1'
                />
            </div>
            
            <div className='w-full h-[300px] relative object-fit'>
                <img
                 src={banner2}
                 alt='banner1'
                />
            </div>
            
            <div className='w-full  h-[300px] relative object-fit'>
                <img
                 src={banner3}
                 alt='banner1'
                />
            </div>

            <div className='w-full h-[300px] relative object-fit'>
                <img
                 src={banner4}
                 alt='banner1'
                />
            </div>
         </Slider>
    </div>
  )
}

export default Banner