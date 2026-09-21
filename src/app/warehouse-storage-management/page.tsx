import React from "react";
import type { Metadata } from "next";
import WarehouseStorageContent from "./WarehouseStorageContent";

export const metadata: Metadata = {
  title: "Warehouse & Storage Management - Global Relief Consult",
  description:
    "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
  alternates: {
    canonical:
      "https://globalreliefconsult.com/warehouse-storage-management/",
  },
  openGraph: {
    title: "Warehouse & Storage Management - Global Relief Consult",
    description:
      "is an international brand that trains, empowers and deploys projects and programmes under Sustainability, ESG, CSR, M & E and specializes in Empowerment Training Programmes, Leadership Trainings, Skills Acquisition, Capacity Building and Content Development.",
    url: "https://globalreliefconsult.com/warehouse-storage-management/",
    siteName: "Global Relief Consult",
    type: "article",
  },
};

export default function WarehouseStoragePage() {
  return <WarehouseStorageContent />;
}
