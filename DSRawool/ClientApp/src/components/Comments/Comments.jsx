import React, { useEffect, useState } from "react";
import BlogService from "../../services/BlogService";

function Comments(props) {
  const [blogComments, setBlogComments] = useState([]);

  useEffect(() => {
    getBlogComments(props.blogId);
  }, []);

  async function getBlogComments(blogId) {
    console.log(blogId);
    const blogComments = await BlogService.getBlogComments(blogId);
    console.log(blogComments);
    setBlogComments(blogComments);
  }

  return (
    <div>
      <div className="card bg-light">
        <div className="card-body">
          <form className="mb-4">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Join the discussion and leave a comment!"
            ></textarea>
          </form>

          {blogComments &&
            blogComments.map((comment) => (
              <div key={comment.commentId} className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-circle"
                    src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                    alt="..."
                  />
                </div>
                <div className="ms-3">
                  <div className="fw-bold">{comment.createdBy}</div>
                  {comment.comment}
                  {comment.replies &&
                    comment.replies.map((reply) => (
                      <div key={reply.commentId} className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold">{reply.createdBy}</div>
                          {reply.comment}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
