import React from "react";
import { useEffect } from "react";
const TopComments = (props) => {
  const { comments } = props;

  const getTop3 = (comments) => {
    const commentsMap = new Map();

    comments.forEach((comment, i) => {
      if (!commentsMap.has(comment.name)) {
        commentsMap.set(comment.name, 1);
      } else {
        commentsMap.set(comment.name, commentsMap.get(comment.name) + 1);
      }
    });

    const sortedCommentsMap = new Map(
      [...commentsMap.entries()].sort((a, b) => b[1] - a[1])
    );

    let topCommentsArray = Array.from(sortedCommentsMap, ([name, value]) => ({
      name,
      value,
    }));

    console.log(topCommentsArray);

    return topCommentsArray;
  };

  let topCommentsArray = getTop3(comments).slice(0, 3);
  console.log(topCommentsArray);
  return (
    <div>
      {topCommentsArray.map((comment, index) => {
        return <div>{comment.name}</div>;
      })}
    </div>
  );
};
export default TopComments;
