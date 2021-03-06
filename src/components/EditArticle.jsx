import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {updateArticle} from '../actions/action'
class EditArticle extends Component {

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
            id: 0
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
    // switch to useEffect hook to include both DidMount and DidUpdate
    // == instead of === bc coercing a string and integer
    // For click from article page

     componentDidMount(){
        let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
        console.log(foundArticle)
        if (foundArticle) {  
        this.setState({
            title: foundArticle.title,
            content: foundArticle.content,
            id : foundArticle.id
        })
        }
    }
    // //  for refresh
    componentDidUpdate(prevProps){
        if(prevProps.articles.articles.all.length === 0){
            let foundArticle = this?.props?.articles?.articles.all.find(obj => obj.id == this.props.match.params.id)
            console.log(foundArticle)
            if(foundArticle) {
            this.setState({
                title: foundArticle.title,
                content: foundArticle.content,
                id : foundArticle.id
            })
        }
        }
    }
    handleEdit = () => {
        let id = this.state.id
        // console.log(typeof(id)) is a number
        // PATCH to only send some new info ie. title and content without changing writer
		fetch(`https://bp-sports-backend.herokuapp.com/articles/${id}`, {
            method: "PATCH", 
            redirect: "follow",
			headers: { 
				"Content-Type": "application/json"
			}, 
			body: JSON.stringify({
                article: {
				title: this.state.title,
                content: this.state.content
             }
			})
        }).then(resp => resp.json())
        .then(article => {
            this.props.updateArticle(article)
            this.props.history.push(`/articles/${id}`)
        })
	}

    handleRender = () => {
        let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
        if(foundArticle) {
            return <div >
			  <div>
			  <input name="title" type="text" 
			   onChange={this.titleChange} value={this.state.title}></input>
			  </div>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange} 
			value={this.state.content || ''} placeholder = 'Write Here' name="content"/> 
			<button onClick={this.handleEdit} type="submit" >Submit Edit</button>
	      </div>
        }
        else {
            return <div>Loading</div>
        }
    }
	
	render() {
        return (
            <div>
                {this.handleRender()}
            </div>
        )
    }
}
const getArticle = state => {
    return { 
        articles: {...state}
    }
}
export default connect(getArticle, {updateArticle})(EditArticle)
