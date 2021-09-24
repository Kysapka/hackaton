import { VOLSHEBNIK_ROUTE, INDEX_ROUTE } from './consts';
import {Volshebnik} from "../components/Volshebnik";
import { Content } from '../components/Content/Content';

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: Content
    }
]

export const privateRoutes = [
    {
        path: VOLSHEBNIK_ROUTE,
        Component: Volshebnik
    }
]