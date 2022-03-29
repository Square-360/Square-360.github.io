import React, {useState} from 'react'
import ScrollToTop from '../../ScrollToTop'
import Header from '../../UI/MyButton/Header/Header'
import EmptySection from './EmptySection'
import PostsList from './PostsList'
import Posts from "../../../Posts.json"

function Blog({elementId}) {
    const [posts, SetPosts] = useState(Posts)

    return (
        <div className="main pb-[120px]" id={elementId}>
            <ScrollToTop />
            <Header pageId={elementId}/>
            <h1 className="text-primary font-black text-center mt-[205px]
            sm:text-[32px] sm:mt-[150px] md:mt-[170px] lg:mt-[205px] lg:text-[42px] xl:text-[58px]">Блог <br /> нашей команды</h1>
            {
                posts.length !== 0
                ? <PostsList posts={posts}/>
                : <EmptySection/> 
            }
        </div>
    )
}

export default Blog
