import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,
     Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';

//in link, the dish.id will become 1,2,3...eg: /menu/1

//constructing the view of each menu item
function RenderMenuItem({ dish, onClick }){
    //returns the view on the website
    return(
        <Card onClick={() => onClick(dish.id)}>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}


//another way of defining a functional component
    const Menu  = (props) => {
        const menu = props.dishes.map(dish=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }


export default Menu; 