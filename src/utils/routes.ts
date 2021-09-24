import {VOLSHEBNIK_ROUTE, CHILD_ROUTE} from "./consts";
import {Child} from "../components/Child";
import {Volshebnik} from "../components/Volshebnik";

export const publicRoutes = [
    {
        path: CHILD_ROUTE,
        Component: Child
    }
]

export const privateRoutes = [
    {
        path: VOLSHEBNIK_ROUTE,
        Component: Volshebnik
    }
]