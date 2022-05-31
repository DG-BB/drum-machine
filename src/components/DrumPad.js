const {Component} = require("react");

export default class DrumPad extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    playSound() {
        document.getElementById("audio_" + this.props.padItem.key).play();
        this.props.update();
    }

    handleClick(event) {
        event.preventDefault();
        this.playSound();
    }

    handleKeyPress(event) {
        event.preventDefault();
        if (event.key.toUpperCase() === this.props.padItem.key)
            this.playSound();
    }

    render() {
        return (
            <div className="drum-pad" onClick={this.handleClick} id={"pad_" + this.props.padItem.key}>
                <p>{this.props.padItem.key}</p>
                <audio id={"audio_" + this.props.padItem.key} preload="auto">
                    <source src={this.props.padItem.audioUrl} type="audio/mpeg"></source>
                </audio>
            </div>
        );
    }
}
