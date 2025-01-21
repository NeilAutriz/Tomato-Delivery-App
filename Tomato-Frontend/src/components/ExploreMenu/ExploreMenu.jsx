import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'


const ExploreMenu = ({category, setCategory}) => {
    
    const handleCategoryChange = (categoryName) => {
        setCategory(categoryName);
    }    
  
  return (
    <div className='menu-container'>
        <h1>Explore our menu</h1>
        <p className='menu-details'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience through one delicious meal at a time.</p>

        <div className="menu-category-list">
            {menu_list.map((item, index) =>{
                return(
                    <div key={index} className='menu-category-item'>
                        <img src={item.menu_image} 
                        className={`menu-item-image ${item.menu_name === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(item.menu_name)}/>
                        <p className='menu-item-name'>{item.menu_name}</p>
                        {console.log(category)}
                    </div>                    
                )
            })}
        </div>  
        <hr />


    </div>
  )
}

export default ExploreMenu
