import * as React from 'react'

const style = {
    backgroundColor: '#eee',
    padding: '10px 15px',
}

export default class Container extends React.Component {
    public render() {
        const { children } = this.props
        return (
            <div style={style}>
                {children}
            </div>
        )
    }
}