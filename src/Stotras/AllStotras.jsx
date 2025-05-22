import { NavLink } from 'react-router-dom'
import React from 'react'

const AllStotras = () => {
  return (
    <>
    <center><h1>All Stotras</h1></center>
     <nav className="images">
            
            <div id='stotra'>
            <NavLink to="/KanakaDharaStotram" title="KanakaDharaStotram" className="">
                <img src="/kanakadhara.jpg" alt="img" /><br />
              <h2>కనకధారా స్తోత్రం</h2>
            </NavLink>
            </div>

             <div id='stotra'>
            <NavLink to="/VishnusahasranamaStotram" title="VishnusahasranamaStotram" className="">
                <img src="/vishnudev.jpg" alt="vishnu dev" /><br />
              <h2>శ్రీ విష్ణు సహస్ర నామ స్తోత్రం</h2>
            </NavLink>
            </div>

            <div id='stotra'>
            <NavLink to="/HanumanChalisa" title="Hanuman Chalisa" className="">
                <img src="/Hanuman.jpg" alt="img" /><br />
              <h2>హనుమాన్ చాలీసా</h2>
            </NavLink>
            </div>

            <div id='stotra'>
            <NavLink to="#" title="" className="">
                <img src="" alt="img" /><br />
              <h2></h2>
            </NavLink>
            </div>
            
            <div id='stotra'>
            <NavLink to="#" title="" className="">
                <img src="" alt="img" /><br />
              <h2></h2>
            </NavLink>
            </div>

            <div id='stotra'>
            <NavLink to="#" title="" className="">
                <img src="" alt="img" /><br />
              <h2></h2>
            </NavLink>
            </div>

    </nav>

    </>
  )
}

export default AllStotras