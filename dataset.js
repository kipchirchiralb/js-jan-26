const dataset = {
  farm: {
    name: "EldoGreen Seedling Farm",
    location: "Eastern Avenue, Eldoret, Kenya",
    contact: {
      email: "info@eldogreen.co.ke",
      phone: "0112 006 932",
    },
    established: "2020-03-15",
  },
  seedlings: [
    {
      id: 1,
      species: "Acacia xanthophloea",
      common_name: "Fever Tree",
      category: "Tree",
      growth_stage: "Sapling",
      price_kes: 150,
      stock: 200,
      attributes: {
        height_cm: 30,
        sunlight: "Full Sun",
        water_needs: "Moderate",
        soil_type: ["Loamy", "Sandy"],
      },
      supplier: {
        name: "Eldoret Nursery",
        location: "Eldoret",
      },
    },
    {
      id: 2,
      species: "Moringa oleifera",
      common_name: "Moringa",
      category: "Medicinal",
      growth_stage: "Seedling",
      price_kes: 80,
      stock: 500,
      attributes: {
        height_cm: 15,
        sunlight: "Partial Sun",
        water_needs: "Low",
        soil_type: ["Clay", "Loamy"],
      },
      supplier: {
        name: "Rift Valley Growers",
        location: "Nakuru",
      },
    },
    {
      id: 3,
      species: "Hibiscus rosa-sinensis",
      common_name: "Hibiscus",
      category: "Ornamental",
      growth_stage: "Mature",
      price_kes: 200,
      stock: 100,
      attributes: {
        height_cm: 50,
        sunlight: "Full Sun",
        water_needs: "High",
        soil_type: ["Loamy"],
      },
      supplier: {
        name: "Kenya Blooms",
        location: "Nairobi",
      },
    },
  ],
  orders: [
    {
      order_id: "ORD001",
      customer: {
        id: 101,
        name: "Jane Wambui",
        email: "jane.wambui@gmail.com",
        region: "Uasin Gishu",
      },
      order_date: "2025-07-10",
      items: [
        { seedling_id: 1, quantity: 10, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 20, unit_price_kes: 80 },
      ],
      status: "Completed",
      total_kes: 3100,
    },
    {
      order_id: "ORD002",
      customer: {
        id: 102,
        name: "Peter Kamau",
        email: "peter.kamau@yahoo.com",
        region: "Nakuru",
      },
      order_date: "2025-07-12",
      items: [{ seedling_id: 3, quantity: 5, unit_price_kes: 200 }],
      status: "Pending",
      total_kes: 1000,
    },
    {
      order_id: "ORD003",
      customer: {
        id: 103,
        name: "Grace Nyambura",
        email: "grace.nyambura@example.com",
        region: "Nairobi",
      },
      order_date: "2025-07-11",
      items: [{ seedling_id: 2, quantity: 15, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 1200,
    },
    {
      order_id: "ORD004",
      customer: {
        id: 104,
        name: "Samuel Ondieki",
        email: "samuel.ondieki@example.com",
        region: "Kisumu",
      },
      order_date: "2025-07-13",
      items: [{ seedling_id: 1, quantity: 20, unit_price_kes: 150 }],
      status: "Shipped",
      total_kes: 3000,
    },
    {
      order_id: "ORD005",
      customer: {
        id: 105,
        name: "Alex Mutua",
        email: "alex.mutua@example.com",
        region: "Machakos",
      },
      order_date: "2025-07-14",
      items: [{ seedling_id: 3, quantity: 8, unit_price_kes: 200 }],
      status: "Processing",
      total_kes: 1600,
    },
    {
      order_id: "ORD006",
      customer: {
        id: 106,
        name: "Diana Njeri",
        email: "diana.njeri@example.com",
        region: "Meru",
      },
      order_date: "2025-07-14",
      items: [
        { seedling_id: 1, quantity: 7, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 13, unit_price_kes: 80 },
      ],
      status: "Completed",
      total_kes: 2210,
    },
    {
      order_id: "ORD007",
      customer: {
        id: 107,
        name: "Thomas Achieng",
        email: "thomas.achieng@example.com",
        region: "Mombasa",
      },
      order_date: "2025-07-15",
      items: [{ seedling_id: 2, quantity: 20, unit_price_kes: 80 }],
      status: "Cancelled",
      total_kes: 1600,
    },
    {
      order_id: "ORD008",
      customer: {
        id: 108,
        name: "Linda Cherono",
        email: "linda.cherono@example.com",
        region: "Nyeri",
      },
      order_date: "2025-07-16",
      items: [{ seedling_id: 3, quantity: 12, unit_price_kes: 200 }],
      status: "Completed",
      total_kes: 2400,
    },
    {
      order_id: "ORD009",
      customer: {
        id: 109,
        name: "Kevin Ouma",
        email: "kevin.ouma@example.com",
        region: "Embu",
      },
      order_date: "2025-07-17",
      items: [{ seedling_id: 1, quantity: 14, unit_price_kes: 150 }],
      status: "Shipped",
      total_kes: 2100,
    },
    {
      order_id: "ORD010",
      customer: {
        id: 110,
        name: "Mary Wango",
        email: "mary.wango@example.com",
        region: "Nairobi",
      },
      order_date: "2025-07-18",
      items: [
        { seedling_id: 2, quantity: 9, unit_price_kes: 80 },
        { seedling_id: 3, quantity: 4, unit_price_kes: 200 },
      ],
      status: "Processing",
      total_kes: 1520,
    },
    {
      order_id: "ORD011",
      customer: {
        id: 111,
        name: "Charles Mwangi",
        email: "charles.mwangi@example.com",
        region: "Nakuru",
      },
      order_date: "2025-07-19",
      items: [{ seedling_id: 1, quantity: 11, unit_price_kes: 150 }],
      status: "Completed",
      total_kes: 1650,
    },
    {
      order_id: "ORD012",
      customer: {
        id: 112,
        name: "Ruth Karanja",
        email: "ruth.karanja@example.com",
        region: "Kericho",
      },
      order_date: "2025-07-20",
      items: [
        { seedling_id: 2, quantity: 18, unit_price_kes: 80 },
        { seedling_id: 3, quantity: 1, unit_price_kes: 200 },
      ],
      status: "Completed",
      total_kes: 1640,
    },
    {
      order_id: "ORD013",
      customer: {
        id: 113,
        name: "Peter Opiyo",
        email: "peter.opiyo@example.com",
        region: "Kitale",
      },
      order_date: "2025-07-20",
      items: [
        { seedling_id: 1, quantity: 5, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 7, unit_price_kes: 80 },
      ],
      status: "Pending",
      total_kes: 1190,
    },
    {
      order_id: "ORD014",
      customer: {
        id: 114,
        name: "Alice Wairimu",
        email: "alice.wairimu@example.com",
        region: "Nairobi",
      },
      order_date: "2025-07-21",
      items: [{ seedling_id: 3, quantity: 9, unit_price_kes: 200 }],
      status: "Completed",
      total_kes: 1800,
    },
    {
      order_id: "ORD015",
      customer: {
        id: 115,
        name: "Daniel Oduor",
        email: "daniel.odour@example.com",
        region: "Mombasa",
      },
      order_date: "2025-07-22",
      items: [{ seedling_id: 2, quantity: 10, unit_price_kes: 80 }],
      status: "Processing",
      total_kes: 800,
    },
    {
      order_id: "ORD016",
      customer: {
        id: 116,
        name: "Faith Nyokabi",
        email: "faith.nyokabi@example.com",
        region: "Embu",
      },
      order_date: "2025-07-22",
      items: [
        { seedling_id: 1, quantity: 8, unit_price_kes: 150 },
        { seedling_id: 3, quantity: 3, unit_price_kes: 200 },
      ],
      status: "Shipped",
      total_kes: 1600,
    },
    {
      order_id: "ORD017",
      customer: {
        id: 117,
        name: "Brenda Chebet",
        email: "brenda.chebet@example.com",
        region: "Nyeri",
      },
      order_date: "2025-07-23",
      items: [{ seedling_id: 3, quantity: 14, unit_price_kes: 200 }],
      status: "Completed",
      total_kes: 2800,
    },
    {
      order_id: "ORD018",
      customer: {
        id: 118,
        name: "Michael Otieno",
        email: "michael.otieno@example.com",
        region: "Kisumu",
      },
      order_date: "2025-07-24",
      items: [{ seedling_id: 2, quantity: 12, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 960,
    },
    {
      order_id: "ORD019",
      customer: {
        id: 119,
        name: "Grace Achieng",
        email: "grace.achieng@example.com",
        region: "Meru",
      },
      order_date: "2025-07-24",
      items: [
        { seedling_id: 1, quantity: 6, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 6, unit_price_kes: 80 },
      ],
      status: "Pending",
      total_kes: 1620,
    },
    {
      order_id: "ORD020",
      customer: {
        id: 120,
        name: "Brian Njuguna",
        email: "brian.njuguna@example.com",
        region: "Machakos",
      },
      order_date: "2025-07-25",
      items: [{ seedling_id: 3, quantity: 4, unit_price_kes: 200 }],
      status: "Shipped",
      total_kes: 800,
    },
    {
      order_id: "ORD021",
      customer: {
        id: 121,
        name: "Josephine Wangari",
        email: "josephine.wangari@example.com",
        region: "Nairobi",
      },
      order_date: "2025-07-25",
      items: [{ seedling_id: 2, quantity: 16, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 1280,
    },
    {
      order_id: "ORD022",
      customer: {
        id: 122,
        name: "David Karanja",
        email: "david.karanja@example.com",
        region: "Nakuru",
      },
      order_date: "2025-07-26",
      items: [{ seedling_id: 1, quantity: 13, unit_price_kes: 150 }],
      status: "Completed",
      total_kes: 1950,
    },
    {
      order_id: "ORD023",
      customer: {
        id: 123,
        name: "Martha Kamau",
        email: "martha.kamau@example.com",
        region: "Meru",
      },
      order_date: "2025-07-27",
      items: [{ seedling_id: 3, quantity: 10, unit_price_kes: 200 }],
      status: "Processing",
      total_kes: 2000,
    },
    {
      order_id: "ORD024",
      customer: {
        id: 124,
        name: "Patrick Matete",
        email: "patrick.matete@example.com",
        region: "Mombasa",
      },
      order_date: "2025-07-28",
      items: [
        { seedling_id: 2, quantity: 8, unit_price_kes: 80 },
        { seedling_id: 1, quantity: 7, unit_price_kes: 150 },
      ],
      status: "Shipped",
      total_kes: 1460,
    },
    {
      order_id: "ORD025",
      customer: {
        id: 125,
        name: "Esther Mwende",
        email: "esther.mwende@example.com",
        region: "Nyeri",
      },
      order_date: "2025-07-28",
      items: [
        { seedling_id: 1, quantity: 4, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 14, unit_price_kes: 80 },
      ],
      status: "Completed",
      total_kes: 1720,
    },
    {
      order_id: "ORD026",
      customer: {
        id: 126,
        name: "Kevin Murage",
        email: "kevin.murage@example.com",
        region: "Kenya",
      },
      order_date: "2025-07-29",
      items: [{ seedling_id: 3, quantity: 3, unit_price_kes: 200 }],
      status: "Pending",
      total_kes: 600,
    },
    {
      order_id: "ORD027",
      customer: {
        id: 127,
        name: "Joyce Naliaka",
        email: "joyce.naliaka@example.com",
        region: "Embu",
      },
      order_date: "2025-07-29",
      items: [{ seedling_id: 2, quantity: 11, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 880,
    },
    {
      order_id: "ORD028",
      customer: {
        id: 128,
        name: "Eric Mwangi",
        email: "eric.mwangi@example.com",
        region: "Nairobi",
      },
      order_date: "2025-07-30",
      items: [
        { seedling_id: 1, quantity: 12, unit_price_kes: 150 },
        { seedling_id: 3, quantity: 5, unit_price_kes: 200 },
      ],
      status: "Processing",
      total_kes: 2600,
    },
    {
      order_id: "ORD029",
      customer: {
        id: 129,
        name: "Nelly Ouma",
        email: "nelly.ouma@example.com",
        region: "Machakos",
      },
      order_date: "2025-07-30",
      items: [{ seedling_id: 3, quantity: 7, unit_price_kes: 200 }],
      status: "Shipped",
      total_kes: 1400,
    },
    {
      order_id: "ORD030",
      customer: {
        id: 130,
        name: "Allan Kimani",
        email: "allan.kimani@example.com",
        region: "Meru",
      },
      order_date: "2025-07-31",
      items: [{ seedling_id: 2, quantity: 20, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 1600,
    },
    {
      order_id: "ORD031",
      customer: {
        id: 131,
        name: "Mercy Wambui",
        email: "mercy.wambui@example.com",
        region: "Nairobi",
      },
      order_date: "2025-08-01",
      items: [{ seedling_id: 1, quantity: 9, unit_price_kes: 150 }],
      status: "Completed",
      total_kes: 1350,
    },
    {
      order_id: "ORD032",
      customer: {
        id: 132,
        name: "Harrison Otieno",
        email: "harrison.otieno@example.com",
        region: "Kisumu",
      },
      order_date: "2025-08-01",
      items: [
        { seedling_id: 1, quantity: 6, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 10, unit_price_kes: 80 },
      ],
      status: "Shipped",
      total_kes: 1740,
    },
    {
      order_id: "ORD033",
      customer: {
        id: 133,
        name: "Lillian Achieng",
        email: "lillian.achieng@example.com",
        region: "Nakuru",
      },
      order_date: "2025-08-02",
      items: [{ seedling_id: 3, quantity: 6, unit_price_kes: 200 }],
      status: "Pending",
      total_kes: 1200,
    },
    {
      order_id: "ORD034",
      customer: {
        id: 134,
        name: "Dennis Kariuki",
        email: "dennis.kariuki@example.com",
        region: "Nyeri",
      },
      order_date: "2025-08-02",
      items: [{ seedling_id: 2, quantity: 14, unit_price_kes: 80 }],
      status: "Completed",
      total_kes: 1120,
    },
    {
      order_id: "ORD035",
      customer: {
        id: 135,
        name: "Esther Ndegwa",
        email: "esther.ndegwa@example.com",
        region: "Meru",
      },
      order_date: "2025-08-03",
      items: [{ seedling_id: 1, quantity: 15, unit_price_kes: 150 }],
      status: "Completed",
      total_kes: 2250,
    },
    {
      order_id: "ORD036",
      customer: {
        id: 136,
        name: "Peter Kuria",
        email: "peter.kuria@example.com",
        region: "Mombasa",
      },
      order_date: "2025-08-03",
      items: [
        { seedling_id: 3, quantity: 2, unit_price_kes: 200 },
        { seedling_id: 2, quantity: 12, unit_price_kes: 80 },
      ],
      status: "Processing",
      total_kes: 1360,
    },
    {
      order_id: "ORD037",
      customer: {
        id: 137,
        name: "Faith Mueni",
        email: "faith.mueni@example.com",
        region: "Kitale",
      },
      order_date: "2025-08-04",
      items: [{ seedling_id: 2, quantity: 18, unit_price_kes: 80 }],
      status: "Shipped",
      total_kes: 1440,
    },
    {
      order_id: "ORD038",
      customer: {
        id: 138,
        name: "Kennedy Otieno",
        email: "kennedy.otieno@example.com",
        region: "Nairobi",
      },
      order_date: "2025-08-04",
      items: [
        { seedling_id: 1, quantity: 10, unit_price_kes: 150 },
        { seedling_id: 3, quantity: 4, unit_price_kes: 200 },
      ],
      status: "Completed",
      total_kes: 2300,
    },
    {
      order_id: "ORD039",
      customer: {
        id: 139,
        name: "Janet Adera",
        email: "janet.adera@example.com",
        region: "Nakuru",
      },
      order_date: "2025-08-05",
      items: [{ seedling_id: 3, quantity: 10, unit_price_kes: 200 }],
      status: "Pending",
      total_kes: 2000,
    },
    {
      order_id: "ORD040",
      customer: {
        id: 140,
        name: "Victor Ochieng",
        email: "victor.ochieng@example.com",
        region: "Nyeri",
      },
      order_date: "2025-08-06",
      items: [
        { seedling_id: 1, quantity: 2, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 8, unit_price_kes: 80 },
      ],
      status: "Completed",
      total_kes: 1060,
    },
    {
      order_id: "ORD041",
      customer: {
        id: 141,
        name: "Sandra Anyango",
        email: "sandra.anyango@example.com",
        region: "Meru",
      },
      order_date: "2025-08-06",
      items: [
        { seedling_id: 2, quantity: 6, unit_price_kes: 80 },
        { seedling_id: 3, quantity: 6, unit_price_kes: 200 },
      ],
      status: "Processing",
      total_kes: 1560,
    },
    {
      order_id: "ORD042",
      customer: {
        id: 142,
        name: "Timothy Mwenda",
        email: "timothy.mwenda@example.com",
        region: "Machakos",
      },
      order_date: "2025-08-07",
      items: [
        { seedling_id: 1, quantity: 4, unit_price_kes: 150 },
        { seedling_id: 2, quantity: 3, unit_price_kes: 80 },
      ],
      status: "Completed",
      total_kes: 840,
    },
    {
      order_id: "ORD043",
      customer: {
        id: 143,
        name: "Nobu Angwenyi",
        email: "nobu.angwenyi@example.com",
        region: "Mombasa",
      },
      order_date: "2025-08-07",
      items: [{ seedling_id: 3, quantity: 5, unit_price_kes: 200 }],
      status: "Completed",
      total_kes: 1000,
    },
    {
      order_id: "ORD044",
      customer: {
        id: 144,
        name: "Annie Wanjiru",
        email: "annie.wanjiru@example.com",
        region: "Nairobi",
      },
      order_date: "2025-08-08",
      items: [{ seedling_id: 1, quantity: 17, unit_price_kes: 150 }],
      status: "Shipped",
      total_kes: 2550,
    },
    {
      order_id: "ORD045",
      customer: {
        id: 145,
        name: "Eric Kibet",
        email: "eric.kibet@example.com",
        region: "Nyeri",
      },
      order_date: "2025-08-08",
      items: [
        { seedling_id: 2, quantity: 10, unit_price_kes: 80 },
        { seedling_id: 3, quantity: 8, unit_price_kes: 200 },
      ],
      status: "Pending",
      total_kes: 2600,
    },
  ],
};

// write a function to calculate the total sales for the orders

function getTotalSales() {
  const orders = dataset.orders;
  let totalSales = 0;
  for (let index = 0; index < orders.length; index++) {
    console.log(totalSales);
    totalSales = totalSales + orders[index].total_kes;
  }
  return totalSales;
}

console.log(getTotalSales());

console.log(dataset.orders.reduce((accum, curr) => accum + curr.total_kes, 0));

// who is the suppolier for moringa seedlings
// console.log(dataset.seedlings[1].supplier.name);

// total quantity of the first order
console.log(
  dataset.orders[0].items[0].quantity + dataset.orders[0].items[1].quantity,
); //30
// email
// console.log(dataset.farm.contact.email);
// console.log(dataset.seedlings[1].price_kes); // the price of one moringa seedling

/**
 QUESTIONS
- Basic Property Access: What is the name of the farm?
- Nested Object Access: What is the phone number listed in the farm's contact information?

- Array Index Access: What is the species name of the second seedling in the seedlings array?
- Nested Array and Object: What is the sunlight requirement for the attributes of the third seedling?
- Array of Objects: How many items are in stock for the seedling with the common name "Moringa"?
- Nested Array Access: What is the quantity ordered of the seedling with seedling_id 1 in the first order (ORD001)?
- Deep Nested Access: What is the email address of the customer who placed the order with order_id "ORD002"?

- Array and Object Combination: What is the supplier location for the seedling with id 1?
- Nested Array Filtering: What is the total cost (in KES) of the order placed by the customer named "Jane Wambui"?
- Complex Nested Access: What are the soil types suitable for the seedling with category "Ornamental"?
 */
