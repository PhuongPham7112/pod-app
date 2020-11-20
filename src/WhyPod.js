import React from 'react';
import ReactDOM from 'react-dom';
import logo from './loneliness-epidemic.JPG';
import rel from './deeper-relationships.JPG';
import meet from './meet-people.JPG';

const WhyPod = () =>
{
    return(
        <div>
            <h2 style={{backgroundColor: "#ccbfff", color:"black", padding:"20px 0px"}}> Why Pod? </h2>
                <div style={{display:"flex", justifyContent: "center", alignItems: "center", padding:"10px 0px"}}>
  <img src={meet} style={{width:"40%"}}/>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"55%"}}>
                    <h3>Meet people who crave to talk about things you like.</h3>
                    <p>Pod communities are designed for you to explore what others want to talk about through their statuses. Create your own status, update it regularly, and enjoy geeking out with your favorite topics. 
                    </p>
                    </div>
                </div>
            <div style={{display:"flex", alignItems:"center"}}>
                
                <div  style={{textAlign:"center", width:"45%", padding: "5px"}}>
                    <h3>The Loneliness Epidemic</h3>
                    A growing number of Millennials and Gen Z are suffering from the devastating effects of isolation and loneliness, despite being virtually connected to people from all over the world with a tap of a button. It is easy to follow strangers on the Internet, but it is harder to create and maintain meaningful social relationships with others. 
                </div>
                <div style={{width: "50%", padding: "5px"}}>
                    <img src={logo} />
                </div>
            </div>
                <p style={{display:"flex", alignItems:"center", padding: "5px"}}>
                    <div style={{width: "70%"}}>
                        <img src={rel} />
                    </div>
                    <div style={{textAlign:"center", width:"50%"}}>
            <h3>A Way to Build Deeper Relationships </h3>
                Psychology studies show that an essential part of social relationships is authenticity, which can be achieved through the power of the human voice. There is a reason why many college students call or FaceTime their parents, and why Apple has the option of sending audio text messages. Our voice contains more emotion and sincerity than words on a screen. But what if people want to have that authentic connection with more people around the world? This is where Pod comes in.
            </div></p>
        </div>
    )
}

export default WhyPod;