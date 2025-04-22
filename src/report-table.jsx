export default function ReportTable() {
    const customers = [
      {
        id: 1,
        name: "Elizabeth Lee",
        company: "AvatarSystems",
        orderValue: "$359",
        orderDate: "01/07/2023",
        status: "New",
      },
      {
        id: 2,
        name: "Carlos Garcia",
        company: "SinuousShift",
        orderValue: "$747",
        orderDate: "24/07/2023",
        status: "New",
      },
      {
        id: 3,
        name: "Elizabeth Bailey",
        company: "Prime Time Telecom",
        orderValue: "$564",
        orderDate: "08/08/2023",
        status: "In progress",
      },
      {
        id: 4,
        name: "Ryan Brown",
        company: "OmniTech Corporation",
        orderValue: "$541",
        orderDate: "31/08/2023",
        status: "In progress",
      },
      {
        id: 5,
        name: "Ryan Young",
        company: "DataStream Inc.",
        orderValue: "$769",
        orderDate: "01/05/2023",
        status: "Completed",
      },
      {
        id: 6,
        name: "Hailey Adams",
        company: "FlowRush",
        orderValue: "$922",
        orderDate: "10/06/2023",
        status: "Completed",
      },
    ];
  
    function getStatusBadge(status) {
      if (status === "New") {
        return (
          <span className="px-2 py-1 text-blue-500 border border-blue-200 bg-blue-50 rounded">
            New
          </span>
        );
      } else if (status === "In progress") {
        return (
          <span className="px-2 py-1 text-amber-500 border border-amber-200 bg-amber-50 rounded">
            In progress
          </span>
        );
      } else if (status === "Completed") {
        return (
          <span className="px-2 py-1 text-green-500 border border-green-200 bg-green-50 rounded">
            Completed
          </span>
        );
      }
      return null;
    }
  
    return (
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="w-10 px-4 py-3 text-left">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Value
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=32&width=32`}
                          width={32}
                          height={32}
                          alt={customer.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-medium">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{customer.company}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{customer.orderValue}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{customer.orderDate}</td>
                  <td className="px-4 py-3">
                    {getStatusBadge(customer.status)}
                  </td>
                  <td className="px-4 py-3">
                    <button className="h-8 w-8 p-0 bg-transparent text-gray-400">
                      <span className="h-4 w-4">✏️</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 flex items-center justify-between border-t">
          <div className="text-sm text-gray-500">63 results</div>
          <div className="flex gap-1">
            <button className="h-8 w-8 border border-gray-300 text-gray-600">
              &lt;
            </button>
            <button className="h-8 w-8 bg-pink-500 text-white border border-pink-500">
              1
            </button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">2</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">3</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">4</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">...</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">10</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">11</button>
            <button className="h-8 w-8 border border-gray-300 text-gray-600">
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
  }
  