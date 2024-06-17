import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
            <div className='w-full bg-white rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <div className='relative pb-[100%]'>
                        <img 
                            src={appwriteService.getFilePreview(featuredImage)} 
                            alt={title}
                            className='absolute top-0 left-0 w-full h-full object-contain rounded-xl' 
                        />
                    </div>
                </div>
                <h2 className='text-xl  font-bold text-black'>{title}</h2>
            </div>
        </Link>
  )
}


export default PostCard