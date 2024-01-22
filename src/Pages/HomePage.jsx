import Main from "../Components/Main"
import Row from "../Components/Row"
import requests from "../Request"

const HomePage = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
}

export default HomePage