import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import Loader from "./Loader";
import BlogCard from "../components/BlogCard";

import "../styles/Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      const blogsDb = collection(db, "blogs");

      try {
        const resp = await getDocs(blogsDb);
        setBlogs(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching documents: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="blogsContainer">
      <BlogCard blogs={blogs} titulo="Blogs" />
    </div>
  );
};

export default Blogs;
