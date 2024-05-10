// BlogDetailsPage.js

import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faBook,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./layout";
import { Card } from "react-bootstrap";
import LoremIpsum from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { BLOG_POSTS, LAB_TESTS } from "../assets/staticData";

const BlogDetailsPage = () => {
  const { id } = useParams();

  // Załóżmy, że otrzymujemy szczegóły wpisu na blogu na podstawie jego ID
  const blogPost = BLOG_POSTS.find((post) => post.id === parseInt(id));
  if (!blogPost) {
    window.location.href = "/";
  }
  const relatedTests = LAB_TESTS.filter(
    (relatedTest) => relatedTest.category === blogPost.category
  );

  const relatedBlogPosts = BLOG_POSTS.filter(
    (relatedPost) =>
      relatedPost.category === blogPost.category &&
      relatedPost.id !== blogPost.id
  );

  return (
    <Layout>
      <div className="container">
        <h4 className="text-2xl font-bold mb-4">Blog: {blogPost.title}</h4>
        <div className="row">
          <div className="col-lg-4">
            <Card className="h-full">
              <Card.Body className="flex justify-center align-items-center">
                <FontAwesomeIcon
                  icon={blogPost.icon}
                  className="w-[150px] h-[150px] text-gray-500"
                />
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-8">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title mb-3 text-xl font-semibold">
                  {blogPost.title}
                </h2>
                <p className="card-text mb-4">{blogPost.description}</p>
                <p>{blogPost.text}</p>
              </div>
            </div>
          </div>
        </div>
        <RelatedBlogPosts relatedBlogPosts={relatedBlogPosts} />
        <RelatedPosts relatedTests={relatedTests} />
      </div>
    </Layout>
  );
};

function RelatedBlogPosts({ relatedBlogPosts }) {
  return (
    <div className="row">
      <h3 className="text-2xl font-semibold my-3">Podobne blogi:</h3>
      <div className="row">
        {relatedBlogPosts.map((post) => (
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
  );
}

function RelatedPosts({ relatedTests }) {
  return (
    <div className="row">
      <h3 className="text-2xl font-semibold my-3">Proponowane produkty:</h3>
      <div className="row">
        {relatedTests.map((test) => (
          <div key={test.id} className="col-lg-4 col-md-6 mb-4">
            <Card className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-xl transition duration-300 ease-in-out">
              <Card.Body className="text-center">
                <FontAwesomeIcon
                  icon={test.icon}
                  className="w-[65px] h-[65px] text-gray-500"
                />
                <Card.Title className="text-lg font-semibold mb-1">
                  {test.name}
                </Card.Title>
                <Card.Text className="mb-0">Cena: {test.price} PLN</Card.Text>
                <Link
                  to={`/laboratoryTest/${test.id}`}
                  className="btn bg-green-500 hover:bg-green-500 mt-3"
                >
                  Zobacz więcej
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetailsPage;
