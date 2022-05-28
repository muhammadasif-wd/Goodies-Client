import React from "react";

const Blogs = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-4">
      <div className="mt-20 border-2 shadow-xl p-5 m-5">
        <h1 className="text-xl pb-4">
          How will you improve the performance of a React Application?
        </h1>
        <h1 className="text-xl pb-4">
          Optimizing performance in a React application
        </h1>
        <ul>
          <li>1. Keeping component state local where necessary.</li>
          <li>
            2. Memoizing React components to prevent unnecessary re-renders.
          </li>
          <li>3. Code-splitting in React using dynamic import()</li>
          <li>4. Windowing or list virtualization in React.</li>
          <li>5. Lazy loading images in React.</li>
        </ul>
      </div>
      <div className="mt-20 border-2 shadow-xl p-5 m-5">
        <h1 className="text-xl pb-4">
          What are the different ways to manage a state in a React application?
        </h1>
        <h1 className="text-xl pb-4">
          The different ways to manage a state in a React application,
        </h1>
        <ul>
          <li>1. Local state.</li>
          <li>2. Global state.</li>
          <li>3. Server state.</li>
          <li>4. URL state.</li>
        </ul>
      </div>
      <div className="mt-20 border-2 shadow-xl p-5 m-5">
        <h1 className="text-xl pb-4">
          How does prototypical inheritance work?
        </h1>
        <p className="text-xl">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object
        </p>
      </div>
      <div className="mt-20 border-2 shadow-xl p-5 m-5">
        <h1 className="text-xl pb-4">
          Why you do not set the state directly in React?
        </h1>
        <h1 className="text-xl pb-4">
          One should never update the state directly because of the following
          reasons:
        </h1>
        <ul>
          <li>
            1. If you update it directly, calling the setState() afterward may
            just replace the update you made.
          </li>
          <li>
            2. When you directly update the state, it does not change this.state
            immediately.
          </li>
          <li>
            3. Instead, it creates a pending state transition, and accessing it
            after calling this method will only return the present value.
          </li>
          <li>4. You will lose control of the state across all components</li>
        </ul>
      </div>
      <div className="mt-20 border-2 shadow-xl p-5 m-5">
        <h1 className="text-xl pb-4">
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-xl">
          Unit tests are typically automated tests written and run by software
          developers to ensure that a section of an application (known as the
          "unit") meets its design and behaves as intended. In procedural
          programming, a unit could be an entire module, but it is more commonly
          an individual function or procedure.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
