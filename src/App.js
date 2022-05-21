import DrumPad from './components/DrumPad';
import {useRef, useState} from "react";

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
        key: 'Y',
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
        <div className="drum-machine">
            <div className="display">
                <p>{displayText}</p>
            </div>

            <div>
                <div style={{display: 'flex'}}>
                    <DrumPad key={padItems[0].key} padItem={padItems[0]}
                             update={() => setDisplayText(padItems[0].name)}/>
                    <DrumPad key={padItems[1].key} padItem={padItems[1]}
                             update={() => setDisplayText(padItems[1].name)}/>
                    <DrumPad key={padItems[2].key} padItem={padItems[2]}
                             update={() => setDisplayText(padItems[2].name)}/>
                </div>
                <div style={{display: 'flex'}}>
                    <DrumPad key={padItems[3].key} padItem={padItems[3]}
                             update={() => setDisplayText(padItems[3].name)}/>
                    <DrumPad key={padItems[4].key} padItem={padItems[4]}
                             update={() => setDisplayText(padItems[4].name)}/>
                    <DrumPad key={padItems[5].key} padItem={padItems[5]}
                             update={() => setDisplayText(padItems[5].name)}/>
                </div>
                <div style={{display: 'flex'}}>
                    <DrumPad key={padItems[6].key} padItem={padItems[6]}
                             update={() => setDisplayText(padItems[6].name)}/>
                    <DrumPad key={padItems[7].key} padItem={padItems[7]}
                             update={() => setDisplayText(padItems[7].name)}/>
                    <DrumPad key={padItems[8].key} padItem={padItems[8]}
                             update={() => setDisplayText(padItems[8].name)}/>
                </div>
            </div>
        </div>
    );
}

export default App;
