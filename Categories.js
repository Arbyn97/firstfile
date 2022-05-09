import React from 'react';
import './Categories.css'
import pflie from'./profilehome.png'
class Categories extends React.Component
{constructor()
    {
        super();
        this.state={nam:"زهرا"}

    }
    render()
    {
        return(
        <React.Fragment>
            <div id="ctg1" style={{backgroundColor:'pink',width:'500px',margin:'0 60%'}}>
   <h2 style={{direction:'rtl'}}>روز خوش {this.state.nam}!</h2>
   </div>
   <div >
   <img id="circl" alt="yourprofile" src={pflie}  />
   </div>

</React.Fragment>)
         

    }
}
export default Categories;