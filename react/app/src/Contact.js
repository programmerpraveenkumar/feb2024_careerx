import Header from "./Header";
import Footer from "./Footer";

export default function Contact(){
    return(
        <div>
            <Header/>
            <div className="content">
                <div className="left-content">
                    <h1>this is left component</h1>
                </div>
                <div>
                    <h1>this is contact component</h1>
                </div>
                <div  className="right-content">
                    <h1>this is right component</h1>
                </div>

            </div>
            <Footer/>
        </div>
    )
}