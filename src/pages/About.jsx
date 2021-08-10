import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <Card>
    <Image 
            width="100px"
            src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header className="bolder">Ahmet</Card.Header>
      <Card.Meta>Joined in ????</Card.Meta>
      <Card.Description>
        Ahmet is a ???? living in ????.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        ?? *
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard
