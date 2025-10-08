import React, { useEffect, useState } from "react";

const VisitsCounter = ({ 
    scope = "month", 
    domain, path = "/visits.php" 
}) => {
  const [visits, setVisits] = useState("—");

  useEffect(() => {
    const qs = new URLSearchParams();
    if (scope === "all") qs.set("scope", "all");
    if (domain) qs.set("domain", domain);
    const url = `${path}${qs.toString() ? `?${qs}` : ""}`;

    fetch(url)
      .then((r) => r.json())
      .then((d) => setVisits(new Intl.NumberFormat().format(d?.visits ?? 0)))
      .catch(() => setVisits("NA"));
  }, [scope, domain, path]);

  return <div>Total Visits: {visits}</div>;
};

export default VisitsCounter;
