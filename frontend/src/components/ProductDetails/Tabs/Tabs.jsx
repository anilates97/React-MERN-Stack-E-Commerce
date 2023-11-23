import { useState } from "react";
import Reviews from "../../Reviews/Reviews";
import "./Tabs.css";

const tabsArr = [
  {
    title: "Description",
    value: "desc",
  },
  {
    title: "Additional information",
    value: "info",
  },
  {
    title: "Reviews",
    value: "reviews",
  },
];

function Tabs({ singleProduct, setSingleProduct }) {
  const [activeTab, setActiveTab] = useState("desc");

  function handleTabClick(e, tab) {
    e.preventDefault();
    setActiveTab(tab);
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        {tabsArr.map((tabs, index) => (
          <li key={index}>
            <a
              href="#"
              className={`tab-button ${activeTab === tabs.value && "active"}`}
              onClick={(e) => handleTabClick(e, tabs.value)}
            >
              {tabs.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" && "active"
          }`}
          id="desc"
        >
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
          ></div>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" && "active"
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>
                    {singleProduct.sizes.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.sizes.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          setSingleProduct={setSingleProduct}
          singleProduct={singleProduct}
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
}

export default Tabs;
