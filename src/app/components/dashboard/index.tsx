import Sidebar from "./sidebar";
import Header from "./header";
import OverviewCards from "./overviewCards";
import PatientTable from "./patientTable";


const Dashboard = () => {
return (
<div className="flex h-screen bg-gray-100">
<Sidebar />
<div className="flex-1 flex flex-col">
<Header />
<main className="p-6 overflow-y-auto">
<OverviewCards />
<PatientTable />
</main>
</div>
</div>
);
};


export default Dashboard;