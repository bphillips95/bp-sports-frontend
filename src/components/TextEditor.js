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
			tag_id: 0,
			tag_name: ''
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
		if (this.state.content.length > 0 && this.state.title.length > 0) {
		console.log(this.state)
		// console.log(this.props.user.writer)
		evt.preventDefault()
		if(this.props.user.writer) {
		fetch("https://bp-sports-backend.herokuapp.com/articles", {
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
} else { 
	alert("Please do not submit an empty title or article")
}
	}
	handleClick = (evt) => {
		console.log(evt.target)
		this.setState({
			tag_id: parseInt(evt.target.value),
			tag_name: evt.target.name
		})
	}
	// showTeamName = () => {
	// 	this.props.tags.forEach(tag => {
	// 		if(tag.id === this.state.tag_id ) { 
	// 			console.log(tag.name)
	// 		}
	// 	})
	// }
	
	
	render() {
		// console.log(this.props.tags)
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
		// its nested objects in objects, find a good way to iterate and rewrite
		<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Tag the article
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <button className="dropdown-item" value={this.props.tags[0].id} onClick={this.handleClick} name={this.props.tags[0].name}>{this.props.tags[0].name}</button>
  <button className="dropdown-item" value={this.props.tags[1].id} onClick={this.handleClick} name={this.props.tags[1].name}>{this.props.tags[1].name}</button>
<button className="dropdown-item" value={this.props.tags[2].id} onClick={this.handleClick} name={this.props.tags[2].name}>{this.props.tags[2].name}</button>
<button className="dropdown-item" value={this.props.tags[3].id} onClick={this.handleClick} name={this.props.tags[3].name}>{this.props.tags[3].name}</button> 
<button className="dropdown-item" value={this.props.tags[4].id} onClick={this.handleClick} name={this.props.tags[4].name}>{this.props.tags[4].name}</button>
  <button className="dropdown-item" value={this.props.tags[5].id} onClick={this.handleClick} name={this.props.tags[5].name}>{this.props.tags[5].name}</button>
<button className="dropdown-item" value={this.props.tags[6].id} onClick={this.handleClick} name={this.props.tags[6].name}>{this.props.tags[6].name}</button>
<button className="dropdown-item" value={this.props.tags[7].id} onClick={this.handleClick} name={this.props.tags[7].name}>{this.props.tags[7].name}</button> 
<button className="dropdown-item" value={this.props.tags[8].id} onClick={this.handleClick} name={this.props.tags[8].name}>{this.props.tags[8].name}</button>
  <button className="dropdown-item" value={this.props.tags[9].id} onClick={this.handleClick} name={this.props.tags[9].name}>{this.props.tags[9].name}</button>
<button className="dropdown-item" value={this.props.tags[10].id} onClick={this.handleClick} name={this.props.tags[10].name}>{this.props.tags[10].name}</button>
<button className="dropdown-item" value={this.props.tags[11].id} onClick={this.handleClick} name={this.props.tags[11].name}>{this.props.tags[11].name}</button> 
<button className="dropdown-item" value={this.props.tags[12].id} onClick={this.handleClick} name={this.props.tags[12].name}>{this.props.tags[12].name}</button>
  <button className="dropdown-item" value={this.props.tags[13].id} onClick={this.handleClick} name={this.props.tags[13].name}>{this.props.tags[13].name}</button>
<button className="dropdown-item" value={this.props.tags[14].id} onClick={this.handleClick} name={this.props.tags[14].name}>{this.props.tags[14].name}</button>
<button className="dropdown-item" value={this.props.tags[15].id} onClick={this.handleClick} name={this.props.tags[15].name}>{this.props.tags[15].name}</button> 
<button className="dropdown-item" value={this.props.tags[16].id} onClick={this.handleClick} name={this.props.tags[16].name}>{this.props.tags[16].name}</button>
  <button className="dropdown-item" value={this.props.tags[17].id} onClick={this.handleClick} name={this.props.tags[17].name}>{this.props.tags[17].name}</button>
<button className="dropdown-item" value={this.props.tags[18].id} onClick={this.handleClick} name={this.props.tags[18].name}>{this.props.tags[18].name}</button>
<button className="dropdown-item" value={this.props.tags[19].id} onClick={this.handleClick} name={this.props.tags[19].name}>{this.props.tags[19].name}</button> 
<button className="dropdown-item" value={this.props.tags[20].id} onClick={this.handleClick} name={this.props.tags[20].name}>{this.props.tags[0].name}</button>
  <button className="dropdown-item" value={this.props.tags[21].id} onClick={this.handleClick} name={this.props.tags[21].name}>{this.props.tags[1].name}</button>
<button className="dropdown-item" value={this.props.tags[22].id} onClick={this.handleClick} name={this.props.tags[22].name}>{this.props.tags[22].name}</button>
<button className="dropdown-item" value={this.props.tags[23].id} onClick={this.handleClick} name={this.props.tags[23].name}>{this.props.tags[23].name}</button> 
<button className="dropdown-item" value={this.props.tags[24].id} onClick={this.handleClick} name={this.props.tags[24].name}>{this.props.tags[24].name}</button>
  <button className="dropdown-item" value={this.props.tags[25].id} onClick={this.handleClick} name={this.props.tags[25].name}>{this.props.tags[25].name}</button>
<button className="dropdown-item" value={this.props.tags[26].id} onClick={this.handleClick} name={this.props.tags[26].name}>{this.props.tags[26].name}</button>
<button className="dropdown-item" value={this.props.tags[27].id} onClick={this.handleClick} name={this.props.tags[27].name}>{this.props.tags[27].name}</button> 
<button className="dropdown-item" value={this.props.tags[28].id} onClick={this.handleClick} name={this.props.tags[28].name}>{this.props.tags[28].name}</button>
  <button className="dropdown-item" value={this.props.tags[29].id} onClick={this.handleClick} name={this.props.tags[29].name}>{this.props.tags[29].name}</button>

  </div>
</div> : null }
				{/* Match the react state tag_id to redux state tag to show which tag was selected */}
	 {this.state.tag_id ? `This article is about the ${this.state.tag_name}` : "Please tag your article"} 
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