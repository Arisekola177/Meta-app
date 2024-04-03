import { FaNewspaper, FaBlog, FaMountain,FaMobile } from "react-icons/fa"
export default function Category () {
    return (
        <div className="w-8/12 mx-auto mt-6" >
         
            <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col gap-4 bg-slate-200 rounded-lg hover:shadow-xl duration-500">
                    <div className="py-3 px-4">
                     <FaNewspaper className="text-center text-lg mb-1" />
                     <p>Entertainment</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-slate-200 rounded-lg hover:shadow-xl duration-500">
                   <div className="py-3 px-4">
                     <FaBlog className="text-center text-lg mb-1"/>
                     <p>Gossip</p>
                    </div> 
                </div>
                <div className="flex flex-col gap-4 bg-slate-200 rounded-lg hover:shadow-xl duration-500">
                <div  className="py-3 px-4">
                     <FaMountain className="text-center text-lg mb-1" />
                     <p>Travels</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-slate-200 rounded-lg hover:shadow-xl duration-500">
                <div  className="py-3 px-4">
                     <FaMobile className="text-center text-lg mb-1" />
                     <p>Phones</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}