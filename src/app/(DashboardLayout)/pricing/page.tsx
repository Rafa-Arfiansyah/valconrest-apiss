import React from "react";

const PricingPage = () => {
  const pricingPlans = [
    {
      duration: "7 Hari",
      price: "Rp 10.000",
      features: [
        "Akses ke semua fitur",
        "5000 request/day",
        "Dukungan teknis",
        "Pembaruan otomatis",
      ],
    },
    {
      duration: "14 Hari",
      price: "Rp 18.000",
      features: [
        "Akses ke semua fitur",
        "7000 request/day",
        "Dukungan teknis",
        "Pembaruan otomatis",
        "Prioritas bantuan",
      ],
    },
    {
      duration: "1 Bulan",
      price: "Rp 30.000",
      features: [
        "Akses ke semua fitur",
        "10000 request/day",
        "Dukungan teknis",
        "Pembaruan otomatis",
        "Prioritas bantuan",
        "Diskon untuk perpanjangan",
      ],
    },
  ];

  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className="bg-white dark:bg-darkgray rounded-lg shadow-md p-6 flex flex-col"
    >
      <h6 className="text-xl font-bold mb-4">{plan.duration}</h6>
      <div className="text-4xl font-bold mb-4">{plan.price}</div>
      <ul className="mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-auto">
        Pilih Paket
      </button>
    </div>
  ))}
</div>

    </>
  );
};

export default PricingPage;