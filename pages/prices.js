import { React, useState, useEffect } from "react";

export default function Prices() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://commodities-api.com/api/latest?access_key=po8j5ra4d3wj8r19kqjh5f72q89q2u08ik11eijd6c6ndiy7tfayts8u481u&base=EUR&symbols=RICE%2CWHEAT%2CSUGAR%2CCORN%2CWTIOIL%2CBRENTOIL%2CSOYBEAN%2CCOFFEE%2CXAU%2CXAG%2CXPD%2CXPT%2CXRH%2CRUBBER%2CETHANOL%2CCPO%2CNG%2CLUMBER%2CCOTTON%2CROBUSTA%2CCOCOA"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  /*  return (
    <div style={{ margin: "3rem", textAlign: "center" }}>
      <div>Hello prices!</div>
      <div>{data.data.rates.BRENTOIL}</div>
    </div>
  ); */
  return customTable(data.data.rates);
}

const customTable = function (priceData) {
  return (
    <table style={{ margin: "0 auto", textAlign: "center", padding: "3rem" }}>
      <tr>
        <td>BRENTOIL</td>
        <td>{priceData.BRENTOIL}</td>
      </tr>
      <tr>
        <td>COCOA</td>
        <td>{priceData.COCOA}</td>
      </tr>
      <tr>
        <td>COFFEE</td>
        <td>{priceData.COFFEE}</td>
      </tr>
      <tr>
        <td>ETHANOL</td>
        <td>{priceData.ETHANOL}</td>
      </tr>
    </table>
  );
};

/* export async function getServerSideProps(context) {
  const res = await fetch(
    `https://commodities-api.com/api/latest?access_key=po8j5ra4d3wj8r19kqjh5f72q89q2u08ik11eijd6c6ndiy7tfayts8u481u&base=EUR&symbols=RICE%2CWHEAT%2CSUGAR%2CCORN%2CWTIOIL%2CBRENTOIL%2CSOYBEAN%2CCOFFEE%2CXAU%2CXAG%2CXPD%2CXPT%2CXRH%2CRUBBER%2CETHANOL%2CCPO%2CNG%2CLUMBER%2CCOTTON%2CROBUSTA%2CCOCOA`
  );
  const resData = await res.json();

  return {
    props: { pData: resData }, // will be passed to the page component as props
  };
} */
/* 
export async function getStaticProps() {
  console.log("getStaticProps");

  const url =
    "https://commodities-api.com/api/latest?access_key=po8j5ra4d3wj8r19kqjh5f72q89q2u08ik11eijd6c6ndiy7tfayts8u481u&base=EUR&symbols=RICE%2CWHEAT%2CSUGAR%2CCORN%2CWTIOIL%2CBRENTOIL%2CSOYBEAN%2CCOFFEE%2CXAU%2CXAG%2CXPD%2CXPT%2CXRH%2CRUBBER%2CETHANOL%2CCPO%2CNG%2CLUMBER%2CCOTTON%2CROBUSTA%2CCOCOA";
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  console.log("Response data", data);

  return {
    props: {
      pData: data,
    },
  };
}
 */
