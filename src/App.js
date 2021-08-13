import Header from "./components/Header";
import TimezoneCard from "./components/TimezoneCard";

function App() {
  let date = new Date();
  return (
    <div id="content">
      <Header />
      <TimezoneCard time={date}/>
    </div>
  );
}

export default App;
