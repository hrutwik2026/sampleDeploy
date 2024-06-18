import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
            <div className='w-full bg-white  rounded-xl p-4 hover:bg-slate-300 hover:scale-105 transition duration-300'>
                <div className='w-full justify-center mb-4'>
                    <div className='relative pb-[100%]   lg:w-3/3'>
                        <img 
                            src={appwriteService.getFilePreview(featuredImage)} 
                            alt={title}
                            className='absolute bg-transperent top-0 left-0 w-full h-full object-contain rounded-xl' 
                        />
                    </div>
                </div>
                <h2 className='text-lg sm:text-sm md:text-2xl lg:text-3xl font-bold text-black text-center'>{title}</h2>
            </div>
           

        </Link>
  )
}


export default PostCard