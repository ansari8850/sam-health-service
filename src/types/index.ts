// Lab Test Types
export interface LabTest {
  id: string;
  name: string;
  category: string;
  disease_tag: string;
  price: number;
  description: string;
}

// Form Types
export interface UserFormData {
  firstName: string;
  lastName: string;
  mobileNumber: string;
}

export interface AddressFormData {
  location: string;
  landmark: string;
  roomNumber: string;
  buildingName: string;
  area: string;
  city: string;
  pincode: string;
}

export interface BookingFormData extends UserFormData, AddressFormData {
  selectedTests: LabTest[];
}

// Animation Types
export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

// Component Props
export interface TestCardProps {
  test: LabTest;
  isSelected: boolean;
  onToggle: (test: LabTest) => void;
}

export interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

// Email Service Types
export interface EmailData {
  to_email?: string;
  from_name: string;
  from_email?: string;
  phone_number: string;
  address: string;
  tests: string;
  total_amount: number;
  booking_date: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
}

// Feature Types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Step Types (for How it Works)
export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}
