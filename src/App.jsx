import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function() {
  let districts=[
    {
        id:"1",
        title:"TRIVANDRUM",
        description:"capital city",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a9/f3/43/great-views.jpg?w=700&h=-1&s=1"
    },
    
    {
        id:"2",
        title:"KOLLAM",
        description:"Known for its backwaters",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/RP_Mall%2C_Kollam.jpg/1024px-RP_Mall%2C_Kollam.jpg"
    },
    {
        id:"3",
        title:"PATHANAMTHITTA",
        description:"Known for its traditional arts and crafts",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gavi%2C_Kerala.jpg/119px-Gavi%2C_Kerala.jpg"
    },
    {
        id:"4",
        title:"ALAPPUZHA",
        description:"Famous for its boat races",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/288px-Alappuzha_Boat_Beauty_W.jpg"
    },
    {
        id:"5",
        title:"KOTTAYAM",
        description:"Known as the “Land of Letters, Lakes, and Latex" ,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vembanad_Lake_at_Kumarakom.jpg/225px-Vembanad_Lake_at_Kumarakom.jpg"
    },
    {
        id:"6",
        title:"IDUKKI",
        description:"Has a large population of tribal communities, with many preserving their traditional way of life",
        image:"https://upload.wikimedia.org/wikipedia/commons/7/72/Idukki009.jpg"
    },
    {
        id:"7",
        title:"ERNAKULAM",
        description:"GOT RICH HISTORY",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png/250px-INS_Vikrant_under_construction_at_Cochin_Shipyard.png"
    },
    {
        id:"8",
        title:"THRISSUR",
        description:"FAMOUS FOR ITS FESTIVAL",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/JJP_112.jpg/243px-JJP_112.jpg"
    },
    {
        id:"9",
        title:"PALAKKAD",
        description:"RICH HERITAGE CULTURE",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KSRTC_Bus_Terminal_Palakkad.jpg/1024px-KSRTC_Bus_Terminal_Palakkad.jpg"
    },
    {
        id:"10",
        title:"MALAPPURAM",
        description:"SCENIC BEAUTY",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Malappuram_DownHill_Aerial_View.jpg/250px-Malappuram_DownHill_Aerial_View.jpg"
    },
    {
        id:"11",
        title:"KOZHIKODE",
        description:"KNOWN FOR CUISINE",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Calicut_mini_bypass.jpg/1024px-Calicut_mini_bypass.jpg"
    },
    {
        id:"12",
        title:"WAYANAD",
        description:"FOREST AREA",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/250px-Blue%2C_Green_%26_White.jpg"
    },
    {
        id:"13",
        title:"KANNUR",
        description:"KNOWN FOR BEAUTIFUL BEACHES",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Payyambalam_Beach_Back_Water.jpg/1024px-Payyambalam_Beach_Back_Water.jpg"
    },
    {
        id:"14",
        title:"KASARGOD",
        description:"UNIQUE CULTURE",
        image:"https://www.bekal.com/userfiles/1520923495_bekal-beach.jpg"
    }

]
  return (
  <div style={{backgroundColor:'black'}}>
    <Container><br></br><br></br>
      <h1><div style={{textAlign:'center',color:'white'}}>KERALA DISTRICTS</div></h1>
    <Row>
      {
        districts.map((district,index) => { 
          return(
            <Col className='mt-5' sm={3} key={index}>
            <Card style={{ width: '18rem',height:'25rem'}}>
            <Card.Img style={{height:'10rem'}} variant="top" src={district.image}/>
            <Card.Body style={{height:'13rem', width: '18rem',color:'black',backgroundColor:'silver'}}>
              <Card.Title>{district.title}</Card.Title>
              <Card.Text style={{height:'3rem'}}>{district.description}</Card.Text>
              <div className='text-center'><Button className='mt-5' variant="primary">show more</Button></div>
            </Card.Body>
            </Card></Col>
    )
          }
        )
        }
        </Row>
        </Container>
        </div>
        )}
