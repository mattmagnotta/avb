import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Comments = (props) => {
  let { comments } = props;
  return (
    <div
      style={{
        maxWidth: "500px",
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      {comments.map((comment, index) => {
        return (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar>{comment.name.slice(0, 1)}</Avatar>
              <p style={{ color: "blue", paddingLeft: "10px" }}>
                {" "}
                {comment.name} :
              </p>
            </div>
            <div style={{ paddingLeft: "60px" }}> {comment.body} </div>
          </>
        );
      })}
    </div>
  );
};
export default Comments;
