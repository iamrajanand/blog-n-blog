
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   
    //This use State hook triggers the react to re render the component and thus 
    //Props are a way to pass data from one component that is parent component to a child component

   const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')


// const handleDelete=(id)=>{
//         const newBlogs=blogs.filter((blog)=>blog.id!==id);
//         setBlogs(newBlogs);
// }

// npx json-server --watch data/db.json --port 8000
//different end points in json server->
// /blogs(GET),/blogs/{id} (GET),/blogs (POST),/blogs/{id} (Delete)
//fetch below will return a promise which will tackle by then and thus 

// this [] empty dependency array only runs the function for the 
//for the first initial render 
// here if  name is the  dependency , so when it changes it will render the function.

return ( 

        <div className="home">
          {error && <div>{error} </div>}
          {isPending && <div> Loading...  </div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
          {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Marios Blogs !"/> */}
          {/* <button onClick={()=>setName('raj')}>changed name</button> */}
          {/* <p>{name}</p> */}
        </div>
        //this blogs={blogs} is a prop and title is also a prop bcoz we are gonna use it into another child component by passing props in the function
        //or destructuring it to get {blogs,title}.

     );
}
 
export default Home;


///NOTES->
// react router is a way to introduce multiple different pages or routes in a react 
//less requests to server,router will load the component needed example a contact page ,a not let the client reuqest to the server. 
//sometimes we have to pass dynamic values in a route in other words where 
//certain parts of a route is changeable,