
import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Logo from '../mlb_logo3.png'
import {connect} from 'react-redux'

class Semantic extends Component {
  render() {
    console.log(this.props?.articles)
    return (
      <div>
      <Grid alignItems="center"
  justify="center"  style={{ minHeight: '100vh' }} celled>
    <Grid.Row>
        {/* <Link key={id} to='/articles/17' > <Item.Header>{title}</Item.Header></Link> */}
      <Grid.Column width={3}> {this.props?.articles[3]?.title}
        <Image src={Logo}  />{ this.props?.articles[3]?.content.slice(0,100)}
      </Grid.Column>
    
      <Grid.Column width={3}>  {this.props?.articles[4]?.title}
        <Image src={Logo} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>  {this.props?.articles[7]?.title}
        <Image src={Logo} />
      </Grid.Column>
      <div class="right floated five wide column">
    <img src={Logo} class="ui image" size="small" />
  </div>
      <Grid.Column width={3}>  {this.props?.articles[10]?.title}
        <Image src={Logo} />
      </Grid.Column>
      <Grid.Column width={3}>this is 5
        <Image src={Logo} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <div class="ui three column grid">
  <div class="row">
    <div class="column"><img src={Logo} class="ui image" size="small" />{this.props?.articles[10]?.title}
    </div>
    <div class="column"><img src={Logo} class="ui image" size="small" /></div>
    <div class="column"><img src={Logo} class="ui image" size="small" /></div>
  </div>
  <div class="row">
    <div class="column"><img src={Logo} class="ui image" /></div>
    <div class="column"><img src={Logo} class="ui image" /></div>
    <div class="column"><img src={Logo} class="ui image" /></div>
  </div>
 
</div>
</div>
    )
  }
}
const getArticles = (state) => {
  return {
    articles: state.articles.all
  }
}

export default connect(getArticles)(Semantic)

