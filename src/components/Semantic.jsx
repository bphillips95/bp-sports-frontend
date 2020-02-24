import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Logo from '../logo.jpeg'

const GridExampleCelled = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}> Article1
        <Image src={Logo} />
      </Grid.Column>
      <Grid.Column width={2}> Article2
        <Image src={Logo} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}> Article3
        <Image src={Logo} />
      </Grid.Column>
      <Grid.Column width={10}> this is 4
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>this is 5
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelled

