import React from 'react';
import styles from '../Styles/Products.module.css';
import { Link } from 'react-router-dom';
import Head from './Head';

const Products = () => {
  const [products, setProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const url = 'https://ranekapi.origamid.dev/json/api/produto';

    const getProducts = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);

        const json = await response.json();
        setProducts(json);
      } catch (err) {
        setError('An error has occurred !');
      } finally {
        setLoading(false);
      }
    };
    getProducts(url);
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading"></div>;
  if (products === null) return null;
  return (
    <section className={`${styles.products} animeLeft`}>
      <Head title="List-Items" description="" />

      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <img
            src={product.fotos[0].src}
            alt={product.fotos[0].titulo}
            className={styles.img}
          />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Products;
