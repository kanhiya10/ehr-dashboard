const Header = () => {
return (
<header className="bg-white shadow-md p-4 flex justify-between items-center">
<h1 className="text-2xl font-semibold">Dashboard</h1>
<div className="flex items-center space-x-4">
<span className="text-gray-600">Dr. Jane Doe</span>
<img src="https://via.placeholder.com/40" alt="avatar" className="w-10 h-10 rounded-full" />
</div>
</header>
);
};


export default Header;