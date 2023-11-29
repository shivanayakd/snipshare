import React from 'react'
import SnippetCard from './SnippetCard';

type Props = {}

const Profile = (props: Props) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Profile</span>
      </h1>
      <p className="desc text-left"> srg sfg asg asfg sdf</p>

      <div className="mt-10 prompt_layout">
        {new Array(10).fill(22).map((post) => (
          <SnippetCard
          />
        ))}
      </div>
    </section>
  );
}

export default Profile