import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/pages/aboutme";

function App() {
    return (
        <div>
            <Header />
            <div className="wrapper" style={{minHeight: "100vh"}}>
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default App;
