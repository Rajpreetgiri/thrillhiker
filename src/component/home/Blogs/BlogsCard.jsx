import React from 'react';

function Blog(props) {
    return (
        <>
            <div className="col-md-4 mb-3">
                <img src={props.imgsrc} className="w-100 destinationImgs" alt="jaisalmerImg" />
                <div className="DestinationCaption overlay">
                    <div className="bottomCaptionBlog">
                        <h4 className="locationDetails text-white">{props.blogSummary}</h4>
                        <div className="blogExplore">
                            <span className="btnExplore text-white">Explore Now</span>
                            <span className="blogAuthorName text-white">Author - {props.blogAuthor}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;