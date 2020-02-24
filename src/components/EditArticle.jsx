import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

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
			content: ''
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
    // For click from article page
    componentDidMount(){
        let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
        console.log(foundArticle)
        if (foundArticle) {  
        this.setState({
            title: foundArticle.title,
            content: foundArticle.content
        })
        }
    }
    //  for refresh
    componentDidUpdate(prevProps){
        if(prevProps.articles.articles.all.length === 0){
            // console.log(this.props.articles.articles)
            let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
            this.setState({
                title: foundArticle.title,
                content: foundArticle.content
            })
        }
    }

    handleRender = () => {
        let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
        // console.log(foundArticle)
        if(foundArticle) {
            return <div >
			  <div>
			  <input name="title" type="text" 
			   onChange={this.titleChange} value={this.state.title}></input>
			  </div>
	        <ReactQuill theme="snow"  modules={this.modules}
				formats={this.formats} onChange={this.rteChange}
			value={this.state.content || ''} placeholder = 'Write Here' name="content"/> 
			<button onClick={this.handleSubmit} type="submit" >Submit</button>
			
	      </div>
        }
        else{
            return <div>Loading</div>
        }
    }
	
	render() {
        return (
            <div>
                {this.handleRender()}
            </div>
        )
        // let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
        // console.log(foundArticle)
        // if(foundArticle) {
          
	    // return (
	//       <div >
	// 		  <div>
	// 		  <input name="title" type="text" 
	// 		   onChange={this.titleChange} value={this.state.title}></input>
	// 		  </div>
	//         <ReactQuill theme="snow"  modules={this.modules}
	// 			formats={this.formats} onChange={this.rteChange}
	// 		value={this.state.content || ''} placeholder = 'Write Here' name="content"/> 
	// 		<button onClick={this.handleSubmit} type="submit" >Submit</button>
			
	//       </div>
    //     );
    //     } 
    //     else { 
    //         return (
    //         <div>Loading</div>
    //         )
    //     }
	// }

    }
}
const getArticle = state => {
    return { 
        articles: {...state}
    }
}
export default connect(getArticle)(EditArticle)