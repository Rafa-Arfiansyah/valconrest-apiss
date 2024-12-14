import React from "react";
import Link from "next/link";

const PurchasingHistory = () => {
  const purchaseHistory = [
    {
      id: 1,
      plan: "7 Hari",
      price: "Rp 10.000",
      date: "2023-10-01",
      status: "Aktif",
      transactionId: "TRX-001"
    },
    {
      id: 2,
      plan: "14 Hari",
      price: "Rp 18.000", 
      date: "2023-10-15",
      status: "Aktif",
      transactionId: "TRX-002"
    },
    {
      id: 3,
      plan: "1 Bulan",
      price: "Rp 30.000",
      date: "2023-09-20", 
      status: "Kadaluarsa",
      transactionId: "TRX-003"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Riwayat Pembelian</h1>
        <Link 
          href="/pricing" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Kembali ke Pricing
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="py-3 px-4 border-b text-left">ID Transaksi</th>
              <th className="py-3 px-4 border-b text-left">Paket</th>
              <th className="py-3 px-4 border-b text-left">Harga</th>
              <th className="py-3 px-4 border-b text-left">Tanggal Pembelian</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
              <th className="py-3 px-4 border-b text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((purchase) => (
              <tr 
                key={purchase.id} 
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="py-3 px-4 border-b">{purchase.transactionId}</td>
                <td className="py-3 px-4 border-b">{purchase.plan}</td>
                <td className="py-3 px-4 border-b">{purchase.price}</td>
                <td className="py-3 px-4 border-b">{purchase.date}</td>
                <td className="py-3 px-4 border-b">
                  <span 
                    className={`
                      px-2 py-1 rounded-full text-xs 
                      ${purchase.status === 'Aktif' 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-red-200 text-red-800'
                      }
                    `}
                  >
                    {purchase.status}
                  </span>
                </td>
                <td className="py-3 px-4 border-b">
                  <button className="text-blue-500 hover:underline">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasingHistory;