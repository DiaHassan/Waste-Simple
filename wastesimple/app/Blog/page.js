import Link from "next/link";
import BlogPage from "./[slug]/page"
import { getBlogs } from "../lib/data";

const Card = ({ image, title, text, link }) => (
    <div className="bg-[#d7d7d7] min-w-60 max-w-80 rounded-3xl shadow-md shadow-gray-300/50 overflow-hidden w-full sm:w-1/3 m-3 mx-auto">
      <img src={image} alt={title} className="w-full h-36 object-cover mx-auto rounded-3xl" />
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

    const sortedBlogs = blogs.sort((a,b) => new Date(b.date) - new Date(a.date));
    return(
      <div>
        <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto text-center max-w-2xl sm:text-left">
                <div className="text-center">
                    <p className="text-4xl font-extrabold text-gray-900 sm:tracking-tight">Latest In!</p>
                </div>
            </div>
            <div className="mx-auto  max-w-7xl px-4 py-8 sm:px-6  lg:px-8">
                <div className="mx-auto bg-[#99FF97] text-center max-w-4xl sm:text-left flex flex-col gap-4 items-center sm:flex-row sm:justify-center" style={{backgroundColor: "rgba(153, 255, 151, 0.5)"}}>
                    <div className="w-full sm:w-1/2">
                        <img src={sortedBlogs[0].image} alt={sortedBlogs[0].title} className="h-80 object-cover mx-auto"/>
                    </div>
                    <div className="w-full sm:w-1/2 px-4 flex flex-col justify-between">
                        <div className="text-left">
                            <h2 className="text-4xl font-extrabold text-gray-900 sm:tracking-tight">{sortedBlogs[0].title}</h2>
                            <p className="text-gray-600 mt-2">{sortedBlogs[0].date}</p>
                        </div>
                        <div className="text-left mt-4">
                            <p className="text-lg text-gray-700">{sortedBlogs[0].text}</p>
                        </div>
                        <div className="self-end mt-4">
                            <Link href={`/Blog/${sortedBlogs[0].title}`} className="text-blue-500 hover:underline self-start"> Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
        <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto text-center max-w-2xl sm:text-left">
                <div>

                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight">Read Our Stories</p>
                    <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">Check out our blog to learn more about sustainable waste management</p>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-lg sm:max-w-none sm:mx-auto sm:grid sm:grid-cols-1  sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
                {sortedBlogs.map(blog => <Card key={blog.title} title={blog.title} text={blog.date} image={blog.image} />)}
            </div>
        </div>
        </section>
      </div>
    )
}
