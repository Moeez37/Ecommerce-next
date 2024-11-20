import { SortingTypes } from "../../../_types/types";

export function ProductSorting(sortType, products: []) {
    switch (sortType) {
        case SortingTypes.PLTH: {
            return products.sort((a, b) => a.price - b.price)
        }
        case SortingTypes.PHTL: {
            return products.sort((a, b) => b.price - a.price)
        }
        case SortingTypes.DFLT: {

            return products
        }
        case SortingTypes.NEW: {
            return products
        }
        default:{
            return products
        }
    }

}