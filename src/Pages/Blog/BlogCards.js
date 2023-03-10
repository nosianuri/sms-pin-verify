import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const BlogCards = () => {
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // const blogs = [
    //     {
    //         _id: 1,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 2,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 3,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 4,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 5,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 6,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 7,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 8,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 9,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 10,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    //     {
    //         _id: 11,
    //         name: 'Brazil virtual numbers',
    //         link: '/',
    //         date: "Jan 18, 2023",
    //         time: "4 min read",
    //         desc: "A person is directly related to technology. Previously, we used to leave the house for purchases, study and watching movies, but today everything is available online. There are thousands of apps on the network for ordering food at home, education, entertainment and more. To get access to this ecosystem, much is not …",
    //     },
    // ]
    useEffect( () =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>{
            setBlogs(data);
        })
    });

    useEffect( () =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    });
  return (
    <div className='my-4 mr-8'>
                <div className='space-y-5'>
                    {
                        blogs.map(blog => <BlogCard
                            key={blog._id}
                            blog={blog}
                        ></BlogCard>)
                    }
                    {/* <div className='pagination'>
                        {
                            [...Array(pageCount).keys()]
                            .map(number => <button>{number +1}</button>)
                        }
                    </div> */}
                </div>
                </div>
  )
}

export default BlogCards