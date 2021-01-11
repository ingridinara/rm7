
import Linea from './Linea';
import data from './data/data.js';

export default () => {

    const lines = data.map(item => <Linea key={item.id}  text={item.text}/>)

    return (
    <div>
        {lines}  
    </div>
        
    );
};