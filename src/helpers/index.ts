import moment from 'moment';
import _ from 'lodash';
import { useEffect, useState, useRef } from 'react';
import { IFilterQuery } from '../store';

export function isNumeric(value: any) {
	return /^-{0,1}\d+$/.test(value);
}
export function isNumericInteger(value: any) {
	return /^[0-9]*$/.test(value);
}
export function isString(str: any) {
	let isStr = false;
	if (str && typeof str === 'string') {
		isStr = true;
	}
	return isStr;
}
export const isEmailValid = function (str: any) {
	let emailValid = false;
	if (isString(str)) {
		if (str.match(/[a-z0-9_+\-.]+@[a-z0-9_\-.]+\.[a-z]+/i)) {
			emailValid = true;
		}
	}
	return emailValid;
};
export function buildFormData(formData: any, data: any, parentKey?: string) {
	if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
		if (Array.isArray(data)) {
			formData.append(parentKey, data);
		} else {
			Object.keys(data).forEach((key) => {
				const fieldKey = isNumeric(key) ? '[]' : `[${key}]`;
				buildFormData(formData, data[key], parentKey ? `${parentKey}${fieldKey}` : key);
			});
		}
	} else {
		const value = data == null ? '' : data;
		formData.append(parentKey, value);
	}
}

export function objectToFormData(data: any) {
	const formData = new FormData();
	buildFormData(formData, data);
	return formData;
}

export const formatSqlDate = (date: string, noTime?: boolean, shortYear?: boolean): string => {
	if (!date) return '';
	const formatDateTimeFull = 'DD/MM/YYYY HH:mm';
	const formatDateFull = 'DD/MM/YYYY';
	const formatDateTimeShort = 'DD/MM/YY HH:mm';
	const formatDateShort = 'DD/MM/YY';
	const dateTimeZone = moment.utc(date).local();
	const dateNormal = moment(date);
	if (!noTime) {
		if (isIsoDate(date)) {
			if (shortYear) {
				return dateTimeZone.format(formatDateTimeShort);
			}
			return dateTimeZone.format(formatDateTimeFull);
		}
		if (shortYear) {
			return dateNormal.format(formatDateTimeShort);
		}
		return dateNormal.format(formatDateTimeFull);
	}
	if (isIsoDate(date)) {
		if (shortYear) {
			return dateTimeZone.format(formatDateShort);
		}
		return dateTimeZone.format(formatDateFull);
	}
	if (shortYear) {
		return dateNormal.format(formatDateShort);
	}
	return dateNormal.format(formatDateFull);
};

export const useDebounce = (value: any, delay: number) => {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[value, delay], // Only re-call effect if value or delay changes
	);

	return debouncedValue;
};

export const checkAccessParent = (accessible: any, mod: string) => {
	if (!accessible) {
		return true;
	}
	if (accessible[mod]) {
		if (!accessible[mod].length) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
};

export const checkAccess = (accessible: any, mod: string, action = 'view') => {
	if (!accessible) {
		return true;
	}
	if (accessible[mod]) {
		if (_.indexOf(accessible[mod], action) === -1) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
};

export const usePrevious = (value: any) => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	}, [value]); // Only re-run if value changes

	return ref.current;
};

export const timer = (seconds: number): string => {
	let min = '00';
	let sec = seconds < 10 ? '0' + String(seconds) : String(seconds);
	if (seconds >= 60) {
		const secs = seconds % 60;
		sec = secs < 10 ? '0' + String(secs) : String(secs);
		const mins = Math.floor(seconds / 60);
		min = mins < 10 ? '0' + String(mins) : String(mins);
	}
	return min + ':' + sec;
};

export const isNewerVersion = (oldVer: string, newVer: string) => {
	const oldParts = oldVer.split('.');
	const newParts = newVer.split('.');
	for (var i = 0; i < newParts.length; i++) {
		const a = ~~newParts[i]; // parse int
		const b = ~~oldParts[i]; // parse int
		if (a > b) return true;
		if (a < b) return false;
	}
	return false;
};

enum ETypeRange {
	day = 'day',
	hour = 'hour',
	minute = 'minute',
	second = 'second',
}

export const durationFromNow = (date: string, type: ETypeRange = ETypeRange.day): any => {
	const now = moment(new Date()); //todays date
	const duration = moment.duration(now.diff(date));
	switch (type) {
		case ETypeRange.day:
			return duration.asDays();
		case ETypeRange.hour:
			return duration.asHours();
		case ETypeRange.minute:
			return duration.asMinutes();
		case ETypeRange.second:
			return duration.asSeconds();
		default:
			break;
	}
};

export const isIsoDate = (str: string): boolean => {
	if (
		/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/.test(
			str,
		)
	)
		return true;
	var d = new Date(str);
	if (d.toString() === 'Invalid Date') return false;
	return d.toISOString() === str;
};

export const capitalizeFirstLetter = (s: string) => {
	return s && s[0].toUpperCase() + s.slice(1);
};

export const validateIpAddress = (ipaddress: string) => {
	const ipv46Regex =
		/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;

	if (ipv46Regex.test(ipaddress)) {
		return true;
	}
	return false;
};

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
export function countryToFlag(isoCode: string) {
	return typeof String.fromCodePoint !== 'undefined' ? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) : isoCode;
}

export const objectToQuery = (obj: any) => {
	const qs = Object.keys(obj)
		.map((key) => `${key}=${obj[key]}`)
		.join('&');

	return qs;
};

export const convertInitFilter = (data: any, currentSearch?: any) => {
	let newFilter: IFilterQuery[] = [];
	data.forEach((d: any) => {
		if (currentSearch[d?.id]) {
			let indexSpliceOperator = currentSearch[d?.id].indexOf(':');
			let operatorString = currentSearch[d?.id].slice(0, indexSpliceOperator);
			let valueString = currentSearch[d?.id].slice(indexSpliceOperator + 1);
			newFilter.push({
				field_name: d.id,
				operator: operatorString,
				compare_value: valueString,
			});
		}
	});
	return newFilter;
};
