import { Outlet, useLocation, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location= useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <p className="flex justify-center items-center font-bold text-2xl"> Loading........</p> :
                    <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;