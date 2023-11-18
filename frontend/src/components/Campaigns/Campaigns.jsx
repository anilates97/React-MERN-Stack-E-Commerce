import CampaignItem from "./CampaignItem";
import "./Campaigns.css";

function Campaigns() {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignItem />
        </div>
        <div className="campaigns-wrapper">
          <CampaignItem />
        </div>
      </div>
    </section>
  );
}

export default Campaigns;
