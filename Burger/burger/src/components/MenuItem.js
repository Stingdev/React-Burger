function MenuItem({image,name,content,price}) {
    return ( 
        <div className="menu-item">
            <div className="img"><img width={'250px'} src={image} alt={'picture'}></img></div>
            {/* <div  className="img" style={{backgroundImage:`url(${image})`}}></div> */}
            <h1>{name}</h1>
            <p>{content}</p>
            <h2>{price}</h2>
        </div>
     );
}

export default MenuItem;