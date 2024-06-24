import BlogCard from "../components/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogsContainer">
      <BlogCard blogs={blogs} titulo="Blogs" />
    </div>
  );
};

export default Blogs;
