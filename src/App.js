import "./App.css";
import UserTab from "./UserTab";
import PartnerTab from "./PartnerTab";
import React, { useState, useEffect } from "react";

function App() {
  const [totalCustomers, setTotalCustomers] = useState(null);
  const [percentageDiffCustomers, setPercentageDiffCustomers] = useState(null);
  const [totalPartners, setTotalPartners] = useState(null);
  const [percentageDiffPartners, setPercentageDiffPartners] = useState(null);
  const [totalOrders, setTotalOrders] = useState(null);
  const [percentageDiffOrders, setPercentageDiffOrders] = useState(null);
  const [totalDeliveredOrders, setTotalDeliveredOrders] = useState(null);
  const [percentageDiffDeliveredOrders, setPercentageDiffDeliveredOrders] =
    useState(null);

  const fetchTotalCustomers = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/FetchTotalCustomers?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
        method: "GET",
        mmode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setTotalCustomers(data);
    } catch {
      setTotalCustomers("N/A");
    }
  };

  const fetchPercentageDiffCustomers = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/PercentageDifferenceRegisteredCustomers?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
        method: "GET",
        mmode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setPercentageDiffCustomers(data);
    } catch {
      setPercentageDiffCustomers("N/A");
    }
  };

  const fetchTotalPartners = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/FetchTotalPartners?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setTotalPartners(data);
    } catch {
      setTotalPartners("N/A");
    }
  };

  const fetchPercentageDiffPartners = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/PercentageDifferenceRegisteredPartners?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
        method: "GET",
        mmode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setPercentageDiffPartners(data);
    } catch {
      setPercentageDiffPartners("N/A");
    }
  };

  const fetchTotalOrders = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/FetchTotalOrders?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setTotalOrders(data);
    } catch {
      setTotalOrders("N/A");
    }
  };

  const fetchPercentageDiffOrders = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/PercentageDifferenceOrders?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
        method: "GET",
        mmode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setPercentageDiffOrders(data);
    } catch {
      setPercentageDiffOrders("N/A");
    }
  };

  const fetchTotalDeliveredOrders = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/FetchTotalDeliveredOrders?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setTotalDeliveredOrders(data);
    } catch {
      setTotalDeliveredOrders("N/A");
    }
  };

  const fetchPercentageDiffDeliveredOrders = async () => {
    try {
      const apiEndpoint =
        "http://afrikankitchen-001-site1.gtempurl.com/api/Main/PercentageDifferenceDeliveredOrders?privatekey=12345";
      const response = await fetch(apiEndpoint, {
        referrerPolicy: "unsafe-url",
        method: "GET",
        mmode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      setPercentageDiffDeliveredOrders(data);
    } catch {
      setPercentageDiffDeliveredOrders("N/A");
    }
  };

  useEffect(() => {
    fetchTotalCustomers();
    fetchPercentageDiffCustomers();

    fetchTotalPartners();
    fetchPercentageDiffPartners();

    fetchTotalOrders();
    fetchPercentageDiffOrders();

    fetchTotalDeliveredOrders();
    fetchPercentageDiffDeliveredOrders();
  }, []);

  const [userTabStatus, setUserTabStatus] = useState(
    "container tab-pane active pt-5"
  );
  const [userTabBtnStatus, setUserTabBtnStatus] = useState("nav-link active");
  const [partnerTabStatus, setPartnerTabStatus] = useState(
    "container tab-pane fade pt-5"
  );
  const [partnerTabBtnStatus, setPartnerTabBtnStatus] = useState("nav-link");
  const [selectedTab, setSelectedTab] = useState("user");

  const changeClass = () => {
    // Toggle between 'default' and 'active' classes
    setUserTabStatus(
      selectedTab === "partner"
        ? "container tab-pane active pt-5"
        : "container tab-pane fade pt-5"
    );
    setUserTabBtnStatus(
      selectedTab === "partner" ? "nav-link active" : "nav-link"
    );
    setPartnerTabStatus(
      selectedTab === "partner"
        ? "container tab-pane fade pt-5"
        : "container tab-pane active pt-5"
    );
    setPartnerTabBtnStatus(
      selectedTab === "partner" ? "nav-link" : "nav-link active"
    );
    setSelectedTab(selectedTab === "partner" ? "user" : "partner");
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <script type="module" src="https://unpkg.com/feather-icons"></script>

      <div className="container-xxl pt-5">
        <h1 className="fw-bold">Admin</h1>
        <p className="h6 pt-3 text-muted">
          Track and manage your Users/Partners
        </p>
      </div>

      <div className="container-lg mt-5">
        <ul
          className="nav nav-pills mb-3 shadow-sm"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              href="#"
              className={userTabBtnStatus}
              id="pills-home-tab"
              style={{ backgroundColor: "transparent", color: "black" }}
              onClick={changeClass}
            >
              Users
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={partnerTabBtnStatus}
              id="pills-profile-tab"
              style={{ backgroundColor: "transparent", color: "black" }}
              onClick={changeClass}
            >
              Partners
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            id="pills-users"
            className={userTabStatus}
            role="tabpanel"
            aria-labelledby="pills-users-tab"
          >
            <UserTab
              totalCustomers={totalCustomers}
              percentageDiffCustomers={percentageDiffCustomers}
              totalOrders={totalOrders}
              percentageDiffOrders={percentageDiffOrders}
              totalDeliveredOrders={totalDeliveredOrders}
              percentageDiffDeliveredOrders={percentageDiffDeliveredOrders}
            />
          </div>
          <div
            id="pills-partners"
            className={partnerTabStatus}
            role="tabpanel"
            aria-labelledby="pills-partners-tab"
          >
            <PartnerTab
              totalPartners={totalPartners}
              percentageDiffPartners={percentageDiffPartners}
              totalOrders={totalOrders}
              percentageDiffOrders={percentageDiffOrders}
              totalDeliveredOrders={totalDeliveredOrders}
              percentageDiffDeliveredOrders={percentageDiffDeliveredOrders}
            />
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
      <script
        type="module"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      ></script>
      <script
        type="module"
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      ></script>
    </>
  );
}

export default App;
