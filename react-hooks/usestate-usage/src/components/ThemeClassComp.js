import React,{Component} from "react";
export class ThemeClass extends Component {
    state = {
        theme: "light"
    }
    toDark = () => this.setState({ theme: "dark" })
    toLight = () => this.setState({ theme: "light" })
    render() {
        const { theme } = this.state

        return (
            <div className={theme}>
                {theme === "light"
                    ? <button onClick={this.toDark}>🔦</button>
                    : <button onClick={this.toLight}>💡</button>}
            </div>
        )
    }
}

