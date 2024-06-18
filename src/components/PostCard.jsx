import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
            <div className='w-full bg-gradient-to-b from-slate-400 to-slate-900 bg-slate-700  rounded-lg p-1 hover:bg-slate-900 hover:scale-105 transition duration-300'>
                <div className='w-full justify-center mb-4'>
                    <div className='relative pb-[100%]   lg:w-3/3'>
                        <img 
                            src={appwriteService.getFilePreview(featuredImage)} 
                            alt={title}
                            className='absolute bg-orange-950-800 top-0 left-0 w-full h-full object-contain rounded-lg border-b-2 border-black ' 
                        />
                    </div>
                </div>
                <h2 className='font-serif text-sm sm:text-sm md:text-2xl lg:text-xl font-bold mb-5 p-4 text-slate-200 text-center'>{title}</h2>
            </div>
           

        </Link>
  )
}


export default PostCard