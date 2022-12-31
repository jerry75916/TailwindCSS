import React from "react";
import Socialtext from "./socialtext";
import Socialcomment from "./socialcomment";
import SocialTags from "./socialTags";
const Social = () => {
  return (
    <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
      <Socialtext />
      <Socialcomment />
      <SocialTags/>
    </div>
  );
};

export default Social;
