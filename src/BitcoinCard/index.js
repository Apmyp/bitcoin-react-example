import React from "react";
import styled from "styled-components";
import bitcoin from "./bitcoin.png";

const Card = styled.div``;

const Description = styled.div`
  border: 1px solid #ebebeb;
  background-color: #fff;
  font-size: 7.5rem;
  padding: 2.5rem 2rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
`;

const Price = styled.p`
  margin: 0;
`;

const Image = styled.img`
  width: 120px;
  margin-right: 1rem;
`;

const Hint = styled.p`
  font-size: 1.875rem;
  color: #ddd;
  margin: 1rem 0 0 0;
  font-weight: 100;
`;

export default ({ price }) => {
  return (
    <Card>
      <Description>
        <Image src={bitcoin} alt="Bitcoin logo" />
        <Price>${price.toFixed(2)}</Price>
      </Description>
      <Hint>Realtime bitcoin rate</Hint>
    </Card>
  );
};
