import api from "../../services/axios";
import type { AllCategoryType } from "../../types/category";

export async function getAllCategories(): Promise<AllCategoryType[]> {
  const response = await api.get("/categories");
  return response.data.data;
}