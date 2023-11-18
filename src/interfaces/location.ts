export interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: null;
  country: null;
  cities: null;
  regionId: number;
  region: null;
  naturalAreas: null;
  maps: null;
  indigenousReservations: null;
  airports: null;
}

export interface DepartmentsResponse {
  data: Department[];
}

// Cities
export interface City {
  id: number;
  name: string;
  description: string;
  surface: number | null;
  population: number | null;
  postalCode: null | string;
  departmentId: number;
  department: null;
  touristAttractions: null;
  presidents: null;
  indigenousReservations: null;
  airports: null;
}

export interface CitiesResponse {
  data: City[];
}
