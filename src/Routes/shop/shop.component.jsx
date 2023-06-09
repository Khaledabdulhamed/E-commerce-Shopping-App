import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action';

import { setCategories } from '../../store/categories/category.action';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;































// import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import Category from '../category/category.component';
// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { setCategories } from '../../store/categories/category.action';


// const Shop = () => {

//   const dispatch = useDispatch()

//   useEffect(()=>{
//     const getcategoriesMap = async ()=>{
//         const categoriesArray = await getCategoriesAndDocuments('categories');

//         dispatch(setCategories(categoriesArray))

//     };
//     getcategoriesMap();
// },[])
//   return (
//     <Routes>
//       <Route index element={<CategoriesPreview/>}/>
//       <Route path=":category" element={<Category/>}/>
//     </Routes>

//   )  ;
  
// };

// export default Shop