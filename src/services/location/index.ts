import { apiLocation } from "../../api/apiLocation";
import { CitiesResponse, DepartmentsResponse } from "../../interfaces/location";

export const getAllDepartments = (): Promise<DepartmentsResponse> => {
  return apiLocation.get("/Department");
};

export const getAllCities = (id: string): Promise<CitiesResponse> => {
  return apiLocation.get(`/Department/${id}/cities`);
};
