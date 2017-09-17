import React, { Component } from "react";
import { MarkdownEditor } from "react-markdown-editor";
import ReactMarkdown from "react-markdown";
class AddPost extends Component {
  state = {
    input: ""
  };
  onContentChange(text) {
    this.setState({ input: text });
  }
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <MarkdownEditor
            style={{
              styleMarkdownEditorHeader: { minHeight: "100px" }
            }}
            initialContent=""
            iconsSet="font-awesome"
            onContentChange={this.onContentChange.bind(this)}
          />
        </div>
        <div className="col s6">
          <ReactMarkdown source={this.state.input} />
        </div>
      </div>
    );
  }
}

export default AddPost;
