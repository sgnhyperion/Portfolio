import './Resume.css'

function Resume() {
  return (
    <div className="pdf-container">
      <iframe
        src="https://drive.google.com/file/d/12OriX6OQLTtdhI0bSTPYfGY9ZsWweSkP/view?usp=sharing"
        width="100%"
        height="600px"
      >
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="https://drive.google.com/file/d/12OriX6OQLTtdhI0bSTPYfGY9ZsWweSkP/view?usp=sharing" target="_blank">Download PDF</a>.
      </iframe>
    </div>
  );
}

export default Resume;
