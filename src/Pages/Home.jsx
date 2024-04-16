
import Banner from '../Components/Banner';
import Cards from '../Components/Cards/Cards';
import { tabTitle } from '../Hooks/DynamicTitle/FunctionTitle';


const Home = () => {
    tabTitle  ("BeHome")
    return (
        <div>
           <Banner></Banner>
           <Cards></Cards>
          
           
        </div>
    );
};

export default Home;