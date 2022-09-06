import './App.css';
import { Link } from 'react-router-dom';

import Description from './components/Description/Description';

function App() {
    return (
        <div id='index-background'>

            <div id='grid'>
                <div id='item_grid_1'>
                    <Link to='/projects' className='link_style'>PROJECTS</Link>
                </div>

                <div id='item_grid_2'>
                    <Link to='/about' className='link_style'>ABOUT</Link>
                </div>

                <div id='item_grid_3'>
                    <Link to='/contact' className='link_style'>CONTACT</Link>
                </div>
            </div>

            <Description />

        </div>
    );
}

export default App;
