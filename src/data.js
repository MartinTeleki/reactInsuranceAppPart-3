const randomUserDataList = [
  {
    age: "26",
    amount: "8000",
    city: "Malešovice City",
    controlPassword: "1",
    email: "martin@example.com",
    firstName: "Martin",
    gender: "Male",
    id: "user_1",
    insuranceCode: "abcd-1234-efgh",
    insuranceNumber: "0123456789",
    insuranceSubject: "Martin's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "7000000",
    lastName: "Teleki",
    password: "1",
    phoneNumber: "604594711",
    termsAccepted: true,
    validityFrom: "21.9.2022",
    validityTo: "21.9.2023",
  },
  {
    age: "30",
    amount: "9000",
    city: "Praha",
    controlPassword: "1",
    email: "alice@example.com",
    firstName: "Alice",
    gender: "Female",
    id: "user_2",
    insuranceCode: "wxyz-5678-abcd",
    insuranceNumber: "9876543210",
    insuranceSubject: "Alice's Apartment",
    insuranceType: "Pojištění na byt",
    insuredAmount: "6000000",
    lastName: "Johnson",
    password: "1",
    phoneNumber: "1234567890",
    termsAccepted: false,
    validityFrom: "15.6.2022",
    validityTo: "15.6.2023",
  },
  {
    age: "35",
    amount: "8200",
    city: "Ostrava",
    controlPassword: "1",
    email: "susan@example.com",
    firstName: "Susan",
    gender: "Female",
    id: "user_4",
    insuranceCode: "ijkl-1234-efgh",
    insuranceNumber: "7654321098",
    insuranceSubject: "Susan's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "7500000",
    lastName: "Johnson",
    password: "1",
    phoneNumber: "8765432101",
    termsAccepted: true,
    validityFrom: "5.8.2022",
    validityTo: "5.8.2023",
  },
  {
    age: "28",
    amount: "9200",
    city: "Liberec",
    controlPassword: "1",
    email: "michael@example.com",
    firstName: "Michael",
    gender: "Male",
    id: "user_5",
    insuranceCode: "mnop-5678-abcd",
    insuranceNumber: "6543210987",
    insuranceSubject: "Michael's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "8000000",
    lastName: "Davis",
    password: "1",
    phoneNumber: "7654321098",
    termsAccepted: true,
    validityFrom: "12.12.2022",
    validityTo: "12.12.2023",
  },
  {
    age: "40",
    amount: "10000",
    city: "Plzeň",
    controlPassword: "1",
    email: "john@example.com",
    firstName: "John",
    gender: "Male",
    id: "user_6",
    insuranceCode: "qrst-1234-efgh",
    insuranceNumber: "5432109876",
    insuranceSubject: "John's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "9000000",
    lastName: "Brown",
    password: "1",
    phoneNumber: "6543210987",
    termsAccepted: true,
    validityFrom: "3.5.2022",
    validityTo: "3.5.2023",
  },
  {
    age: "32",
    amount: "7500",
    city: "Olomouc",
    controlPassword: "1",
    email: "lisa@example.com",
    firstName: "Lisa",
    gender: "Female",
    id: "user_7",
    insuranceCode: "uvwx-5678-abcd",
    insuranceNumber: "4321098765",
    insuranceSubject: "Lisa's Apartment",
    insuranceType: "Pojištění na byt",
    insuredAmount: "6200000",
    lastName: "Taylor",
    password: "1",
    phoneNumber: "7654321098",
    termsAccepted: true,
    validityFrom: "14.9.2022",
    validityTo: "14.9.2023",
  },
  {
    age: "45",
    amount: "9800",
    city: "České Budějovice",
    controlPassword: "1",
    email: "robert@example.com",
    firstName: "Robert",
    gender: "Male",
    id: "user_8",
    insuranceCode: "yzab-1234-efgh",
    insuranceNumber: "3210987654",
    insuranceSubject: "Robert's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "7800000",
    lastName: "Williams",
    password: "1",
    phoneNumber: "8765432101",
    termsAccepted: false,
    validityFrom: "8.7.2022",
    validityTo: "8.7.2023",
  },
  {
    age: "28",
    amount: "8800",
    city: "Brno",
    controlPassword: "1",
    email: "sarah@example.com",
    firstName: "Sarah",
    gender: "Female",
    id: "user_9",
    insuranceCode: "jklm-1234-efgh",
    insuranceNumber: "2109876543",
    insuranceSubject: "Sarah's Apartment",
    insuranceType: "Pojištění na byt",
    insuredAmount: "6600000",
    lastName: "Smith",
    password: "1",
    phoneNumber: "9876543210",
    termsAccepted: true,
    validityFrom: "10.11.2022",
    validityTo: "10.11.2023",
  },
  {
    age: "35",
    amount: "9200",
    city: "Ostrava",
    controlPassword: "1",
    email: "peter@example.com",
    firstName: "Peter",
    gender: "Male",
    id: "user_10",
    insuranceCode: "mnop-5678-abcd",
    insuranceNumber: "1098765432",
    insuranceSubject: "Peter's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "7400000",
    lastName: "Anderson",
    password: "1",
    phoneNumber: "8765432109",
    termsAccepted: true,
    validityFrom: "5.3.2022",
    validityTo: "5.3.2023",
  },
  {
    age: "42",
    amount: "10500",
    city: "Liberec",
    controlPassword: "1",
    email: "emily@example.com",
    firstName: "Emily",
    gender: "Female",
    id: "user_11",
    insuranceCode: "efgh-1234-ijkl",
    insuranceNumber: "9876543211",
    insuranceSubject: "Emily's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "8200000",
    lastName: "Davis",
    password: "1",
    phoneNumber: "7654321098",
    termsAccepted: false,
    validityFrom: "18.6.2022",
    validityTo: "18.6.2023",
  },
  {
    age: "42",
    amount: "10500",
    city: "Liberec",
    controlPassword: "1",
    email: "emila@example.com",
    firstName: "Emiles",
    gender: "Female",
    id: "user_12",
    insuranceCode: "efgh-1284-ijkl",
    insuranceNumber: "9876543241",
    insuranceSubject: "Emilyes's House",
    insuranceType: "Pojištění na dům",
    insuredAmount: "8200000",
    lastName: "Daves",
    password: "1",
    phoneNumber: "7654327098",
    termsAccepted: false,
    validityFrom: "18.6.2022",
    validityTo: "18.6.2023",
  },
];

const existingData = localStorage.getItem("evidenceTEST");
const existingDataList = existingData ? JSON.parse(existingData) : [];

if (existingDataList.length === 0) {
  existingDataList.push(...randomUserDataList);
  localStorage.setItem("evidenceTEST", JSON.stringify(existingDataList));
}

export default existingDataList;

console.log(existingDataList);