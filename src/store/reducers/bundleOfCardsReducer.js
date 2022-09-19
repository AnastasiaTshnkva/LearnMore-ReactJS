import {
    SET_BUNDLE_OF_CARDS_REQUEST,
    GET_BUNDLE_OF_CARDS_SUCCESS,
    GET_BUNDLE_OF_CARDS_FAILURE,
    SET_CURRENT_BUNDLE_REQUEST,
    GET_CURRENT_BUNDLE_SUCCESS,
    GET_CURRENT_BUNDLE_FAILURE,
    CREATE_NEW_CARD_SUCCESS,
    CREATE_NEW_CARD_ERROR,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_ERROR,
    CORRECT_CARD,
    CORRECT_BUNDLE,
} from '../actions/bundleOfCardsCreators';


const initState = {
    cardsLoading: false,
    cardsError: null,
    cardsData: [],
    currentBundleLoading: false,
    currentBundleError: null,
    currentBundleData: {},
}

const bundleOfCardsReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_BUNDLE_OF_CARDS_REQUEST:
            return {
                ...state,
                cardsLoading: true,
            };

        case GET_BUNDLE_OF_CARDS_SUCCESS:
            return {
                ...state,
                cardsLoading: false,
                cardsData: action.payload,
            };

        case GET_BUNDLE_OF_CARDS_FAILURE:
            return {
                ...state,
                cardsLoading: false,
                cardsError: action.payload,
            };

        case SET_CURRENT_BUNDLE_REQUEST:
            return {
                ...state,
                currentBundleLoading: true,
            };

        case GET_CURRENT_BUNDLE_SUCCESS:
            return {
                ...state,
                currentBundleLoading: false,
                currentBundleData: action.payload,
            };

        case GET_CURRENT_BUNDLE_FAILURE:
            return {
                ...state,
                currentBundleLoading: false,
                currentBundleError: action.payload,
            };

        case CREATE_NEW_CARD_SUCCESS:
            return {
                ...state,
                cardsData: action.payload,
            };

        case CREATE_NEW_CARD_ERROR:
            return {
                ...state,
                cardsError: action.payload,
            };


        case DELETE_CARD_SUCCESS:
            return {
                ...state,
                cardsData: action.payload,
            };

        case DELETE_CARD_ERROR:
            return {
                ...state,
                cardsError: action.payload,
            };

        case CORRECT_CARD:
            return {
                ...state,
                cardsData: action.payload,
            }

        case CORRECT_BUNDLE:
            return {
                ...state,
                currentBundleData: action.payload,
            }

        default:
            return {...state}
    }
}

export default bundleOfCardsReducer;