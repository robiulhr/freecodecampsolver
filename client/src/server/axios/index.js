import axios from "axios";
import { FCC_BASE_URL, FCC_SOLVER_BASE_URL } from "../apiMap";

export const FCCSolverAxios = axios.create({
  baseURL: FCC_SOLVER_BASE_URL,
  headers: {
    accept: "application/json",
  },
});

export const FCCAxios = axios.create({
  baseURL: FCC_BASE_URL,
  headers: {
    accept: "application/json",
  },
});
