import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function Main({ tempMovieData, tempWatchedData }) {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}

export default Main;
