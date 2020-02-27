import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {connect} from 'react-redux'
import {saveArticle} from '../actions/action'
class TextEditor extends Component {

		modules = {
			toolbar: [
		      [{ 'font': [] }],
		      [{ 'size': ['small', false, 'large', 'huge'] }],
		      ['bold', 'italic', 'underline'],
		      [{'list': 'ordered'}, {'list': 'bullet'}],
		      [{ 'align': [] }],
		      [{ 'color': [] }, { 'background': [] }],
		      ['clean']
		    ]
		};

		formats = [
		    'font',
		    'size',
		    'bold', 'italic', 'underline',
		    'list', 'bullet',
		    'align',
		    'color', 'background'
	  	];

	  	state = {
			title: '',
			content: '',
			tag_id: 0
		}

	rteChange = (content, delta, source, editor) => {
		// console.log(editor.getHTML()); // rich text
		// console.log(editor.getText()); // plain text
		// console.log(editor.getLength()); // number of characters
		// console.log(editor.getContents()) // gets delta
		this.setState({
			content: editor.getHTML()
		})
	}
	titleChange = (evt) => {
		this.setState({
			title: evt.target.value
		})
	}
	
	// run post fetch with title, content and writer
	handleSubmit = (evt) => {
		console.log(this.state)
		// console.log(this.props.user.writer)
		evt.preventDefault()
		if(this.props.user.writer) {
		fetch("http://localhost:3000/articles", {
			method: "POST", 
			headers: { 
				"Content-Type": "application/json"
			}, 
			body: JSON.stringify({
				title: this.state.title,
				content: this.state.content,
				user_id: localStorage.user_id,
				tag_id: this.state.tag_id
			})
		}).then(r => r.json())
		.then(article => { 
			this.props.saveArticle(article)
			
			this.props.history.push(`/articles/${article.id}`)
		})
	} else { 
		alert(`You are not authorized to write`)
	}
	}
	handleClick = (evt) => {
		this.setState({
			tag_id: parseInt(evt.target.value)
		})
	}
	
	render() {
	    return (
			// switch to form at some point
	      <div >
			  <div>
			  <input name="title" type="text" placeholder="Title Here"
			   onChange={this.titleChange} value={this.state.title}></input>
			  </div>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
			value={this.state.content || ''} placeholder = 'Write Here' name="content"/> 
			<button onClick={this.handleSubmit} type="submit" >Submit</button>

			{this.props.tags[0] ? 
			  <div>
<button className="btn btn-primary" value={this.props.tags[0].id} onClick={this.handleClick}>{this.props.tags[0].name}</button>
<button className="btn btn-primary" value={this.props.tags[1].id} onClick={this.handleClick}>{this.props.tags[1].name}</button>
<button className="btn btn-primary" value={this.props.tags[2].id} onClick={this.handleClick}>{this.props.tags[2].name}</button>
<button className="btn btn-primary" value={this.props.tags[3].id} onClick={this.handleClick}>{this.props.tags[3].name}</button>
		</div> : null }
	      </div>
	    );
	}
}
const getUser = (state) => {
	return {
		user: {...state.userInfo.user},
		tags: {...state.tags.tags}
	}
}
export default connect(getUser, {saveArticle})(TextEditor);