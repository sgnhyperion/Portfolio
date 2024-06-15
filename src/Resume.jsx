import './Resume.css'

function Resume() {
  return (
    <div className="pdf-container">
      <iframe
        src="https://drive.google.com/file/d/11_i9kfIATdGzpX76MASLsrHmsYcYD_AW/view"
        width="100%"
        height="600px"
      >
        This browser does not support PDFs. Please download the PDF to view it:
        <a href="https://drive.google.com/file/d/11_i9kfIATdGzpX76MASLsrHmsYcYD_AW/view" target="_blank">Download PDF</a>.
      </iframe>
    </div>
  );
}

export default Resume;
