import React, { useState } from 'react'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [value,setValue]=useState();
  const navigate = useNavigate();
  let doLogout = () => {
    localStorage.removeItem("react_app_token");
    localStorage.removeItem("profile");
    localStorage.removeItem("id");
    navigate("/");
  };
  return (
    <div>
      <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,9,121,0.9752275910364145) 35%, rgba(0,212,255,1) 100%)"}}>
      <Toolbar>
        <Typography variant='h4'>Blog App</Typography>
       <Box display={'flex'} marginRight={"auto"} marginLeft={'auto'}>  
          <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={Link} to='/portal/allPosts' label='All Blogs'/>
            <Tab LinkComponent={Link} to={`/portal/myPosts/${localStorage.getItem("id")}`} label='My Blogs'/>
            <Tab LinkComponent={Link} to='/portal/addPost' label='Add Blog'/>

          </Tabs>
        </Box>
        <Box display={"flex"} marginLeft={"auto"}>
         <Button variant='contained' sx={{margin:1, borderRadius:10}} onClick={doLogout}>logout</Button> 
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header
// import { useSelector } from 'react-redux';
// const Header = () => {
//   const [value,setValue]=useState();
//   const isLoggedIn = useSelector(state=>state.isLoggedIn);
//   return (
//     <>
//     <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(14,9,121,0.9752275910364145) 35%, rgba(0,212,255,1) 100%)"}}>
//       <Toolbar>
//         <Typography variant='h4'>Blog App</Typography>
//       { isLoggedIn && <Box display={'flex'} marginRight={"auto"} marginLeft={'auto'}>  
//           <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
//             <Tab LinkComponent={Link} to='/blogs' label='All Blogs'/>
//             <Tab LinkComponent={Link} to='/myBlogs' label='My Blogs'/>
//           </Tabs>
//         </Box> }
//         <Box display={"flex"} marginLeft={"auto"}>
//          { !isLoggedIn && <><Button LinkComponent={Link} to='/login' variant='contained' sx={{margin:1, borderRadius:10}}>Login</Button>
//           <Button LinkComponent={Link} to='/signup' variant='contained' sx={{margin:1, borderRadius:10}}>Signup</Button></>}

//          { isLoggedIn && <Button variant='contained' sx={{margin:1, borderRadius:10}}>logout</Button> }
//         </Box>
//       </Toolbar>
//     </AppBar>
//     </>
//   )
// }

// export default Header