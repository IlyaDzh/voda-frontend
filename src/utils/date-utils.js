import { format } from "date-fns";

export const formatDate = (date, type = "yyyy-MM-dd") =>
    format(new Date(date), type);
