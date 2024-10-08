import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Get quick, 24/7 assistance with our AI-powered chatbot. It answers questions instantly, helps with tasks like booking or troubleshooting, and personalizes responses based on your needs. No waiting—just type your query and receive immediate help!"
        />
        <Feature
          title="Knowledgebase"
          text="It is a centralized, searchable collection of articles, FAQs, and guides that helps users find information or solve problems on their own. It offers 24/7 self-service support, reduces the need for human assistance, and ensures consistent, accurate answers for users"
        />
        <Feature
          title="Education"
          text="It helps with personalized learning by offering explanations, tutoring, quiz generation, and writing assistance across various subjects. It adapts to individual learning needs, providing instant feedback and support for students and educators."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
