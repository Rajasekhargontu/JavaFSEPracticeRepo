import { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book");

  // Conditional rendering using if-else
  let detailsComponent;
  if (view === "book") {
    detailsComponent = <BookDetails />;
  } else if (view === "blog") {
    detailsComponent = <BlogDetails />;
  } else {
    detailsComponent = <CourseDetails />;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>
      <hr />
      {/* Conditional rendering using variable */}
      {detailsComponent}

      {/* Conditional rendering using ternary */}
      <div style={{ marginTop: "24px" }}>
        {view === "book" ? (
          <p>You are viewing Book Details</p>
        ) : view === "blog" ? (
          <p>You are viewing Blog Details</p>
        ) : (
          <p>You are viewing Course Details</p>
        )}
      </div>

      {/* Conditional rendering using logical && */}
      <div style={{ marginTop: "12px" }}>
        {view === "book" && <span>Books are awesome!</span>}
        {view === "blog" && <span>Blogs are insightful!</span>}
        {view === "course" && <span>Courses help you learn!</span>}
      </div>
    </div>
  );
}

export default App;