import Header from "./components/Header";
import TimezoneCard from "./components/TimezoneCard";

function App() {
  let date = new Date();
  return (
    <div>
      <Header />
      <TimezoneCard time={`${date.toLocaleTimeString()}`}/>
    </div>
  );
}

export default App;
