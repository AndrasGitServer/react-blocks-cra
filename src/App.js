import React from 'react';
import './App.css';
import { Link, Router } from '@reach/router';



const Header = props => {
    return <div style={{ height:"100px" , backgroundColor:"mediumseagreen" , marginBottom:"20px"}}></div>
}//** Header components***********************************************/



const Nav = props => {
	return <div style={{ height:"300px" , width:"200px" , backgroundColor:"royalblue" ,
    display:"inline-Block" , verticalAlign:"top" , marginRight:"20px"}}>
		<Link to="/"><button>Home</button></Link>
		<br /><br />
		<Link to="/alpha"><button>Alpha</button></Link>
		<br /><br />
		<Link to="/beta"><button>Beta</button></Link>
	</div>
}//** Nav components***********************************************/



const Main = props => {
	return <div style={{ height:"500px" , width:"700px" , backgroundColor:"crimson" ,
  	display:"inline-block" , padding:"10px"}}>
		{/* { props.children } */}
		<Sub />
		<Sub />
		<Sub />
		<Ad />
	</div>
}//** Main components***********************************************/



const Alpha = props => {
	return <div style={{ height:"500px" , width:"700px" , backgroundColor:"crimson" ,
  	display:"inline-block" , padding:"10px"}}>
		<Sub />
		<Sub />
	</div>
}//** Alpha components***********************************************/



const Beta = props => {
	return <div style={{ height:"500px" , width:"700px" , backgroundColor:"crimson" ,
  	display:"inline-block" , padding:"10px"}}>
		<Ad />
		<Ad />
		<Ad />
	</div>
}//** Beta components***********************************************/


const Sub = props => {
	return <div style={{ height:"212px" , width:"212px" , backgroundColor:"goldenrod" ,
    display:"inline-Block" , verticalAlign:"top" , margin:"10px"}}></div>
}//** Sub component *************************************************/


const Ad = props => {
	return <div style={{ height:"150px" , backgroundColor:"orchid" ,  margin:"10px"}}></div>
}//** Ad component ************************************************ */


const Example = props => {
	return <h1 style={{ backgroundColor:"lavender"}}>Welcome to Example with -> { props.a_name } </h1>
}//** Example component **********************************************


function App() {
  return (
    <div style={{ width:"1000px" , minHeight:"500px" , backgroundColor:"#eee" , padding:"20px"}}>

    	<Header />
    	<Nav />
		<Router style={{ width:"700px" , display:"inline-block" }}>
    		<Main  path="/" 	/>
			<Alpha path="alpha" />
			<Beta  path="beta" 	/>
			<Example path="/example/:a_name" />
		</Router>

     </div>
  );
}

export default App;

/* These children where used in <Main> here </Main> in the function App() in the return() 
   up to minute 21 in the video.
		<Sub />
		<Sub />
		<Sub />
		<Ad /> 
	</Main> 
*/
