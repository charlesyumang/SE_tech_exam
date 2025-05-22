import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/product-api";
import "./Home.css";
import "antd/dist/reset.css";
import { Row, Col, Card, Pagination } from "antd";

const ProductData = {
  id: 0,
  title: "",
  description: "",
};

const { Meta } = Card;

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    fetchProducts(setProducts, setIsLoading);
  }, []);

  useEffect(() => {
    console.log(products[0]);
  }, [products]);
  return (
    <div
      style={{
        padding: "24px",
        width: "50%",
        height: "100px",
        margin: "auto",
      }}>
      <Row gutter={[16, 16]}>
        {paginatedProducts.map((product) => (
          <Col key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  style={{
                    height: "100px",
                    width: "100px",
                    margin: "5% auto",
                  }}
                />
              }
              style={{
                height: "240px",
                width: "200px",
              }}>
              <Meta title={product.title} description={"$" + product.price} />
              <p style={{ marginTop: "5%", fontWeight: "600" }}>
                {"Qty: " + product.rating.count}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Home;
