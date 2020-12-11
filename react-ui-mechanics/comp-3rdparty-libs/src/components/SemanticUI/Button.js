import React from 'react'
import { Button,Icon } from 'semantic-ui-react'

export const ButtonEmphasis = () => (
    <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </div>
)



export const ButtonAnimated = () => (
    <div>
        <Button animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>
        <Button animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
        </Button>
        <Button animated='fade'>
            <Button.Content visible>Sign-up for a Pro account</Button.Content>
            <Button.Content hidden>$12.99 a month</Button.Content>
        </Button>
    </div>
)



export const ButtonLoading = () => (
    <div>
        <Button loading>Loading</Button>
        <Button basic loading>
            Loading
        </Button>
        <Button loading primary>
            Loading
        </Button>
        <Button loading secondary>
            Loading
        </Button>
    </div>
)
