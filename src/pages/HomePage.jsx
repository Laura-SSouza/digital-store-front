import Layout from "./Layout";
import ProductCard from "../components/ProductCard";
import productThumb1 from "/product-thumb-1.jpeg"; 
import Section from "../components/Section";

const HomePage = () => {
    return (
        <Layout>
            <Section>
                <ProductCard name="Tênis teste 1" image={productThumb1} price={200}/>
                <ProductCard name="Tênis teste 2" image={productThumb1} price={200} priceDiscount={149.99} />
            </Section>
        </Layout>
    );
};

export default HomePage;