import * as React from 'react'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
}

const footerStyle = {
    backgroundColor: '#eee',
    display: 'flex',
    marginBottom: '-10px',
    marginLeft: '-15px',
    width: 'calc(100% + 30px)'
}

interface IPostProps {
    image: string
}

export default class Post extends React.Component<IPostProps> {
    public render() {
        const { image } = this.props
        return (
            <div style={style}>
                <img src={image} />
                <div style={footerStyle}>
                    <div style={{ flex: 1, textAlign: 'center'}}>Like</div>
                    <div style={{ flex: 1, textAlign: 'center'}}>Compartir</div>
                </div>
            </div>
        )
    }
}