const blogs = [
    {title: "Blog1", date: "2020-01-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog2", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog4", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog5", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog6", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog7", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog8", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog9", date: "2020-02-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog10", date: "2020-02-01",image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"},
    {title: "Blog3", date: "2020-03-01", image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/01-Smart-waste-bins%402x.png"}
];

export const getBlogs = async () => {
    return blogs;
}

export const getBlog = async (slug) => {
    return blogs.find((blog) => blog.title === slug);
}