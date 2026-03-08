import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigation } from "react-router-dom";
import "./regionpage.css"
import Card from "../components/Card";
import axios from "axios";

const RegionPage = () => {

  const data2 = [
    {
      "id": 42426,
      "subCategory": "Topwear",
      "articleType": "Kurtas",
      "baseColour": "Sea Green",
      "season": "Summer",
      "year": 2012,
      "usage": "Ethnic",
      "link": "http://assets.myntassets.com/v1/images/style/properties/2e25195b2eaba31b89a991f2e0dbd532_images.jpg",
      "company": "Aurelia",
      "fabric": "linen",
      "fit": "fitted"
    },
    {
      "id": 56684,
      "subCategory": "Saree",
      "articleType": "Sarees",
      "baseColour": "Beige",
      "season": "Fall",
      "year": 2012,
      "usage": "Ethnic",
      "link": "http://assets.myntassets.com/v1/images/style/properties/Fabindia-Printed-Beige-Sari_b2b862ad19c18dc983c5cf843fe56bcc_images.jpg",
      "company": "Fabindia",
      "fabric": "chiffon",
      "fit": "embroidered"
    },
    {
      "id": 21173,
      "subCategory": "Topwear",
      "articleType": "Shirts",
      "baseColour": "Grey",
      "season": "Fall",
      "year": 2011,
      "usage": "Casual",
      "link": "http://assets.myntassets.com/v1/images/style/properties/sOliver-Women-Grey-Shirt_cefde0d6bd0b74888e9d34814be33deb_images.jpg",
      "company": "s.Oliver",
      "fabric": "modal",
      "fit": "regular"
    },
    {
      "id": 9832,
      "subCategory": "Topwear",
      "articleType": "Tshirts",
      "baseColour": "Orange",
      "season": "Fall",
      "year": 2011,
      "usage": "Casual",
      "link": "http://assets.myntassets.com/v1/images/style/properties/b4912a94db18a093e185d9e4c2649edf_images.jpg",
      "company": "Little",
      "fabric": "nylon",
      "fit": "boxy"
    },
    {
      "id": 39171,
      "subCategory": "Topwear",
      "articleType": "Kurtas",
      "baseColour": "Pink",
      "season": "Summer",
      "year": 2012,
      "usage": "Ethnic",
      "link": "http://assets.myntassets.com/v1/images/style/properties/cfdb8d86d2a58e31cf47ad9106a7cf27_images.jpg",
      "company": "Aneri",
      "fabric": "linen",
      "fit": "fitted"
    }
  ]
  
  
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastPath = pathSegments[pathSegments.length - 1];

  const [filterData, setFilterData] = useState([]);
  const [currentRegion, setCurrentRegion] = useState("");
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setCurrentRegion(lastPath); // Update currentEra when lastPath changes
  }, [lastPath]);
  
  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        location: currentRegion[0].toUpperCase() + currentRegion.slice(1),
        gender: "Women",
      });
      setArticles(response.data);
      
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };
  useEffect(() => {
    
  
    fetchData();
  }, [currentRegion]);
  

  return (
    <>
      <NavBar />
      {console.log(currentRegion)}
      {console.log(articles)}
      <div className="container">
      <div className="Card-Container">
      {articles.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
      </div>
    </>
  );
};

export default RegionPage;