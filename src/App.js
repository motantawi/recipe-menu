import { Container } from "react-bootstrap";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // Get All Category without repeat
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  // Filter By Category
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  // Filter By Search
  const filterSearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body" dir="rtl">
      <NavBar filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category filterCategory={filterCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
