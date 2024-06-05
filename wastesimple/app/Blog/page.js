import BlogPage from "./[slug]/page"

const Card = ({ image, title, text, link }) => (
    <div className="bg-white min-w-72 rounded-3xl shadow-md overflow-hidden w-full sm:w-1/3 m-3 mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover mx-auto" />
      <div className="p-4 flex flex-col justify-between mx-auto">
        <div>
          <h2 className="text-lg font-semibold ">{title}</h2>
          <p className="text-gray-600 mt-2 ">{text}</p>
        </div>
        <a href={link} className="text-blue-500 hover:underline self-start mt-4 ">
          Read More
        </a>
      </div>
    </div>
  );

export default function Blog(){
    return(
        <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto text-center max-w-2xl sm:text-left">
                <div>
                    <h2 className="text-base font-semibold leading-6 tracking-wider text-indigo-600 uppercase">Blog</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight">Read Our Stories</p>
                    <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-500">Check out our blog to learn more about sustainable waste management</p>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-lg sm:max-w-none sm:mx-auto sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 sm:gap-y-12 lg:mx-0 lg:grid-cols-3 lg:grid-rows-3">

                {[
                    {title: "Blog post 1", date: "2020-01-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 2", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 4", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 5", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 6", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 7", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 8", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 9", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 10", date: "2020-02-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
                    {title: "Blog post 3", date: "2020-03-01", imageUrl: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"}
                ].map(blog => <Card key={blog.title} title={blog.title} text={blog.date} image={blog.imageUrl} />)}
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