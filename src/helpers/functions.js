import moment from "moment";
import { civilStatusEnum, genderEnum } from "./enums";

export const hasValue = (v) => {
    return v !== null && v !== undefined && v !== '' && v !== 0;
}

export const formatDate = (date) => {
    if (hasValue(date)) {
        if (date instanceof Date) {
            return moment(date).format("MMM DD, YYYY");
        }
    }
    return '';
}

export const computeAge = (date) => {
    if (hasValue(date)) {
        if (date instanceof Date) {
            return moment().diff(moment(date).format("YYYY-MM-DD"), 'years');
        }
    }
    return '';
}

export const getGender = (id) => {
    if (id === 0)
        return '';
    return id === genderEnum.male ? 'Male' : 'Female';
}

export const getCivilStatus = (id) => {
    if (id === civilStatusEnum.married)
        return 'Married';
    if (id === civilStatusEnum.others)
        return 'Others';
    if (id === civilStatusEnum.separated)
        return 'Separated';
    if (id === civilStatusEnum.single)
        return 'Single';
    if (id === civilStatusEnum.widowed)
        return 'Widowed';

    return '';
}
