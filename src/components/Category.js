import { Row, Col } from "react-bootstrap";

const Category = ({ filterCategory, allCategory }) => {
  const onFilter = (cat) => {
    // Filter By Category
    filterCategory(cat);
  };

  return (
    <Row className="mb-5 w-100">
      <Col className="d-flex justify-content-center">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <div key={Math.random()}>
                <button
                  onClick={() => onFilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد اصناف الأن</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
