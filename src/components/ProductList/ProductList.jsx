import { ProductCard } from "../Product/ProductCard";
import styles from "./ProductList.module.css";
import {useContext } from "react";
import { ProductContext } from '../../context/ProductsContext/ProductsContext';

export const ProductList = () => {

    const { products} = useContext(ProductContext);

  return (
    <ul className={`${styles.products__list}  ${styles.isHidden}`}>
      {products?.map((product) => {
        return (
          <ProductCard 
            key={product.id}
            isHidden={styles.products__item} 
            product={product} 
          />
        );
      })}
    </ul>
  );
};

// export class ProductList extends Component {
//     state = {
//         products: [],
//       };

//       async componentDidMount() {
//           axios.defaults.baseURL = "https://695054968531714d9bd0565f.mockapi.io";
//         try {
//           const response = await axios.get("/students");
//           console.log(response.data);
//           this.setState({ products: response.data});
//         } catch (error) {
//           console.log("Помилка завантаження:", error);
//         }
//           // await fetch('https://695054968531714d9bd0565f.mockapi.io/students')
//           // .then(response => response.json())
//           // .then(data => { this.setState({products: data});})
//       }

//       render() {
//         return <ul className={`${styles.products__list}  ${styles.isHidden}`}>
//         {
//             this.state.products?.map((product) => {
//             return <ProductCard isHidden={styles.products__item} product={product}/>
//         })}

//         </ul> }
// }
