import Link from "next/link";
import BlogPage from "./[slug]/page"
import { getBlogs } from "../lib/data";

const Card = ({ image, title, text, link }) => (
    <div className="bg-white min-w-60 max-w-80 rounded-3xl shadow-md shadow-gray-300/50 overflow-hidden w-full sm:w-1/3 m-3 mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover mx-auto" />
      <div className="p-4 flex flex-col justify-between mx-auto">
        <div>
          <h2 className="text-lg text-gray-600 font-semibold ">{title}</h2>
          <p className="text-gray-600 mt-2 ">{text}</p>
        </div>
        <Link href={`/Blog/${title}`} className="text-blue-500 hover:underline self-start mt-4 "> Read More</Link>
        {/* <a href={link} className="text-blue-500 hover:underline self-start mt-4 ">
          Read More
        </a> */}
      </div>
    </div>
  );

export default async function Blog(){
    const blogs = await getBlogs();

    // const sortedBlogs = blogs.sort((a,b) => new Date(b.date) - new Date(a.date));
    return(
        <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto text-center max-w-2xl sm:text-left">
                <div>

                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight">Read Our Stories</p>
                    <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">Check out our blog to learn more about sustainable waste management</p>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-lg sm:max-w-none sm:mx-auto sm:grid sm:grid-cols-1 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
                {blogs.map(blog => <Card key={blog.title} title={blog.title} text={blog.date} image={blog.image} />)}
            </div>
        </div>
        </section>
        // <div>
        //     {/* <BlogPage
        //     text={"hello"}
        //     date={"202020022"}
        //     title={"Heloo this is a title"}
        //     imageUrl={"anylink"}
        //     /> */}
        // </div>
    )
}
