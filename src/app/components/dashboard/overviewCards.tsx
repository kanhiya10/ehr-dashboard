const OverviewCards = () => {
const cards = [
{ title: "Total Patients", value: 1280 },
{ title: "Appointments Today", value: 32 },
{ title: "Pending Lab Results", value: 12 },
{ title: "Outstanding Bills", value: "$4,500" },
];


return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
{cards.map((card, index) => (
<div key={index} className="bg-white p-6 rounded-lg shadow">
<h3 className="text-gray-600 mb-2">{card.title}</h3>
<p className="text-2xl font-bold">{card.value}</p>
</div>
))}
</div>
);
};


export default OverviewCards;