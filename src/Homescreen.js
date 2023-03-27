
import Navbar from './Navbar'
import Banner from './Banner';
import Rows from './Rows'
import requests from './requests';

const Homescreen = () => {
  return (
    <div className='Homescreen'>
       <Navbar/>
       <Banner/>
       <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} islargerow/>
       <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
       <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
       <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
       <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
    </div>
  )
}

export default Homescreen
