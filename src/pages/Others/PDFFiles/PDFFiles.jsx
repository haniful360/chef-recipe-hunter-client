import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const PDFFiles = () => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });
  return (
    <Document>
      <Page>
        <Text>
          <div>
          <h1 className='question-title my-12 text-center'>Free Quently Ask Questions</h1>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl my-12">
              
              <div className="p-8">
                <h2 className="card-title">1.Tell us the differences between uncontrolled and controlled components?
                </h2>
                <p>A controlled component is a component where the data is handled by the React component itself. In other words, the state of the component is managed by the React component's state. The value of the form elements such as input, textarea, and select is stored in the state of the component, and any changes to the input are handled by an onChange event handler. In this way, the component controls the state of the form element, and any changes to the input are reflected in the state of the component.</p>
                <p>On the other hand, an uncontrolled component is a component where the data is handled by the DOM instead of by the React component. The values of form elements are stored in the DOM's internal state, and can be accessed using refs. With uncontrolled components, there is no explicit event handler to update the state of the component when user input changes. Instead, you can retrieve the updated value using a ref.</p>
              </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
              <div className="p-8">
                <h2 className="card-title">1.How to validate React props using PropTypes?
                </h2>
                <p>PropTypes is a built-in type checking library in React that allows you to validate the props passed to a component. It is a way to ensure that your components receive the correct types of data and that the data is in the correct format. PropTypes is very useful for catching bugs early in the development process and preventing type-related errors from occurring at runtime.</p>
                <div>
                  <p>Here are some of the commonly used PropTypes validators:
                  </p>
                  <p className='font-semibold'>PropTypes.array</p>
                  <p className='font-semibold'>PropTypes.bool</p>
                  <p className='font-semibold'>PropTypes.func</p>
                  <p className='font-semibold'>PropTypes.number</p>
                  <p className='font-semibold'>PropTypes.object</p>
                  <p className='font-semibold'>PropTypes.string</p>
                  <p className='font-semibold'>PropTypes.symbol</p>
                </div>
              </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
              <div className="p-8">
                <h2 className="card-title">1.Tell us the difference between nodejs and express js?
                </h2>
                <p>1.Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js.</p>
                <p>2.Node.js provides a low-level API for handling network requests and file system operations, while Express.js provides a higher-level API for building web applications and APIs.</p>
                <p>3.Node.js can be used to build a wide range of applications, including web applications, desktop applications, and command-line tools, while Express.js is primarily used for building web applications and APIs.</p>
                <p>4.Node.js provides a built-in module system for organizing and reusing code, while Express.js provides middleware for handling common web application tasks such as request/response handling, authentication, and error handling.</p>
              </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
              <div className="p-8">
                <h2 className="card-title">1.What is a custom hook, and why will you create a custom hook?
                </h2>
                <p>In React, a custom hook is a function that starts with the prefix use and allows you to reuse stateful logic across multiple components. Custom hooks are a way to extract and share common functionality from components, without the need for duplication of code.</p>
                <p>1.Reusability: You can use custom hooks to extract common functionality from components and reuse that functionality across multiple components.</p>
                <p>2.Abstraction: Custom hooks allow you to abstract away complex logic from your components, making them simpler and easier to read.</p>
                <p>3.Separation of Concerns: By moving the logic into a custom hook, you can separate concerns and keep your components focused on rendering UI.</p>
                <p>4.Encapsulation: Custom hooks allow you to encapsulate state and logic within a single function, making it easier to manage and reason about.</p>
              </div>

            </div>
          </div>
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFiles;