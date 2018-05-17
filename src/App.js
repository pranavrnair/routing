
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul class="nav nav-tabs">
        <li class="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>                                                                 
        <li>
          <Link to="/pictures">pictures</Link>
        </li>
      </ul> 

      

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pictures" component={Pictures} />
    </div>
  </Router>
);

const Home = () => (
  <div class="jumbotron">
    <h2>Home</h2>
    <p> This is the homepage of this website. </p>
  </div>
);

const About = () => (
  <div class="jumbotron">
    <h2>About</h2>
    <p>This is a tab made for displaying the details about this website. </p>
  </div>
);

const Pictures = ({ match }) => (
  <div>
    <h2>Pictures</h2>
  
    <Route path={`${match.url}/:pictureId`} component={Pictures} />
    <Route
      exact
      path={match.url}
      render={() => 

<div class = "container">
<div class="row">
<div class="col-md-4">
<div class="thumbnail">
 <a href="/image1.jpg" target="_blank">
      <img src="/image1.jpg">
          </img> 
</a>
</div>
</div>



<div class="col-md-4">
<div class="thumbnail">

 <a href="/image2.jpg" target="_blank">
  <img src="/image2.jpg">
          </img> 
</a>
</div>
</div>


<div class="col-md-4">
<div class="thumbnail">
 <a href="/image3.jpg" target="_blank">
            <img src="/image3.jpg">
          </img> 
</a>
</div>
</div>



<div class="col-md-4">
<div class="thumbnail">
 <a href="/image4.jpg" target="_blank">
  <img src="/image4.jpg">
          </img> 
</a>

</div>
</div>
</div>
</div>


}
    />
  </div>
);

const picture = ({ match }) => (
  <div>
    <h3>{match.params.pictureId}</h3>
  </div>
);


export default App;
