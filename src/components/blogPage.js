import React from "react";
import Layout from "./layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../assets/staticData";

const BlogPage = () => {
  return (
    <Layout>
      <div className="container">
        <h4 className="text-2xl font-bold mb-4">Blog</h4>
        <div className="row">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <Link to={`/blog/${post.id}`} className="text-black">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="text-center align-middle">
                      <FontAwesomeIcon
                        icon={post.icon}
                        className="w-[80px] h-[80px] text-gray-500"
                      />
                    </div>
                    <h6 className="card-title text-sm font-semibold text-red-500">
                      {post.category}
                    </h6>
                    <h4 className="card-title text-lg font-semibold">
                      {post.title}
                    </h4>
                    <p className="card-text">{post.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
