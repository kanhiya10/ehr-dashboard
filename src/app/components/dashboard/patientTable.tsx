const PatientTable = () => {
const patients = [
{ id: 1, name: "John Doe", age: 45, condition: "Diabetes" },
{ id: 2, name: "Mary Smith", age: 29, condition: "Asthma" },
{ id: 3, name: "James Johnson", age: 60, condition: "Hypertension" },
];


return (
<div className="bg-white rounded-lg shadow overflow-hidden">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
{patients.map((patient) => (
<tr key={patient.id}>
<td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
<td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
<td className="px-6 py-4 whitespace-nowrap">{patient.condition}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};


export default PatientTable;