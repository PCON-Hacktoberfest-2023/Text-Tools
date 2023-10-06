import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Here in our software, we offer a powerful and user-friendly text
                analysis tool that empowers you to gain deeper insights from
                your written content. Whether you're a student looking to
                improve your essays, a professional aiming to refine your
                communication, or a data enthusiast exploring linguistic
                patterns, our tool is designed to cater to your needs.
              </p>
              <p>With our text analysis tool, you can:</p>
              <p>
                <h5>Convert to LowerCase</h5>
                <p>
                  Convert to Lower Case" feature simplifies text manipulation by
                  converting text to lowercase with a single click. Whether
                  you're working with content that's in uppercase, mixed case,
                  or you simply prefer a lowercase format, this tool streamlines
                  the process for you.
                </p>
                <h5>Convert to UpperCase</h5>
                <p>
                  Convert to Uppercase" feature simplifies text manipulation by
                  transforming text into uppercase with a single click. Whether
                  you need to present text in a bold and prominent style,
                  conform to specific formatting requirements, or simply prefer
                  uppercase text, this tool provides an effortless solution.
                </p>
                <h5>Clear Text</h5>
                <p>
                  Our "Clear Text" feature provides a straightforward solution
                  for erasing content and starting fresh. Whether you're editing
                  a document, a form, or simply want to remove existing text,
                  this tool simplifies the process with a single click.
                </p>
                <h5>Copy Text</h5>
                <p>
                  Our "Copy Text" feature simplifies the process of duplicating
                  text content with ease. Whether you want to replicate
                  information from one location to another, share text with
                  others, or store text for future use, this tool offers a
                  straightforward solution.
                </p>
                <h5>Remove Extra Spaces</h5>
                <p>
                  Our "Remove Extra Spaces" feature is designed to streamline
                  text formatting by eliminating unnecessary spaces and ensuring
                  clean, well-structured content. Whether you're dealing with
                  text from various sources or simply want to enhance the
                  readability of your documents, this tool offers a simple and
                  effective solution.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our "Free to Use" feature empowers you with no-cost access to our
              platform's essential tools and resources. We believe in providing
              valuable services to our users without the burden of subscription
              fees or hidden charges. Whether you're an individual, student,
              professional, or organization, you can enjoy the benefits of our
              platform without spending a dime.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our "Browser Compatible" feature ensures that your web
              applications and content are accessible and perform seamlessly
              across various web browsers. In an increasingly diverse digital
              landscape, compatibility is crucial for reaching your audience
              effectively.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
