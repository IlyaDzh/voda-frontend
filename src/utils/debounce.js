import { debounce as _debounce } from "lodash";

export const debounce = (func, time) => _debounce(func, time);
