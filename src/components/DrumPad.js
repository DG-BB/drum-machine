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
        const sound = document.getElementById(this.props.padItem.key);
        sound.currentTime = 0;
        sound.play();
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
            <div className="drum-pad" onClick={this.handleClick} id={"pad" + this.props.padItem.key}>
                <audio src={this.props.padItem.audioUrl} className="clip" id={this.props.padItem.key} preload="auto"></audio>
                {this.props.padItem.key}
            </div>
        );
    }
}
