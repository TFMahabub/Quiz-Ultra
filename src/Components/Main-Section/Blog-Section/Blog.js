import React from 'react';
import SingleBlog from './SingleBlog';

const Blog = () => {
  const blogs = [
    {id: 1,
     title: 'What is the purpose of React Router and Why do we use React Router?',
     answer: "We use react-router to change the link path and add a component in the element in react. That's why we get easy/simple way to change the link path and add a page/design to this link page. For it works well we simply add the link path in any button or nav many or any kind of text we can simply use the <Link> tag and set to = {path} And then it works well."
    },
    {id: 2,
     title: 'How does Context API works?',
     answer: "Context API is a way to avoid the props drilling method to pass any value in react. If we Declare a value in the top parent component and then we want to get the value from more and more inside components then we simply use a hook and then we get the value easily and use it. Most of the react developer use this context API to pass any data top component to a lower component."
    },
    {id: 3,
     title: 'What is UseRef?',
     answer: "Simply we use useState Hook to count how many time out application will be re-render, Our application will be infinite re-render. To avoid this we use useRef Hook. "
    }
  ]
  return (
    <div>
      {
        blogs.map (blog => 
        <SingleBlog
          key={blog.id}
          blog = {blog}
        ></SingleBlog>)
      }
    </div>
  );
};

export default Blog;