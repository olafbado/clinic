import {
  faStethoscope,
  faMicroscope,
  faHeartbeat,
  faTooth,
  faBrain,
  faUserMd,
  faHeart,
  faDiagnoses,
  faBone,
  faCapsules,
  faFlask,
  faUserNurse,
  faSun,
  faWorm,
  faAllergies,
  faCoffee,
  faDumbbell,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import LoremIpsum from "react-lorem-ipsum";

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Zdrowe nerki",
    icon: faHeart,
    description:
      "Przyjrzyj się kilku prostym zasadom, które pomogą Ci zadbać o swoje zdrowie poprzez odpowiednie nawyki żywieniowe.",
    category: "Nerki",
    text: <LoremIpsum p={5} />,
  },
  {
    id: 2,
    title: "Czerwona krew",
    icon: faDumbbell,
    description:
      "Dowiedz się, dlaczego regularne wykonywanie ćwiczeń fizycznych jest kluczowe dla utrzymania dobrego stanu zdrowia i samopoczucia.",
    category: "Krew",
    text: <LoremIpsum p={5} />,
  },
  {
    id: 3,
    title: "Nie dla cukru",
    icon: faBook,
    description:
      "Odkryj niezwykłe książki, które mogą zmienić Twoje życie i wpłynąć na Twoje myślenie.",
    category: "Krew",
    text: <LoremIpsum p={5} />,
  },
  {
    id: 4,
    title: "Kawa i jej wpływ na organizm",
    icon: faCoffee,
    description:
      "Przeczytaj o zaletach i wadach picia kawy oraz o wpływie kofeiny na Twój organizm.",
    category: "Krew",
    text: <LoremIpsum p={5} />,
  },
];

export const LAB_TESTS = [
  {
    id: 1,
    name: "Morfofunkcjonalne badanie nerek",
    icon: faStethoscope,
    price: 150,
    category: "Nerki",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 2,
    name: "Badanie krwi",
    icon: faHeartbeat,
    price: 80,
    category: "Krew",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 3,
    name: "Badanie moczu",
    icon: faFlask,
    price: 50,
    category: "Nerki",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 9,
    name: "Pakiet ogólny",
    icon: faMicroscope,
    price: 150,
    category: "Ogólne",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 4,
    name: "Badanie glukozy we krwi",
    icon: faUserNurse,
    price: 60,
    category: "Cukrzyca",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 5,
    name: "Badanie lipidogramu",
    icon: faHeart,
    price: 90,
    category: "Serce",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 6,
    name: "Badanie hormonów tarczycy",
    icon: faCapsules,
    price: 120,
    category: "Zaburzenia hormonalne",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 10,
    name: "Pakiet D3",
    icon: faSun,
    price: 120,
    category: "Witaminy",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 7,
    name: "Badanie próby wątrobowej",
    icon: faFlask,
    price: 70,
    category: "Wątroba",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 8,
    name: "Badanie PSA",
    icon: faStethoscope,
    price: 100,
    category: "Nerki",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 11,
    name: "Diagnostyka boleriozy",
    icon: faWorm,
    price: 120,
    category: "Ogólne",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
  {
    id: 12,
    name: "Pakiet alergik",
    icon: faAllergies,
    price: 80,
    category: "Ogólne",
    variants: ["Standard", "Rozszerzone"],
    description: <LoremIpsum p={2} />,
    selectedVariant: "Standard",
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Jan Kowalski",
    specialization: "Pediatra",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faStethoscope,
  },
  {
    id: 2,
    name: "Dr. Anna Nowak",
    specialization: "Laryngolog",
    hours: "09:00 - 17:00",
    days: "Środa - Czwarek",
    icon: faMicroscope,
  },
  {
    id: 3,
    name: "Dr. Michał Wiśniewski",
    specialization: "Kardiolog",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faHeartbeat,
  },
  {
    id: 4,
    name: "Dr. Elżbieta Dąbrowska",
    specialization: "Stomatolog",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Wtork",
    icon: faTooth,
  },
  {
    id: 5,
    name: "Dr. Piotr Nowakowski",
    specialization: "Neurolog",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faBrain,
  },
  {
    id: 6,
    name: "Dr. Maria Kaczmarek",
    specialization: "Nefrolog",
    hours: "09:00 - 20:00",
    days: "Wtorek - Piątek",
    icon: faHeart,
  },
  {
    id: 7,
    name: "Dr. Adam Nowak",
    specialization: "Chirurg",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faUserMd,
  },
  {
    id: 8,
    name: "Dr. Agnieszka Wiśniewska",
    specialization: "Diabetolog",
    hours: "09:00 - 20:00",
    days: "Wtorek - Piątek",
    icon: faDiagnoses,
  },
  {
    id: 9,
    name: "Dr. Paweł Kowalczyk",
    specialization: "Endokrynolog",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faHeartbeat,
  },
  {
    id: 10,
    name: "Dr. Piotr Kowalski",
    specialization: "Ortopeda",
    hours: "09:00 - 20:00",
    days: "Poniedziałek - Piątek",
    icon: faBone,
  },
];

export const PATIENT_DATA = {
  firstName: "Jan",
  lastName: "Kowalski",
  birthDate: "1980-01-01",
  gender: "Mężczyzna",
  phoneNumber: "123-456-789",
  address: "ul. Testowa 123, 00-000 Warszawa",
  email: "jan.kowalski@example.com",
  zipCode: "11-111",
  city: "Warszawa",
  street: "ul. Testowa 123",
  medicalHistory: ["Hiperlipidemia", "Nadciśnienie tętnicze"],
  medications: ["Atorwastatyna", "Ramipryl"],
  surgeries: ["Usunięcie wyrostka robaczkowego (2010)"],
  visits: [
    { date: "2024-05-15", time: "10:00", doctorId: 1 },
    { date: "2024-06-02", time: "14:30", doctorId: 2 },
  ],
  upcomingAppointments: [
    { date: "2024-05-15", time: "10:00", doctorId: 1 },
    { date: "2024-06-02", time: "14:30", doctorId: 2 },
  ],
  pastAppointments: [
    { date: "2024-04-20", time: "11:30", doctorId: 3 },
    { date: "2024-03-10", time: "09:00", doctorId: 4 },
  ],
  historicalTests: [
    {
      date: "2024-04-20",
      name: "Badanie krwi",
      results: {
        hemoglobin: 50,
        glucose: 90,
        cholesterol: 190,
      },
      doctorComment:
        "Wyniki są w normie. Kontynuuj zdrową dietę i regularne ćwiczenia.",
      result: "POZYTYWNY",
    },
    {
      date: "2024-03-10",
      name: "Pakiet ogólny",
      results: {
        hemoglobin: 13,
        glucose: 85,
        cholesterol: 42,
      },
      doctorComment:
        "Niewielkie podwyższenie cholesterolu. Zaleca się zmniejszenie spożycia tłuszczów nasyconych.",
      result: "POZYTYWNY",
    },
  ],
};
