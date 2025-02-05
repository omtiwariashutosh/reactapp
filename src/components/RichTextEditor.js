import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/App.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className="editor">
      <h2>Rich Text Editor</h2>
      <Editor
        initialValue="Enter text here..."
        init={{
          height: 300,
          menubar: false,
          plugins: ["lists link image charmap print preview anchor"],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
        }}
        onEditorChange={(content) => setContent(content)}
      />
      <div className="output">
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default RichTextEditor;
