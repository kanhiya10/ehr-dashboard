const Sidebar = () => {
return (
<aside className="w-64 bg-white shadow-lg p-4">
<h2 className="text-xl font-bold mb-6">EHR Dashboard</h2>
<nav className="space-y-4">
<a href="#" className="block text-gray-700 hover:text-blue-600">Patients</a>
<a href="#" className="block text-gray-700 hover:text-blue-600">Appointments</a>
<a href="#" className="block text-gray-700 hover:text-blue-600">Clinical</a>
<a href="#" className="block text-gray-700 hover:text-blue-600">Billing</a>
</nav>
</aside>
);
};


export default Sidebar;