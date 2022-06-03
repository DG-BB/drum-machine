import DrumPad from './components/DrumPad';
import {useState} from "react";

const padItems = [
    {
        key: 'Q',
        name: "Heater-1",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
        key: 'W',
        name: "Heater-2",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
        key: 'E',
        name: "Heater-3",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
        key: 'A',
        name: "Heater-4",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
        key: 'S',
        name: "Clap",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
        key: 'D',
        name: "Open-HH",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
        key: 'Z',
        name: "Kick-n'-Hat",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
        key: 'X',
        name: "Kick",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
        key: 'C',
        name: "Closed-HH",
        audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

function App() {
    const [displayText, setDisplayText] = useState('');

    return (
        <div id="drum-machine">
            <div id="display">
                {displayText}
            </div>

            <div>
                {padItems.map(item => (<DrumPad key={item.key} padItem={item}
                                                update={() => setDisplayText(item.name)}/>))}
            </div>
        </div>
    );
}

export default App;
