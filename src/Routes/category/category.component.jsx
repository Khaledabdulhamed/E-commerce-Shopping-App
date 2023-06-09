import { useParams } from "react-router-dom"
import { Fragment, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategoriesMap } from "../../store/categories/category.selector";
// import { CategoriesContext } from "../../context/categories.context"
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryContainer, CategoryTitle} from './category.styles'
const Category = () => {

  const categoriesMap = useSelector(selectCategoriesMap)
  const {category}= useParams();
  // const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category,categoriesMap])


  return (
    <Fragment>
    <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
      {products &&  products.map((product)=>
          <ProductCard key={product.id} product={product}/>
        )}
        </CategoryContainer>
        </Fragment>
        )
        }


export default Category