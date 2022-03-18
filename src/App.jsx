import React, { useState } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ResultsContainer from './components/ResultsContainer';
import './style.css';

const name = require('@rstacruz/startup-name-generator');

// Functional component using features of class by using Hooks
const App = () => {
    const headText = 'TellName!'
    const [headExpanded, setheadExpanded] = useState(true);
    const [suggestedName, setsuggestedName] = useState([]);
    const handleInputChange = (InputText) => {
        setheadExpanded(!InputText);
        setsuggestedName(InputText ? name(InputText) : []);
    };
    
    return (
        <div>
            <Header headExpanded={headExpanded} headTitle={headText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedName={suggestedName} />
        </div>
    );
};

// Class based Component
// class App extends React.Component {
//     state = {
//         headText: 'TellName!',
//         headExpanded: true,
//         suggestedName: [],
//     };
//     handleInputChange = (InputText) => {
//         this.setState({
//             headExpanded: !InputText,
//             suggestedName: InputText ? name(InputText) : [],
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <Header
//                     headExpanded={this.state.headExpanded}
//                     headTitle={this.state.headText}
//                 />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultsContainer suggestedName={this.state.suggestedName} />
//             </div>
//         );
//     }
// }

// function App(){
//     return <h1>This is a functional component inside app.js</h1>
// }

export default App;
