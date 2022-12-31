import React from "react";
import Layout from "../Layout/Layout";
import BusinessPic from "./businessPic";
import Comment from "./Comment";
const Single_comment = () => {
  return (
    <div className="w-full lg:w-9/12 mr-4">
      <BusinessPic />
      <Comment />
    </div>
  );
};

export default Single_comment;

Single_comment.getLayout = function getLayout(page) {
  return <Layout flex="flex flex-row-reverse">{page}</Layout>;
};
