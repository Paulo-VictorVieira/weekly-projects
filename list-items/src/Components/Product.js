import React from 'react';
import styles from '../Styles/Product.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    const url = `https://ranekapi.origamid.dev/json/api/produto/${id}`;

    const getProduct = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (erro) {
        setError('An error has occurred !');
      } finally {
        setLoading(false);
      }
    };

    getProduct(url);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  else
    return (
      <section className={`${styles.product} animeLeft`}>
        <Head
          title={`List-Items | ${product.nome}`}
          description={`List-Items | This is a product: ${product.nome}`}
        />
        <div>
          {' '}
          {product.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
          ))}
        </div>
        <div>
          <h1 className="title">{product.nome}</h1>
          <span className={styles.price}>R$: {product.preco}</span>
          <p className={styles.description}>{product.descricao}</p>
        </div>
      </section>
    );
};

export default Product;
