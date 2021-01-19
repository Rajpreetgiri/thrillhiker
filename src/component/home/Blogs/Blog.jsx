import React from 'react';
import BlogLink from './BlogLink';
import BlogCard from './BlogsCard';
import './Blog.css';

function Blog() {
    return (
        <>
            <section className="fifthSection">
                <div className="container">
                    <div className="headingLeft mb-4">
                        <h4 className="top"><span className="d-inline">EXPLORATIONAL STORIES</span>
                            <div className="line"></div>
                        </h4>
                        <h1 className="mainHeading">TRAVEL STORIES</h1>
                    </div>
                    <div className="row">
                        {BlogLink.map((val, index) => {
                            return (
                                <BlogCard keys={val.id} imgsrc={val.imgsrc} blogSummary={val.blogSummary} blogAuthor={val.blogAuthor} />
                            );
                        }
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;