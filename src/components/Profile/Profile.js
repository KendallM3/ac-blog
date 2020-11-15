import React from 'react';
import img from '../../assets/test.png'
import Socials from '../Socials/Socials';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import pic from '../../assets/pic.jpg';
import loc from '../../assets/loc.jpg';

import classes from './Profile.module.css';


const Profile = (props) => (
    <div 
    style={{display: 'flex', flexFlow: 'row wrap'}}
    >
        <div className={classes.Profile}>
            <img alt="profile" src={img} style={{width:"250px"}}></img>
            <h4 style={{marginBlockEnd: 0}}>Anna Cuomo</h4>
            <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <img src={loc} alt="loc" width="30px" />
                <h4 >Camridge, UK</h4>
            </span>
            <p>Some stuff about me or this blog</p>
            <Socials />
        </div>
        <div className={classes.Detail}>
            <img src={pic} alt="pic" width="250px" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.</p>
            <p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>
        </div>
    </div>
)

export default Profile;